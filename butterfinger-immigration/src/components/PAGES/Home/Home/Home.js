import Banner from "../../Banner/Banner";
import Service from './../Service/Service';

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <Service></Service>
      <h1> Photos Gallery</h1>
      <div id="gallery" className="home-img">
       
      </div>
    </>
  );
};

export default Home;
