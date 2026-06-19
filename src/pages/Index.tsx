import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Origin from "@/components/Origin";
import VideoSection from "@/components/VideoSection";
import Products from "@/components/Products";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Café Salvador | Café de la Selva Peruana</title>
        <meta name="description" content="Café premium de Omia, Rodríguez de Mendoza, Perú. Descubre el sabor único de la ceja de selva peruana en cada taza de Café Salvador." />
        <link rel="canonical" href="/" />
        <meta property="og:title" content="Café Salvador | Café de la Selva Peruana" />
        <meta property="og:description" content="Café premium de Omia, Rodríguez de Mendoza, Perú. Descubre el sabor único de la ceja de selva peruana." />
        <meta property="og:url" content="https://salvadorpe.lovable.app/" />
      </Helmet>
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
