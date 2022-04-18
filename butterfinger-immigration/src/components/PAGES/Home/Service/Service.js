import React, { useEffect, useState } from "react";
import Serve from "../Serve/Serve";
import "./Service.css";

const Service = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("services.json")
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, []);

    return (
        <div id="services">
            <h1 className="serve-text"> Consultancy Available on: </h1>
            <div className="container">
                {services.map((service) => (
                    <Serve key={service.id} service={service}></Serve>
                ))}
            </div>
        </div>
    );
};

export default Service;
