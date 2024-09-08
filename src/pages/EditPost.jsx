import axios from 'axios';
import { TokenContext } from '../component/TokenContext';
import { useNavigate, useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';

export default function EditPost() {
  const navigate = useNavigate();
  const { token } = useContext(TokenContext);
  const { fetchData } = useOutletContext();
  const { id } = useParams(); 
  const [postData, setPostData] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/posts/${id}`);
        setPostData(response.data);
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };

    fetchPost();
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
      title: formData.get('title'),
      description: formData.get('description'),
      imageUrl: formData.get('imageUrl'),
      categories: formData.getAll('catagValu'),
      userToken: token
    };

    try {
      const response = await axios.put(`http://localhost:3000/posts/${id}`, data);
      fetchData();
      navigate("/posts", { replace: true });
      console.log('Post updated:', response.data);
    } catch (error) {
      console.error('Error updating post:', error);
    }
  };

  if (!postData) return <div>Loading...</div>;

  return (
    <div className="flex justify-center items-center py-10 w-full bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-3xl p-8 space-y-6 bg-white shadow-lg rounded-lg"
      >
        <div className="form-control">
          <label htmlFor="title" className="label">
            <span className="label-text">Title</span>
          </label>
          <input
            id="title"
            type="text"
            name="title"
            defaultValue={postData.title}
            placeholder="Enter the title of the post"
            className="input input-bordered w-full"
          />
        </div>

        <div className="form-control">
          <label htmlFor="description" className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea
            id="description"
            name="description"
            defaultValue={postData.description}
            placeholder="Enter the description of the post"
            className="textarea textarea-bordered w-full"
            rows="4"
          ></textarea>
        </div>

        <div className="form-control">
          <label htmlFor="image" className="label">
            <span className="label-text">Image URL</span>
          </label>
          <input
            id="image"
            type="url"
            name="imageUrl"
            defaultValue={postData.imageUrl}
            placeholder="Enter the URL of the image"
            className="input input-bordered w-full"
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Choose categories:</span>
          </label>
          <div className="grid grid-cols-2 gap-4">
            {["CSS", "JavaScript", "Web Design", "React", "Web Performance", "Optimization", "Programming"].map((category, index) => (
              <label key={index} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id={category}
                  value={index + 1}
                  name="catagValu"
                  defaultChecked={postData.categories.includes((index + 1).toString())}
                  className="relative w-7 h-7 aspect-square !appearance-none !bg-none checked:!bg-gradient-to-tr checked:!from-sky-400 checked:!to-white bg-white border border-gray-300 shadow-sm rounded !outline-none !ring-0 !text-transparent !ring-offset-0 checked:!border-sky-400 hover:!border-sky-400 cursor-pointer transition-all duration-300 ease-in-out focus-visible:!outline-offset-2 focus-visible:!outline-2 focus-visible:!outline-sky-400/30 focus-visible:border-sky-400 after:w-[35%] after:h-[53%] after:absolute after:opacity-0 after:top-[40%] after:left-[50%] after:-translate-x-2/4 after:-translate-y-2/4 after:rotate-[25deg] after:drop-shadow-[1px_0.5px_1px_rgba(56,149,248,0.5)] after:border-r-[0.25em] after:border-r-white after:border-b-[0.25em] after:border-b-white after:transition-all after:duration-200 after:ease-linear checked:after:opacity-100 checked:after:rotate-45"
                />
                <span>{category}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="form-control my-4">
          <button type="submit" className="btn btn-primary w-full">
            Update
          </button>
        </div>
      </form>
    </div>
  );
}