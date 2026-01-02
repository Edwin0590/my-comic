import { Routes, Route, Outlet } from "react-router-dom";

import Home from "../pages/Home";
import Latest from "../pages/Latest";
import Populer from "../pages/Populer";
import DaftarKomik from "../pages/DaftarKomik";
import About from "../pages/About";
import Login from "../pages/Login";

import WebtoonStudio from "../components/WebtoonStudio";
import MainLayout from "../layouts/MainLayout";
import AdminRoute from "../components/AdminRoute";

function Layout() {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
}

export default function AppRoutes() {
  return (
    <Routes>
      {/* Public routes pakai MainLayout */}
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/terbaru" element={<Latest />} />
        <Route path="/populer" element={<Populer />} />
        <Route path="/daftar-komik" element={<DaftarKomik />} />
        <Route path="/about" element={<About />} />
      </Route>

      {/* Login tanpa layout */}
      <Route path="/login" element={<Login />} />

      {/* Admin pakai layout juga */}
      <Route
        element={
          <AdminRoute>
            <Layout />
          </AdminRoute>
        }
      >
        <Route path="/studio" element={<WebtoonStudio />} />
      </Route>
    </Routes>
  );
}



