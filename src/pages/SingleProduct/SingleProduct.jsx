import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Rating from "../../components/Rating/Rating";

const SingleProduct = () => {
    const productId = useParams()
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${productId.id}`)
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setLoading(false)
            })
    }, [productId])

    if (loading) {
        return 'loading...'
    }
    return (
        <div>
            <div className="w-full flex mt-20">
                <div className="lg:w-1/2 mr-8 bg-white rounded">
                    <img src={products.image} alt="" className="mx-auto p-12 w-[400px] h-[400] object-cover" />
                </div>

                <div className="lg:w-1/2 p-12">
                    <h2 className="text-3xl font-semibold mb-4">{products.title}</h2>
                    <Rating rating={products?.rating?.rate}/>
                </div>
            </div>
        </div >
    );
};

export default SingleProduct;