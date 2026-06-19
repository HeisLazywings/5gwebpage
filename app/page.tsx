import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="bg-black">
        <Hero />

        <section className="py-24">
      <Services />
      </section>
      </main>

      <Footer />
    </>
  );
}