import Banner from "../../Banner/Banner";
import Service from './../Service/Service';
import './Home.css'
import n1 from './../../../../Images/news/n1.png'
import n2 from './../../../../Images/news/n3.png'
import n3 from './../../../../Images/news/n2.png'

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Service></Service>
            <div className="news-container">
                <h1 className="news-header"> Immigration News and Updates </h1>
                <div className="img-container">
                    <img src={n1} alt="" />
                    <img src={n2} alt="" />
                    <img src={n3} alt="" />

                </div>
            </div>
        </>
    );
};

export default Home;
