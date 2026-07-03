import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import QRHome from "../pages/QR/QRHome";

export default function AppRouter() {
 return (
   <BrowserRouter>
     <Routes>
       <Route element={<MainLayout />}>
         <Route path="/" element={<Home />} />
         <Route path="/qr" element={<QRHome />} />
       </Route>
     </Routes>
   </BrowserRouter>
 );
}
