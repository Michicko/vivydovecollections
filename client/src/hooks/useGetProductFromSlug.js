import { useEffect } from "react";
import { useProductsContext } from "../contexts/product_context";

const useGetProductFromSlug = (slug) => {
  const { products, fetchSingleProduct } = useProductsContext();
   useEffect(() => {
    if (products.length > 0) {
			const tempProd = products.find((prod) => prod.slug === slug);
      fetchSingleProduct(tempProd._id);
		}
  }, [products, slug, fetchSingleProduct])
}
 
export default useGetProductFromSlug;