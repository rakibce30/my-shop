import Banner from "./Banner/Banner";
import Products from "./Products/Products";
import Stat from "./stat/Stat";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Stat></Stat>
            <Products></Products>
        </div>
    );
};

export default Home;