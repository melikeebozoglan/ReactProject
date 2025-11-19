import { useCallback, useState } from "react";
import appCore from "../../core/appCore";
import { useDispatch } from "react-redux";
import {
  setGlobalError,
  setGlobalLoading,
} from "../../redux/slices/fetchSlice";

type ServiceKeys = keyof typeof appCore.services;

interface TriggerProps<S extends ServiceKeys> {
  serviceName: S;
  methodName: keyof (typeof appCore.services)[S];
  payload?: any;
}

function useFetch() {
  const [data, setData] = useState<any>(null);
  const dispatch = useDispatch();

  const trigger = useCallback(
    async <S extends ServiceKeys>({
      serviceName,
      methodName,
      payload,
    }: TriggerProps<S>) => {
      try {
        dispatch(setGlobalLoading(true));

        const serviceObject = appCore.services[serviceName];
        const serviceMethod = serviceObject[methodName];

        if (typeof serviceMethod !== "function") {
          throw new Error(
            `'${String(serviceName)}.${String(
              methodName
            )}' bir fonksiyon değil.`
          );
        }

        const response = await serviceMethod(payload);

        setData(response);
        return response;
      } catch (err: any) {
        console.error("useFetch error:", err);
        dispatch(setGlobalError(err.message || "Bir hata oluştu."));
        return null;
      } finally {
        dispatch(setGlobalLoading(false));
      }
    },
    [dispatch]
  );

  return { data, trigger };
}

export default useFetch;
