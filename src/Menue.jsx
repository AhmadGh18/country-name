import React from "react";
import { Link } from "react-router-dom";

export const Menu = () => {
  return (
    <div className="flex justify-center items-center gap-4 bg-gray-200 p-4 min-h-screen">
      <Link to="./Guess">
        <div className="flex flex-col items-center w-40 sm:w-48 md:w-56 lg:w-64 xl:w-72 p-3 bg-gradient-to-r from-purple-600 to-indigo-700 rounded-lg shadow-lg transform hover:scale-105 transition-transform text-white font-body">
          <img
            className="rounded-lg mb-3 w-full h-28 sm:h-32 md:h-36 object-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyE9b8Nmt7KUgUt5Koh_958eozvB6vJjeOzg&usqp=CAU"
            alt="Guess the Flag"
          />
          <h2 className="text-center text-sm sm:text-base font-medium">
            Guess the Right Flag
          </h2>
        </div>
      </Link>

      <Link to="./Name">
        <div className="flex flex-col items-center w-40 sm:w-48 md:w-56 lg:w-64 xl:w-72 p-3 bg-gradient-to-r from-green-600 to-teal-700 rounded-lg shadow-lg transform hover:scale-105 transition-transform text-white font-body">
          <img
            className="rounded-lg mb-3 w-full h-28 sm:h-32 md:h-36 object-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGqv8Ror7miwKvxnM88eubZJ1GWfvwqY2f076JYQ9yo4uscRmPJQp3LhgYmHjhlcVzGB4&usqp=CAU"
            alt="Guess the Flag"
          />
          <h2 className="text-center text-sm sm:text-base font-medium">
            Guess Country Name
          </h2>
        </div>
      </Link>
    </div>
  );
};
