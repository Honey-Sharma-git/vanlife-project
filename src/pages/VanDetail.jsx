import { useParams } from "react-router-dom";
import { getData } from "./Vans";
import { useEffect, useState } from "react";
import { URL } from "./Vans";

export const VanDetail = () => {
  const [van, setVan] = useState();
  const params = useParams();

  useEffect(() => {
    getData(`${URL}/${params.id}`).then((res) => {
      setVan(res);
    });
  }, [params.id]);

  return (
    <main>
      {van ? (
        <section className="flex flex-col gap-5 items-start p-5">
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
