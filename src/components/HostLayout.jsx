import { Link, Outlet } from "react-router-dom";
export const HostLayout = () => {
  return (
    <>
      <nav className="flex flex-row rounded-2xl drop-shadow-2xl bg-amber-500 text-white gap-5 justify-between w-1/3 py-1 px-5">
        <Link className="hover:underline" to={"/host"}> Dashboard </Link>
        <Link className="hover:underline" to={"/host/income"}>Income </Link>
        <Link className="hover:underline" to={"/host/reviews"}>Reviews </Link>
      </nav>
      <Outlet />
    </>
  );
};
