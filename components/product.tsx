import classNames from "classnames";
import { IProduct } from "../models/product";
import Link from "next/link";
import Image from "next/image";

const Product: React.FC<IProduct> = ({ product_id, product_name, selling_price, product_image }) => {
  return (
    <Link href={`/${product_id}`}>
      <a className="m-3 w-96 text-left no-underline border border-solid border-gray-200 rounded-lg hover:shadow-md focus:shadow-md focus:outline-none">
        <div className="p-5">
          <Image
            src={product_image}
            width={500}
            height={500}
          />
          <h2 className="m0 mb-4 text-2xl font-medium">{product_name}</h2>
          <p className="m-0 text-xl">Category: {product_id}</p>
          <p className="m-0 text-xl">£{selling_price}</p>
        </div>
      </a>
    </Link>
  );
};


export default Product;