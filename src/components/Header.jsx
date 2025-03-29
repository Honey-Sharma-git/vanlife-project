import { NavLink, Link } from "react-router-dom";
export const Header = () => {
  return (
    <header className="bg-amber-50 flex justify-between items-center p-5">
      <h1 className="text-3xl font-bold ">
        <Link to={"/"}>#VanLife</Link>
      </h1>
      <nav className="flex flex-row gap-5">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-amber-700 font-medium cursor-default"
              : "text-black hover:underline "
          }
          to={"/about"}
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-amber-700 font-medium cursor-default"
              : "text-black hover:underline "
          }
          to={"/vans"}
        >
          Vans
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-amber-700 font-medium cursor-default"
              : "text-black hover:underline "
          }
          to={"/host"}
        >
          Host
        </NavLink>
      </nav>
    </header>
  );
};
