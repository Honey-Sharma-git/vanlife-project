import { useLoaderData, useSearchParams } from "react-router-dom";
import {  useState } from "react";
import { Link } from "react-router-dom";
import "../../../server";
import { getData } from "../../api";

export const URL = "/api/vans";

export function loader() {
  return getData(URL);
}

export const Vans = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");

  const [error, setError] = useState(null);

  const vans = useLoaderData();
  console.log(vans);

  const displayedVans = typeFilter
    ? vans.filter((van) => {
        return typeFilter === van.type;
      })
    : vans;
  const vansElements = displayedVans.map((van) => {
    return (
      <Link
        state={{ search: searchParams.toString(), type: typeFilter }}
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

  //Early return
  if (error) {
    return <h1>There is an error {error.message}</h1>;
  }
  return (
    <main>
      <div className="flex flex-col items-center">
        <h1 className=" text-4xl font-medium text-center">
          Explore our van options
        </h1>
        {/* Type filters */}
        <div className="flex flex-row justify-center gap-4">
          <button
            className={`bg-amber-200 cursor-pointer p-1 rounded-sm px-4 hover:bg-amber-500 ${
              typeFilter === "simple" ? "simple" : null
            }`}
            onClick={() => {
              setSearchParams({ type: "simple" });
            }}
          >
            Simple
          </button>
          <button
            className={`bg-amber-200 hover:text-white cursor-pointer p-1 rounded-sm px-4 hover:bg-black ${
              typeFilter === "luxury" ? "luxury" : null
            }`}
            onClick={() => {
              setSearchParams({ type: "luxury" });
            }}
          >
            Luxury
          </button>
          <button
            className={`bg-amber-200 hover:text-white cursor-pointer p-1 rounded-sm px-4 hover:bg-green-700 ${
              typeFilter === "rugged" ? "rugged" : null
            }`}
            onClick={() => {
              setSearchParams({ type: "rugged" });
            }}
          >
            Rugged
          </button>
          {typeFilter && (
            <button
              className="bg-amber-200 cursor-pointer p-1 rounded-sm px-4 hover:bg-gray-200"
              onClick={() => {
                setSearchParams({});
              }}
            >
              Clear
            </button>
          )}
        </div>
        <article className="flex flex-row flex-wrap gap-5 justify-center p-5 w-[80%]">
          {vansElements}
        </article>
      </div>
    </main>
  );
};
