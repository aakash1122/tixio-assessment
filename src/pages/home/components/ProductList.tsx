import ProductCard from "../../../components/productCard";
import { products } from "../../../data";
type Props = {};
const ProductList = (props: Props) => {
  return (
    <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 py-12">
      {products.map((product, i) => (
        <ProductCard key={product.name + i} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
