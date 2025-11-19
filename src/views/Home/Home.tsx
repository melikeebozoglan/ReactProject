//Home.tsx
import { useEffect } from "react";
import { useFetch } from "../../hooks";
import appCore from "../../core/appCore";

function Home() {
  const { data, trigger } = useFetch();
  useEffect(() => {
    trigger({
      serviceName: "testService",
      methodName: "getTestData",
    });

    console.log(
      "cookie(global_error):",
      appCore.cookies.getCookie(appCore.cookies.COOKIE_KEYS.GLOBAL_ERROR)
    );

    console.log(
      "cookie(global_loading):",
      appCore.cookies.getCookie(appCore.cookies.COOKIE_KEYS.GLOBAL_LOADING)
    );
  }, [trigger]);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Home</h1>

      <pre className="bg-gray-200 p-4 rounded text-sm">
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
}

export default Home;
