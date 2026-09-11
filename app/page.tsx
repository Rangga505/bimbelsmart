import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TentangKami from "./components/TentangKami";
import Keunggulan from "./components/Keunggulan";
import ShowcaseAplikasi from "./components/ShowcaseAplikasi";
import Galeri from "./components/Galeri";
import Testimoni from "./components/Testimoni";
import Kontak from "./components/Kontak";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <TentangKami />
        <Keunggulan />
        <ShowcaseAplikasi />
        <Galeri />
        <Testimoni />
        <Kontak />
      </main>
      <Footer />
    </>
  );
}
