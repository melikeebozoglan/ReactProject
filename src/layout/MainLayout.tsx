//MainLayout.tsx
import { Outlet } from "react-router-dom";
import { Header, Footer, Loader, ErrorMessage } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { setGlobalError } from "../redux/slices/fetchSlice";
import type { RootState } from "../redux/store";

const MainLayout = () => {
  const dispatch = useDispatch();
  const { globalLoading, globalError } = useSelector(
    (state: RootState) => state.fetch
  );

  return (
    <div className="flex flex-col min-h-screen bg-[#F9F9FB]">
      {globalLoading && <Loader />}

      {globalError && (
        <ErrorMessage
          message={globalError}
          onClose={() => dispatch(setGlobalError(null))}
        />
      )}

      <Header />

      <main className="flex-1 w-full max-w-7xl mx-auto px-4 py-6 md:px-6">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
