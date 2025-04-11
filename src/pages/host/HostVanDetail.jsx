import { useEffect, useState } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
export const HostVanDetail = () => {
  const [vanDetail, setVanDetail] = useState(null);
  const params = useParams();

  async function getHostVanDetail() {
    const response = await fetch(`/api/host/vans/${params.id}`);
    const data = await response.json();
    return data.vans;
  }
  console.log(vanDetail);
  useEffect(() => {
    getHostVanDetail().then((res) => {
      setVanDetail(res);
    });
  }, []);

  return (
    <>
      <nav className="m-5">
        <Link className="hover:underline" to={".."} relative="path">
          &#8592; Back to all vans
        </Link>
      </nav>
      <article className="m-5 bg-white p-5 rounded-lg flex flex-col gap-3">
        {vanDetail ? (
          <section
            key={vanDetail.id}
            className="flex flex-row gap-5 items-center"
          >
            <img
              className="h-32 rounded-lg"
              src={vanDetail.imageUrl}
              alt={vanDetail.description}
            />

            <div className="flex flex-col items-start gap-1">
              <p
                className={`${vanDetail.type} p-1 px-5 rounded-lg text-white text-center`}
              >
                {vanDetail.type}
              </p>
              <h2 className="font-bold text-2xl">{vanDetail.name}</h2>
              <p>{`$${vanDetail.price}/day`}</p>
            </div>
          </section>
        ) : (
          <p>Loading...</p>
        )}
        <nav className=" flex flex-row gap-3 text-xl">
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
        {vanDetail ? <Outlet context={vanDetail} /> : <p>Loading...</p>}
      </article>
    </>
  );
};
