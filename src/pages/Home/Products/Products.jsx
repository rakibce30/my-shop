import { useEffect, useState } from "react";
import Card from "../Card/Card";


const Products = () => {
    const [shoes, setShoes] = useState([]);
    
    useEffect( () => {
        fetch('https://fakestoreapi.com/products')
        .then( res => res.json())
        .then( data => setShoes(data))
    }, [])

    return (
        <div className="mt-20">
            <h1 className="text-center text-4xl font-bold pb-12">Shop</h1>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 px-8 lg:px-0">
                {
                    shoes?.slice(0, 8).map(product => <Card
                        key={product.id}
                        product={product}
                    ></Card>)
                }
            </div>
        </div>
    );
};

export default Products;