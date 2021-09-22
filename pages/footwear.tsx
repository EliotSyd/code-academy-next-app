import Product from "../components/product";
import { IProduct } from "../models/product";
import { useEffect, useState } from "react";

export default function Home() {
    const [products, setProducts] = useState<IProduct[]>([]);
    useEffect(() => {
        const fetchProducts = async () => {
            const res = await (await fetch(`api/products/category/footwear`)).json();
            setProducts(res);
        };
        fetchProducts();
    }, []);
    return (
        <div className="mt-10 flex flex-wrap flex-col sm:flex-row w-full justify-center items-center">
            {products.map((p) => (
                <Product key={p.product_id} {...p} />
        ))}
        </div>
    )
}