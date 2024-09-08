/* eslint-disable react/prop-types */

export default function AsideFiltter({ onCategoryChange, categories }) {
  return (
    <aside className=" p-3 bg-gray1-00 text-dark min-w-fit sticky top-0 h-screen overflow-hidden shadow-lg transition-transform transform ">
      <h2 className="text-xl p-2 font-semibold mb-4">filter </h2>
      <ul className="w-full ">
        {categories.map((category) => (
          <li key={category.id}>
            <button
              className="w-full duration-300 my-2 hover:scale-110 text-start pl-1 text-xs sm:text-sm lg:text-lg  transition 
                hover:bg-dark hover:text-white
                "
              onClick={() => onCategoryChange(category.id)}
            >
              {category.name}
            </button>
          </li>
        ))}
        <li>
          <button
            className="w-full my-2 hover:scale-110 text-start pl-1 text-xs sm:text-sm lg:text-lg  transition-transform
                hover:bg-dark hover:text-white"
            onClick={() => onCategoryChange(null)}
          >
            All
          </button>
        </li>
      </ul>
    </aside>
  );
}
