
import { ProductCard } from "./ProductCard";
import { productData } from "../constants/products";

export const Products: React.FC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
      {productData.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
    )
}