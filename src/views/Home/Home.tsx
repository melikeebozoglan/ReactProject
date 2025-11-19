//Home.tsx
import { useEffect } from "react";
import { useFetch } from "../../hooks";

function Home() {
  const { data, trigger } = useFetch();
  useEffect(() => {
    trigger({
      serviceName: "testService",
      methodName: "getTestData",
    });
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
