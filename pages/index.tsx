import classNames from "classnames";
import Head from "next/head";
import Image from "next/image";
import Card from "../components/card";
import Product from "../components/product";
import { useEffect, useState } from "react";
import { IProduct } from "../models/product";

export default function Home() {

  const [products, setProducts] = useState<IProduct[]>([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await (await fetch(`api/products`)).json();
      setProducts(res);
    };
    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <Head>
        <title>Sidetrade Next Template</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </Head>

      <main className="py-20 flex flex-col flex-1 justify-center items-center">

        <h1 className="m-10 leading-snug text-6xl text-center">
          <a className="text-blue-600 no-underline hover:underline focus:underline"
            href="https://nextjs.org" >
          </a>
        </h1>

        <span className="decoration-clone h-11 w-60 bg-gradient-to-b from-blue-600 to-blue-300 text-white text-center font-bold text-4xl ...">
  All Products 
</span>

        <div className="mt-10 flex flex-wrap flex-col sm:flex-row w-full justify-center items-center text-blue-400">
          {products.map((p) => (
            <Product key={p.product_id} {...p} />
          ))}

        </div>

      </main>


      <footer className="w-full h-24 flex justify-center items-center border-t border-solid border-gray-200">
        <a
          className="flex flex-1 justify-center items-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className="h-4 ml-2">
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
