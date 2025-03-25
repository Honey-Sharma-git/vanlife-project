import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <header className="bg-amber-50 flex justify-between items-center p-5">
      <h1 className="text-2xl font-bold ">
        <Link to={"/"}>#VanLife</Link>
      </h1>
      <nav className="flex flex-row gap-5">
        <Link to={"/about"}>About</Link>
        <Link to={"/vans"}>Vans</Link>
      </nav>
    </header>
  );
};
