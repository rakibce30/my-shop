import { FaStar, FaStarHalf } from "react-icons/fa";

const Rating = ({ rating }) => {

    const fullStarRating = Math.floor(rating);
    const halfStarRating = rating % 1 !== 0;
    const count = [...Array(fullStarRating).keys()]
    console.log(count)

    return (
        <div className='flex flex-row absolute top-0 z-10'>
            {
                count.map((_, index) => (
                    <FaStar key={index} className="text-yellow-600"></FaStar>
                ))
            }
            {
                halfStarRating && <FaStarHalf className="text-yellow-600"></FaStarHalf>
            }
        </div>
    );
};



export default Rating;