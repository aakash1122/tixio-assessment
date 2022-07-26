import { BiShoppingBag } from "react-icons/bi";
import { MdClose } from "react-icons/md";

const Cart = () => {
  return (
    <div className="">
      {/* overlay */}
      <div className="fixed top-0 left-0 right-0 bottom-0 opacity-40 bg-black z-[60]" />
      {/* drawer */}
      <div className="w-[620px] right-0 top-0 h-screen z-[9999] fixed bg-white">
        <div className="flex items-center p-6 border-b-[1px] border-[#E9E9E9]">
          <MdClose size={32} className="cursor-pointer" />
          <div className="flex items-center mx-auto gap-2">
            <p className="font-semibold text-2xl">My cart</p>
            <BiShoppingBag size={36} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
