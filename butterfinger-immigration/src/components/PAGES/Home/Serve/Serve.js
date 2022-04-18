import React from "react";
import { useNavigate } from "react-router-dom";

import "./Serve.css";

const Serve = ({ service }) => {
    const { id, price, image, name, description } = service;

    const navigate = useNavigate();
    const navigateServiceDetail = (id) => {
        navigate(`/service/${id}`);
    };

    return (
        <div className="serve">
            <img className="image" src={image} alt="" />
            <h2>{name}</h2>
            <h4>{price}</h4>
            <p>
                <small>{description}</small>
            </p>
            <button onClick={() => navigateServiceDetail(id)} className="btn">
                Consult Now
            </button>
        </div>
    );
};

export default Serve;
