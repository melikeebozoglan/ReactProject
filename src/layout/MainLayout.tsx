//MainLayout.tsx
import { Outlet } from "react-router-dom";
import { Header, Footer, Loader, ErrorMessage } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { setGlobalError } from "../redux/slices/fetchSlice";
import type { RootState } from "../redux/store";

const MainLayout = () => {
  const dispatch = useDispatch();
  const { globalLoading, globalError } = useSelector((state: RootState) => state.fetch);

  return (
    <div className="flex flex-col min-h-screen bg-[#F9F9FB] overflow-y-auto">
      {globalLoading && <Loader />}

      {globalError && (
        <ErrorMessage
          message={globalError}
          onClose={() => dispatch(setGlobalError(null))}
        />
      )}

      <Header />

      <main className="flex-1 w-full mx-auto px-4 py-3 md:px-6 md:py-5 lg:px-10 xl:px-50">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;