import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";
import Product from "../components/product";
import { IProduct } from "../models/product";

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;

  const [product, setProduct] = useState<IProduct[] | undefined>();
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await (await fetch(`api/products/${id}`)).json();
      setProduct(res);
    };
    fetchProducts();
  }, []);

  if (product == undefined  || product == null) {
    return ( <main className="px-10 py-6 flex flex-col flex-1">
    <h1> item is not here </h1>  
    </main>)
  } else { 
    return (
       <main className="px-10 py-6 flex flex-col flex-1">

         {product.map((p) => (
           <product key={p.product_id} {...p} />
         ))}
  
  </main>)
   }
  };
  
