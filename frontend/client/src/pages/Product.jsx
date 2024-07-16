import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { AddToCart } from "../components/AddToCart";
import {
  getProductById,
  getRecommendedProducts,
} from "../adapters/product-adapter";
import { ProductList } from "../components/ProductList";

export const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [errorText, setErrorText] = useState("");
  const [plushies, setPlushies] = useState([]);

  useEffect(() => {
    const doFetch = async () => {
      const [plushie, error] = await getProductById(id);
      if (plushie) return setProduct(plushie[0]);
      if (error) return setErrorText(error.message);
    };
    doFetch();
  }, []);

  //fetch reccommended plushies
  useEffect(() => {
    const doFetch = async () => {
      if(!product.plushieDetails) return
      const price = product?.plushieDetails.price;
      const popularity = product?.plushieDetails.popularity;
      const [recommendations, error] = await getRecommendedProducts({
        price,
        popularity,
      });

      if (error) return setErrorText(error.message);
     // if (plushies) return setPlushies(plushies);
      for (const value in Object.values(recommendations)) {
        const [reccommended, err] = await getProductById(value)
        if (err) return setErrorText(err.message)
          setPlushies(reccommended)
      }
    };
    doFetch();
  }, [product]);

  return (
    <div className="flex gap-10 flex-col items-center">
      {errorText && <p>{errorText}</p>}
      <div className="flex gap-10 mx-32 my-12">
        <img
          className="object-contain w-4/5 rounded-xl"
          src={product?.plushieDetails?.image}
        />
        <div className="flex flex-col gap-4">
          <h1 className="text-6xl font-bold">
            {product?.plushieDetails?.title}
          </h1>
          <p>${product?.plushieDetails?.price}</p>
          <p className="badge badge-outline badge-accent">
            {product?.plushieDetails?.category}
          </p>
          <p>{product?.plushieDetails?.description}</p>
          <AddToCart product={product} />
        </div>
      </div>
      <h2 className="text-3xl font-semibold">Recommended Products</h2>
      <ProductList plushies={plushies} />
    </div>
  );
};
