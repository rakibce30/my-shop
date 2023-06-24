import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Header/Footer/Footer";


const Main = () => {
    return (
        <div className="max-w-screen-2xl mx-auto">
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;