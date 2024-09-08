/* eslint-disable no-unused-vars */
import "./App.css";
import NavBar from "./component/NavBar";
import Footer from "./component/Footer";
import { useState, useEffect } from "react";
import { ScrollRestoration, Outlet } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true); 

  const fetchData = async () => {
    try {
      setLoading(true);
      const [postsResponse, categoriesResponse] = await Promise.all([
        axios.get("http://localhost:3000/posts"),
        axios.get("http://localhost:3000/categories")
      ]);
      setPosts(postsResponse.data);
      setCategories(categoriesResponse.data);
    } catch (error) {
      toast.error("Failed to fetch data");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
   
    fetchData();
  }, []);

  const handleCategoryChange = (id) => {
    setSelectedCategory(id);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData(e.target);
    let objectFormDATA = Object.fromEntries(formData);
    let {
      title,
      description,
      imageUrl,
      catagValu1,
      catagValu2,
      catagValu3,
      catagValu4,
      catagValu5,
      catagValu6,
      catagValu7,
    } = objectFormDATA;
    let rowcatArrId = [
      catagValu1,
      catagValu2,
      catagValu3,
      catagValu4,
      catagValu5,
      catagValu6,
      catagValu7,
    ];
    let catArrId = rowcatArrId.filter(categore => categore !== undefined);
    addNewPost(title, description, imageUrl, catArrId);
  };

  const addNewPost = (NewTitle, NewDescription, NEWimageSOURCE, catArrId) => {
    let NewPostObject = {
      id: posts.length + 1,
      title: NewTitle,
      description: NewDescription,
      image_source: NEWimageSOURCE,
      user_id: (posts.length + 1) * 30,
      categories: catArrId,
    };
    setPosts([NewPostObject, ...posts]);
    toast.success("Post added successfully");
  };

  const handleDelete = (item) => {
    let newPosts = posts.filter(i => i.title !== item.title);
    setPosts(newPosts);
    toast.success("Post deleted successfully");
  };

  const filteredPosts = selectedCategory
    ? posts.filter(post => post.categories.includes(+selectedCategory))
    : posts;

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <Outlet context={{
        posts,
        filteredPosts,
        categories,
        handleDelete,
        handleCategoryChange,
        addNewPost,
        handleFormSubmit,
        fetchData
      }} />
      <ScrollRestoration />
      <Footer />
    </div>
  );
}

export default App;
