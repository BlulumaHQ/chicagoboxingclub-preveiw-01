import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "@/components/Layout";
import Index from "./pages/Index.tsx";
import GoldGlovesFightNights from "./pages/GoldGlovesFightNights.tsx";
import BoxingClasses from "./pages/BoxingClasses.tsx";
import YouthBoxing from "./pages/YouthBoxing.tsx";
import BoxingClassesForWomen from "./pages/BoxingClassesForWomen.tsx";
import MuayThai from "./pages/MuayThai.tsx";
import WrestlingClasses from "./pages/WrestlingClasses.tsx";
import JiuJitsu from "./pages/JiuJitsu.tsx";
import BoxingStudents from "./pages/BoxingStudents.tsx";
import BoxingTrainers from "./pages/BoxingTrainers.tsx";
import Coupons from "./pages/Coupons.tsx";
import BoxingGymPhotos from "./pages/BoxingGymPhotos.tsx";
import VideosAndNews from "./pages/VideosAndNews.tsx";
import BoxingJobOpportunities from "./pages/BoxingJobOpportunities.tsx";
import ContactUs from "./pages/ContactUs.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout><Index /></Layout>} />
          <Route path="/goldglovesfightnights.html" element={<GoldGlovesFightNights />} />
          <Route path="/boxingclasses.html" element={<BoxingClasses />} />
          <Route path="/youthboxing.html" element={<YouthBoxing />} />
          <Route path="/boxingclassesforwomen.html" element={<BoxingClassesForWomen />} />
          <Route path="/muaythai.html" element={<MuayThai />} />
          <Route path="/wrestlingclasses.html" element={<WrestlingClasses />} />
          <Route path="/jiujitsu.html" element={<JiuJitsu />} />
          <Route path="/boxingstudents.html" element={<BoxingStudents />} />
          <Route path="/boxingtrainers.html" element={<BoxingTrainers />} />
          <Route path="/chicagoboxingclubcoupons.html" element={<Coupons />} />
          <Route path="/boxinggymphotos.html" element={<BoxingGymPhotos />} />
          <Route path="/chicagoboxingclubvideosandnews.html" element={<VideosAndNews />} />
          <Route path="/boxingjobopportunities.html" element={<BoxingJobOpportunities />} />
          <Route path="/contactus.html" element={<ContactUs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
