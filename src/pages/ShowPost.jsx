import { useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";

export default function ShowPost() {
  const { posts } = useOutletContext();
  const { id } = useParams();
  const [redirect, setRedirect] = useState(false);

  const post = posts.find((item) => item.id === id);

  useEffect(() => {
    if (!post) {
      setRedirect(true);
    }
  }, [post, id]);

  if (redirect) {
    return <Navigate to="/NotFound" />;
  }

  if (!post) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <div className="max-w-xl lg:max-w-2xl xl:max-w-screen-xl h-fit mx-auto my-6 bg-white shadow-md rounded-lg overflow-hidden">
        <img
          src="/svg1.svg"
          alt={post.title}
          className="w-full max-h-64 object-fill"
        />
        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-800">{post.title}</h2>

          <div className="mt-4 text-gray-500 flex gap-5">
            <p><strong>Author:</strong> {post.author}</p>
            <p><strong>Date:</strong> {post.date}</p>
          </div>

          <div className="mt-4 text-gray-700">
            <h1 className="text-3xl m-2">Content</h1>
            <p className="px-3">{post.content}</p>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-700">Reviews</h3>
            <div className="mt-4 flex gap-3 align-middle justify-center lg:block">
              {post.reviews.length > 0 ? (
                post.reviews.map((review) => (
                  <div
                    key={review.id}
                    className="bg-gray-2 p-5 rounded-lg w-fit lg:w-full my-2"
                  >
                    <p className="font-semibold text-gray-800">{review.author}</p>
                    <p className="text-yellow-500">
                      {"★".repeat(review.rating)}
                      {"☆".repeat(5 - review.rating)}
                    </p>
                    <p className="mt-2 text-gray-600">{review.comment}</p>
                  </div>
                ))
              ) : (
                <p className="text-gray-600">No reviews yet.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
