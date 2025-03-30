import { NavLink, Outlet } from "react-router-dom";
export const HostLayout = () => {
  const activeStyles = {
    fontWeight: "bold",
    color: "#161616",
    textDecoration: "underline",
  };
  return (
    <>
      <nav className="flex flex-row drop-shadow-2xl gap-5 justify-start py-1 px-5">
        <NavLink
          end={true}
          style={({ isActive }) => {
            return isActive ? activeStyles : null;
          }}
          to={"."}
        >
          Dashboard
        </NavLink>
        <NavLink
          style={({ isActive }) => {
            return isActive ? activeStyles : null;
          }}
          to={"income"}
        >
          Income
        </NavLink>
        <NavLink
          style={({ isActive }) => {
            return isActive ? activeStyles : null;
          }}
          to={"vans"}
        >
          Vans
        </NavLink>
        <NavLink
          style={({ isActive }) => {
            return isActive ? activeStyles : null;
          }}
          to={"reviews"}
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
