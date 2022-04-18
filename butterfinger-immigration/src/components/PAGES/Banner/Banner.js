import { Carousel } from "react-bootstrap";

import banner1 from "../../../Images/Banner/b1.jpg";
import banner2 from "../../../Images/Banner/b2.jpg";
import banner3 from "../../../Images/Banner/b3.jpg";

const Banner = () => {
    return (
        <Carousel fade className="mb-5">
            <Carousel.Item>
                <img className="d-block w-100" src={banner1} alt="First slide" />
                <Carousel.Caption className="text-black">
                    <h2>Student Scholarship</h2>
                    <p className="p-2 fs-2">
                        “Looking for full funded Scholarship? Consult now!”
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={banner3} alt="Second slide" />

                <Carousel.Caption>
                    <h2>Business Immigration</h2>
                    <p className="p-2 fs-2">
                        “Looking for Business Immigration? Consult now!”.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={banner2} alt="Third slide" />

                <Carousel.Caption className="text-black">
                    <h2>Skilled Migration</h2>
                    <p className="p-2 fs-2">
                        “Looking for Skilled Migration? Consult now!”
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;
