import { Link } from "react-router-dom";
export const PageNotFound = () => {
  return (
    <main className="p-5 flex flex-col gap-5 min-h-screen items-center">
      <h1 className="text-4xl ">Sorry, the page you were looking for was not found.</h1>
      <Link
        to={"/"}
        relative="path"
        className="block bg-black text-white px-10 py-2  rounded-xl cursor-pointer text-center"
      >
        Return to Home
      </Link>
    </main>
  );
};
