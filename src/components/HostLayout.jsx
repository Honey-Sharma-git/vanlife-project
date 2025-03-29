import { NavLink, Outlet } from "react-router-dom";
export const HostLayout = () => {
  const activeStyles = {
    fontWeight: "bold",
    color: "#161616",
    textDecoration: "underline",
  };
  const inactiveStyles = {};
  return (
    <>
      <nav className="flex flex-row rounded-2xl drop-shadow-2xl bg-amber-500 text-white gap-5 justify-between w-1/3 py-1 px-5">
        <NavLink
          end={true}
          style={({ isActive }) => {
            return isActive ? activeStyles : null;
          }}
          to={"/host"}
        >
          Dashboard
        </NavLink>
        <NavLink
          style={({ isActive }) => {
            return isActive ? activeStyles : null;
          }}
          to={"/host/income"}
        >
          Income
        </NavLink>
        <NavLink
          style={({ isActive }) => {
            return isActive ? activeStyles : null;
          }}
          to={"/host/reviews"}
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
};

{
}
