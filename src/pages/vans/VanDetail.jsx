import { Link, useParams, useLocation } from "react-router-dom";
import { getData } from "./Vans";
import { useEffect, useState } from "react";
import { URL } from "./Vans";

export const VanDetail = () => {
  const [van, setVan] = useState();
  const params = useParams();
  const location = useLocation();

  const searchQuery = location.state.search
    ? `../?${location.state.search}`
    : `..`;

  const linkText = location.state.type
    ? `Back to ${location.state.type} vans`
    : "Back to all vans";

  useEffect(() => {
    getData(`${URL}/${params.id}`).then((res) => {
      setVan(res);
    });
  }, [params.id]);

  return (
    <main className="p-5">
      <Link
        to={searchQuery}
        relative="path"
        className="hover:underline mb-5 block"
      >
        <span className="text-xl">&#8592;</span>
        {linkText}
      </Link>
      {van ? (
        <section className="flex flex-col gap-5 items-start ">
          <img
            className="w-[40%] aspect-square rounded-lg"
            src={van.imageUrl}
            alt="van image"
          />
          <mark
            className={`${van.type} p-1 bg-amber-500 px-3 rounded-sm text-white`}
          >
            {van.type}
          </mark>
          <h2 className="font-bold text-4xl">{van.name}</h2>
          <p className="text-2xl font-medium">
            {`$${van.price}`} <small className="text-sm">/day</small>
          </p>
          <p>{van.description}</p>
          <button className="bg-amber-500 p-1 px-3 cursor-pointer rounded-sm text-white font-medium">
            Rent this van
          </button>
        </section>
      ) : (
        <h2 className="font-bold text-4xl">Loading...</h2>
      )}
    </main>
  );
};
