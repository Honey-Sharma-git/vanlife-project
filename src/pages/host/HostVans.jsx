import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const HostVans = () => {
  const [hostVans, setHostVans] = useState([]);

  async function getHostVansData() {
    const response = await fetch(`/api/host/vans`);
    const data = await response.json();
    return data.vans;
  }

  useEffect(() => {
    getHostVansData().then((res) => {
      setHostVans(res);
    });
  }, []);

  const hostVansElement = hostVans.map((van) => {
    return (
      <Link to={`/host/vans/${van.id}`} key={van.id}>
        <li className=" bg-white flex flex-row items-center py-3 px-5 gap-5 rounded-lg drop-shadow-lg">
          <img
            className="h-20 rounded-lg"
            src={van.imageUrl}
            alt={van.description}
          />
          <div>
            <h3 className="font-bold">{van.name}</h3>{" "}
            <p>{`$${van.price}/day`}</p>
          </div>
        </li>
      </Link>
    );
  });
  return (
    <main className="px-8 ">
      <h1 className="font-bold text-3xl">You listed vans</h1>
      <ul className="flex flex-col gap-5 px-5 py-3 ">
        {hostVans.length > 0 ? hostVansElement : <h3>Loading...</h3>}
      </ul>
    </main>
  );
};
