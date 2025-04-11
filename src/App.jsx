import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Vans } from "./pages/vans/Vans";
import { VanDetail } from "./pages/vans/VanDetail";
import { Layout } from "./components/Layout";

import { Dashboard } from "./pages/host/Dashboard";
import { Income } from "./pages/host/Income";
import { Reviews } from "./pages/host/Reviews";
import { HostLayout } from "./components/HostLayout";
import { HostVans } from "./pages/host/HostVans";
import { HostVanDetail } from "./pages/host/HostVanDetail";
import { HostVanPhotos } from "./pages/host/HostVanPhotos";
import { HostVanPricing } from "./pages/host/HostVanPricing";
import { HostVanInfo } from "./pages/host/HostVanInfo";
import { PageNotFound } from "./pages/PageNotFound";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="/vans/:id" element={<VanDetail />} />

          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="vans" element={<HostVans />} />
            <Route path="vans/:id" element={<HostVanDetail />}>
              <Route index element={<HostVanInfo />} />
              <Route path="pricing" element={<HostVanPricing />} />
              <Route path="photos" element={<HostVanPhotos />} />
            </Route>

            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
