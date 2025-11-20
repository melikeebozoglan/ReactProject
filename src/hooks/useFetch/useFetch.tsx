import { useCallback, useState } from "react";
import appCore from "../../core/appCore";
import { useDispatch } from "react-redux";
import {
  setGlobalError,
  setGlobalLoading,
} from "../../redux/slices/fetchSlice";

type MethodKeys = keyof typeof appCore.services;

interface TriggerProps {
  methodName: MethodKeys;
  payload?: any;
}

function useFetch() {
  const [data, setData] = useState<any>(null);
  const dispatch = useDispatch();

  const trigger = useCallback(
    async ({ methodName, payload }: TriggerProps) => {
      try {
        dispatch(setGlobalLoading(true));

        const serviceMethod = appCore.services[methodName];

        if (typeof serviceMethod !== "function") {
          throw new Error(`'${String(methodName)}' bir fonksiyon değil.`);
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
