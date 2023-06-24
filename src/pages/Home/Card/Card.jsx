import Rating from "../../../components/Rating/Rating";
import { Link } from "react-router-dom";


const Card = ({ product }) => {
    const { id, title, price, category, image, rating } = product;

    return (
        <div className="card  bg-base-100 border border-slate-200/20 shadow-xl">
            <figure className="bg-white"><img src={image} alt="Shoes" className="h-[250px] object-cover" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className="italic ">Category: <Link to="/" className="text-blue-500 underline cursor-pointer">{category}</Link></p>
                <p className="text-orange-600">$ {price}</p>
                <Rating rating={rating.rate} className="" />
                <div className="card-actions justify-end">
                    <Link to={`/shop/${id}`} className="btn btn-primary cursor-pointer">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default Card;