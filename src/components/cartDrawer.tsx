import { AiOutlineDelete, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import Button from "./core/button";

const CartItemAction = () => {
  return (
    <div className="flex flex-col justify-between items-end">
      <AiOutlineDelete size={24} className="cursor-pointer" />
      <div className="flex items-center gap-4 py-2 px-3 border-[1px] border-dark_primary rounded">
        <AiOutlineMinus size={24} className="cursor-pointer" />
        <span className="text-base font-medium">01</span>
        <AiOutlinePlus size={24} className="cursor-pointer" />
      </div>
    </div>
  );
};

const CartItem = () => {
  return (
    <div className="flex items-stretch justify-between py-8 border-b-[1px] border-[#E9E9E9]">
      <div className="flex items-stretch gap-3">
        {/* image */}
        <div className="p-4 rounded bg-[#E8F0D6] w-[100px] aspect-square">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL5BC6cMrBxjyDFjQhtFAqH0u-CzFSHxADxg&usqp=CAU"
            alt="cart-product"
            className="h-auto w-auto object-contain"
          />
        </div>
        {/* content */}
        <div className="flex flex-col justify-center gap-2">
          <p className="text-lg font-medium w-56 truncate">
            Women Yellow Turtleneck
          </p>
          <p className="text-sm ">
            Size:
            <span className="text-dark_secondary">Medium</span>
          </p>
          <p className="font-semibold">
            $1,725
            <span className="font-medium text-dark_secondary ml-2 line-through">
              $1,725
            </span>
          </p>
        </div>
      </div>
      {/* action */}
      <CartItemAction />
    </div>
  );
};

const Cart = () => {
  return (
    <div className="">
      {/* overlay */}
      <div className="fixed top-0 left-0 right-0 bottom-0 opacity-40 bg-black z-[60]" />
      {/* drawer */}
      <div className="w-[620px] right-0 top-0 h-screen z-[9999] fixed bg-white overflow-y-auto flex flex-col">
        {/* header */}
        <div className="flex items-center p-6 border-b-[1px] border-[#E9E9E9]">
          <MdClose size={32} className="cursor-pointer" />
          <div className="flex items-center mx-auto gap-2">
            <p className="font-medium text-2xl">My cart</p>
            <BiShoppingBag size={36} />
          </div>
        </div>
        {/* cart item list */}
        <div className="px-6 py-6">
          {Array(5)
            .fill("")
            .map((_, i) => (
              <CartItem />
            ))}
        </div>
        {/* checkout */}
        <div className="px-6 mt-auto sticky bottom-0 bg-white py-3 pb-6 shadow-lg">
          <div className="py-4 px-2 bg-[#E8F0D6] text-center rounded">
            <p>Hey get Free shipping on order over 250$</p>
          </div>
          <div className="flex items-stretch justify-between gap-4 mt-6">
            <div>
              <p className="text-lg text-dark_secondary">Sub total:</p>
              <p className="text-xl font-semibold">$ 5,175</p>
            </div>
            <Button variant="filled" css="w-2/3 font-semibold">
              Checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
