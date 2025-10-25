import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Origin from "@/components/Origin";
import VideoSection from "@/components/VideoSection";
import Products from "@/components/Products";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Origin />
      <VideoSection />
      <Products />
      <Footer />
    </div>
  );
};

export default Index;
