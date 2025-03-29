import { Link } from "react-router-dom";
export const Home = () => {
  return (
    <main className="min-h-screen  ">
      <header className="home-header-bg">
        <div className=" bg-gray-900/70 p-5 flex flex-col gap-8 py-20 ">
          <h2 className="text-4xl text-white font-bold">
            You got the travel plans, we got the travel plans.
          </h2>
          <p className="text-white">
            Add adventure to your life by joining the #vanlife movement. <br />
            Rent the perfect van to make your perfect road trip.
          </p>

          <Link
            className="bg-amber-600 p-1 rounded-sm text-center text-white"
            to={"/vans"}
          >
            Find your vans
          </Link>
        </div>
      </header>
    </main>
  );
};
