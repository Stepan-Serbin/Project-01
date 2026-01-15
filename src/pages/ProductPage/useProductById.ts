import { useEffect, useState } from "react";
import type Product from "../../types/Product";

export const useProductById = (id?: string) => {
  const [product, setProduct] = useState<Product>();
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!id) return;

    async function fetchProduct() {
      try {
        const res = await fetch(
          `https://api.escuelajs.co/api/v1/products/${id}`
        );
        const data = await res.json();
        setProduct(data);
      } catch {
        setMessage("Error");
      }
    }

    fetchProduct();
  }, [id]);

  return { product, message };
};
