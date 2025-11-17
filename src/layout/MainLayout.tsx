//MainLayout.tsx

import { Outlet } from "react-router-dom";
import { Header, Footer } from "../components";

const MainLayout = () => {
  return (
    <div className="app-root">
      <Header />

      <main className="app-content" style={{ minHeight: "70vh" }}>
        {/* Home veya Detail burada görünür */}
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
