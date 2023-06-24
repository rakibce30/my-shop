import { useState } from "react";
import Rating from "../../../components/Rating/Rating";
import { FaStar } from "react-icons/fa";


const Card = ({ product }) => {
    const { id, title, price, description, category, image, rating } = product;
    // const [rating, setRating] = useState(0);

    return (
        <div className="card  bg-base-100 border border-slate-200/20 shadow-xl">
            <figure className="bg-white"><img src={image} alt="Shoes" className="h-[250px] object-cover" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className="text-orange-600">$ {price}</p>
                <p className="relative">
                    <span className="flex flex-row">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </span>
                    <Rating rating={rating.rate} className="" />
                </p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Card;