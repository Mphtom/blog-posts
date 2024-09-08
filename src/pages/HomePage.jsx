import { Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
function HomePage() {
  const { categories } = useOutletContext();
  return (
    <main className="container mx-auto my-12 px-6">
      <div className="hero flex flex-col md:flex-row justify-between items-center mb-12">
        <div className="about text-center md:text-left flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Front End Blog
          </h1>
          <p className="mb-6 text-lg leading-relaxed">
            Welcome to the Front End Blog! This is your go-to resource for all
            things front-end development, brought to you by Mostapha Yasser, a
            full-stack developer with a passion for the MERN stack and front-end
            technologies. Stay updated with the latest trends, release notes,
            and insightful articles to enhance your front-end skills.
          </p>
          <div className="card-actions justify-end">
            <Link className="btn bg-main text-xl w-full lg:w-32" to={`/posts`}>
              read more
            </Link>
          </div>
        </div>
        <img
          src="frontend.svg"
          alt="Front End Blog Logo"
          className="img-fluid w-full md:w-1/2 mt-8 md:mt-0"
        />
      </div>

      <hr className="my-12" />

      <div className="categories-section bg-base-100 shadow-md p-8 rounded-lg my-12">
        <h2 className="text-3xl font-bold mb-8 text-center">
          What are you interested in?
        </h2>
        <div className="postContainer grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((item, index) => (
            <div
              key={index}
              className="card text-center shadow-sm cursor-pointer"
            >
              <div className="card-body">
                <h5 className="card-title font-bold">{item.name}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>

      <hr className="my-12" />

      <div className="about-us my-12">
        <h2 className="text-3xl font-bold mb-8 text-center">
          <i className="fas fa-info-circle"></i> About Us
        </h2>
        <p className="text-center mb-4">
          <i className="fas fa-code"></i> Front End Blog is dedicated to
          bringing you the best content in front-end development. From tips and
          tricks to deep dives into the latest technologies, we re here to help
          you succeed in your journey as a front-end developer.
        </p>
        <p className="text-center">
          <i className="fas fa-users"></i> Whether youre just starting or youre
          a seasoned developer, our blog has something for everyone.
        </p>
      </div>

      <hr className="my-12" />

      <div className="services my-12">
        <h2 className="text-3xl font-bold mb-8 text-center">
          <i className="fas fa-concierge-bell"></i> Our Services
        </h2>
        <div className="stats stats-vertical lg:stats-horizontal shadow my-10 ">
          <div className="stat bg-main text-lime-50 text-center ">
            <h1 className="font-extrabold  mb-4" >Latest Articles</h1>
            <div >
              Stay updated with the latest trends and insights in front-end
              development.
            </div>
          </div>

          <div className=" stat font-extrabold text-center  text-main">
            <h1 className="font-extrabold  mb-4">Expert Guidance</h1>
            <div>
              Get expert tips and advice from seasoned developers in the
              industry.
            </div>
          </div>

          <div className="stat bg-main text-lime-50 text-center ">
            <h1 className="font-extrabold mb-4">Community Support</h1>
            <div className="">
              Join our community and engage with like-minded front-end
              enthusiasts.
            </div>
          </div>
        </div>
      </div>

      <hr className="my-12" />
    </main>
  );
}

export default HomePage;
