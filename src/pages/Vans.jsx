import { useEffect, useState } from "react";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { Link } from "react-router-dom";
import "../../server";

export const URL = "/api/vans";
export async function getData(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data.vans;
}

export const Vans = () => {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    getData(URL).then((res) => {
      setVans(res);
    });
  }, []);

  const vansElements = vans.map((van) => {
    return (
      <Link
        to={van.id}
        key={van.id}
        className="p-1 flex flex-col gap-3 items-start"
      >
        <img
          className="h-52 aspect-square rounded-lg"
          src={van.imageUrl}
          alt={van.description}
        />

        <div className="flex flex-row w-full justify-between items-center font-bold">
          <h3>{van.name}</h3>
          <p>
            {`$${van.price}`} <small>/day</small>
          </p>
        </div>
        <mark
          className={` ${van.type} p-1 bg-amber-500 px-3 rounded-sm text-white `}
        >
          {van.type}
        </mark>
      </Link>
    );
  });
  return (
    <main>
      <Navbar />
      <div className="flex flex-col items-center">
        <h1 className=" text-4xl font-medium text-center">
          Explore our van options
        </h1>
        <article className="flex flex-row flex-wrap gap-5 justify-center p-5 w-[80%]">
          {vansElements}
        </article>
      </div>
      <Footer />
    </main>
  );
};
