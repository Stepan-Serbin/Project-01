import { useEffect, useState } from "react";
import type Product from "../../types/Product";

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch(
          "https://api.escuelajs.co/api/v1/products"
        );
        const data = await res.json();
        setProducts(data);
      } catch {
        setMessage("Error");
      }
    }

    fetchProducts();
  }, []);

  return { products, message };
};
