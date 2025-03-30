import { useEffect, useState } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
export const HostVanDetail = () => {
  const [vanDetail, setVanDetail] = useState([]);
  const params = useParams();

  async function getHostVanDetail() {
    const response = await fetch(`/api/host/vans/${params.id}`);
    const data = await response.json();
    return data.vans;
  }

  useEffect(() => {
    getHostVanDetail().then((res) => {
      setVanDetail(res);
    });
  }, []);

  const vanDetailElement = vanDetail.map((detail) => {
    return (
      <section key={detail.id} className="flex flex-row gap-5 items-center">
        <img
          className="h-32 rounded-lg"
          src={detail.imageUrl}
          alt={detail.description}
        />

        <div className="flex flex-col items-start gap-1">
          <p
            className={`${detail.type} p-1 px-5 rounded-lg text-white text-center`}
          >
            {detail.type}
          </p>
          <h2 className="font-bold text-2xl">{detail.name}</h2>
          <p>{`$${detail.price}/day`}</p>
        </div>
      </section>
    );
  });
  return (
    <>
      <nav className="m-5">
        <Link className="hover:underline" to={".."} relative="path">
          &#8592; Back to all vans
        </Link>
      </nav>
      <article className="m-5 bg-white p-5 rounded-lg flex flex-col gap-3">
        {vanDetailElement.length > 0 ? vanDetailElement : <p>Loading...</p>}
        <nav className=" flex flex-row gap-3">
          <NavLink
            end
            className={({ isActive }) => {
              return isActive ? "underline font-bold" : "hover:underline";
            }}
            to={"."}
          >
            Details
          </NavLink>
          <NavLink
            className={({ isActive }) => {
              return isActive ? "underline font-bold" : "hover:underline";
            }}
            to={"pricing"}
          >
            Pricing
          </NavLink>
          <NavLink
            className={({ isActive }) => {
              return isActive ? "underline font-bold" : "hover:underline";
            }}
            to={"photos"}
          >
            Photos
          </NavLink>
        </nav>
        <Outlet />
      </article>
    </>
  );
};
