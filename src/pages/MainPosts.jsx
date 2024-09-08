import { useOutletContext } from "react-router-dom";
import AsideFiltter from "../component/AsideFiltter";
import Post from "../component/Post";
import { Link } from "react-router-dom";
import AddPostsIcon from "../icons/AddPostsIcon";

export default function MainPosts() {
  const { filteredPosts, categories, onCategoryChange, handleDelete } =
    useOutletContext();

  return (
    <>

      <div className="flex flex-grow bg-s-light">
        <AsideFiltter
          onCategoryChange={onCategoryChange}
          categories={categories}
        />

        <main className="flex-grow p-4">
          <Link to="/AddPost" aria-label="Add a new post">
            <AddPostsIcon />
          </Link>

          <div className="postContainer">
            {filteredPosts.map((item) => (
              <Post
                key={item.id}
                item={item}
                categoriesArr={categories}
                handleDelete={handleDelete}
              />
            ))}
          </div>
        </main>
      </div>
    </>
  );
}
