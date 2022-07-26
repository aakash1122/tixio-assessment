import Headphone from "@/assets/products/headphone.png";
import { AiFillStar, AiOutlineHeart } from "react-icons/ai";
import { Product } from "../types";
import Button from "./core/button";

type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => {
  const { name, imageUrl, onSale, rating, prevPrice, price } = product;
  return (
    <div className="p-5 rounded border-[1px] border-[#F1F1F1]">
      <div className="flex items-center justify-between">
        {onSale && (
          <p className="text-xs text-red-600 bg-[#de361816] py-1 px-3 font-body font-medium rounded">
            Sale
          </p>
        )}
        <div className="ml-auto">
          <AiOutlineHeart
            size={20}
            className="cursor-pointer hover:fill-red-400"
          />
        </div>
      </div>

      <div className="mt-8">
        <img src={imageUrl} alt="product-" className="h-48 w-auto mx-auto" />
      </div>

      <div className="mt-8">
        <p className="text-xs text-[#959EAD]">Electironics</p>
        <h4 className="text-base font-medium text-dark_primary my-1">{name}</h4>
        <div className="flex items-center gap-1">
          {Array(rating)
            .fill("")
            .map((_, i) => (
              <AiFillStar size={16} className="fill-yellow-400" key={i} />
            ))}
        </div>
        <div className="mt-5">
          <Button
            variant="outlined"
            css="justify-between group hover:bg-primary hover:border-primary"
            fullwidth
          >
            <p className="group-hover:text-white">Add To Cart</p>
            <p className="group-hover:text-white">$1,725.00</p>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
