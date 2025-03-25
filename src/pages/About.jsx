import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { Link } from "react-router-dom";
import bgImg from "../assets/images/about-hero.png";
export const About = () => {
  return (
    <main>
      <Navbar />
      <img src={bgImg} alt="about image" />
      <article className="p-5 flex flex-col gap-5">
        <h2 className="font-bold text-4xl">
          Don't squeeze in sedan when you could relax in a van.
        </h2>
        <p>
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra) Our team
          is full of vanlife enthusiasts who know firsthand the magic of touring
          the world on 4 wheels
        </p>

        <section className="bg-amber-400 p-5 flex flex-col gap-1 items-start">
          <p className="font-bold text-lg">Your destination is waiting.</p>
          <p className="font-bold text-lg">Your van is ready.</p>
          <Link
            className="rounded-sm bg-black text-white p-2 px-8"
            to={"/vans"}
          >
            Explore our vans
          </Link>
        </section>
      </article>
      <Footer />
    </main>
  );
};
