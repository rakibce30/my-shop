import { FaStar, FaStarHalf } from "react-icons/fa";

const Rating = ({ rating }) => {

    const fullStarRating = Math.floor(rating);
    const halfStarRating = rating % 1 !== 0;
    const count = [...Array(fullStarRating).keys()]

    return (
        <div className="flex space-x-2">
            <div className='flex flex-row relative w-[80px]'>
                <span className="flex flex-row absolute left-0 top-0">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                </span>
                <div className="flex flex-row absolute left-0 top-0">
                    {
                        count.map((_, index) => (
                            <FaStar key={index} className="text-yellow-600"></FaStar>
                        ))
                    }
                    {
                        halfStarRating && <FaStarHalf className="text-yellow-600"></FaStarHalf>
                    }
                </div>
            </div>
            <p>{rating}</p>
        </div>
    );
};



export default Rating;