/* eslint-disable react/prop-types */
import DeletPost from "../icons/DeletPost";
import Edit from "../icons/Edit";
import { Link } from "react-router-dom";
import { TokenContext } from "./TokenContext";
import { useContext } from "react";
export default function Post({ item, categoriesArr, handleDelete }) {
  const categories = Array.isArray(item.categories) ? item.categories : [];
  const { token } = useContext(TokenContext);

  return (
    <div className=" p-10 w-full">
      <div className="card overflow-hidden lg:card-side bg-base-100 shadow-xl border-r-4 text-xs sm:text-sm md:text-lg lg:text-xl relative">
        <div className="absolute top-1 end-0 flex gap-1">
          {token === item.userToken && (
            <>
              <span className="cursor-pointer">
                <Link
                  to={`/editpost/${item.id}`}
                >
                  <Edit />
                </Link>
              </span>
              <span
                className=" cursor-pointer "
                onClick={() => handleDelete(item)}
              >
                <DeletPost />
              </span>
            </>
          )}
        </div>
        <figure className="w-full lg:w-1/2 ">
          <img
            src="svg1.svg"
            alt={item.title}
            className="rounded-lg shadow-md w-full h-auto  object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{item.title}</h2>
          <p>{item.description}</p>
          <p>
            {categories.length > 0 ? (
              categories.map((id) => {
                const category = categoriesArr[id - 1];
                return (
                  <span key={id} className="badge badge-info m-1">
                    {category
                      ? typeof category === "object"
                        ? category.name
                        : category
                      : "Unknown Category"}
                  </span>
                );
              })
            ) : (
              <span>No categories available</span>
            )}
          </p>
          <div className="card-actions justify-end">
            <Link
              className="btn bg-main text-xl w-full lg:w-32"
              to={`/ShowPost/${item.id}`}
            >
              read more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
