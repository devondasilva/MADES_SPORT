import React from "react";

const Newsletter: React.FC = () => {
  return (
    <section className="bg-blue-500 text-white py-6 px-4">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between space-y-2 lg:space-y-0">
        <div className="lg:mr-4">
          <h2 className="text-xl lg:text-2xl font-bold">
            Recevez nos nouveautés
          </h2>
          <p className="text-sm mt-1">
            Nos projets de formation offrent de nouvelles opportunités, allant
            sur le plan international.
          </p>
        </div>

        <form className="flex items-center bg-white p-1.5 rounded-md w-full lg:w-auto">
          <span className="text-blue-500 pl-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M17 20.5H7c-3 0-5-1.5-5-5v-7c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v7c0 3.5-2 5-5 5Z"
                stroke="blue"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="m17 9-3.13 2.5c-1.03.82-2.72.82-3.75 0L7 9"
                stroke="blue"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </span>
          <input
            type="email"
            placeholder="Entrez adresse email"
            className="flex-1 bg-transparent lg:text-base focus:outline-none w-full text-gray-700 placeholder-gray-500 px-2"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm lg:text-base hover:bg-blue-600 transition"
          >
            Je m'abonne
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
