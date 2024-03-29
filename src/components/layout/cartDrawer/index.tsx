import { useMemo } from "react";
import { AiOutlineDelete, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import { useAppDispatch, useAppSelector } from "../../../store";
import {
  addToCart,
  CartItemType,
  reduceCartItemCount,
  removeFromCart,
  selectCartItems,
  toggleCart,
} from "@/store/slices/cartSlice";
import Button from "../../core/button";

const CartItemAction = ({ product }: { product: CartItemType }) => {
  const dispatch = useAppDispatch();
  const productCount = product.itemCount;

  return (
    <div className="flex flex-col justify-between items-end">
      <AiOutlineDelete
        size={24}
        className="cursor-pointer"
        onClick={() => dispatch(removeFromCart(product.id))}
      />
      <div className="flex items-center gap-4 py-2 px-3 border-[1px] border-dark_primary rounded select-none">
        <button
          onClick={() => dispatch(reduceCartItemCount(product))}
          disabled={productCount === 1}
          className="disabled:opacity-20"
          data-testid={`${product.id}-reduce-cart`}
        >
          <AiOutlineMinus size={24} className="cursor-pointer" />
        </button>
        <span
          className="text-base font-medium"
          data-testid={`${product.id}-count`}
        >
          {String(product.itemCount).padStart(2, "0")}
        </span>
        <button
          onClick={() => dispatch(addToCart(product))}
          data-testid={`${product.id}-increase-cart`}
        >
          <AiOutlinePlus size={24} className="cursor-pointer" />
        </button>
      </div>
    </div>
  );
};

const CartItem = ({ product }: { product: CartItemType }) => {
  return (
    <div
      className="flex items-stretch justify-between py-8 border-b-[1px] border-[#E9E9E9]"
      data-testid="cart-item"
    >
      <div className="flex items-stretch gap-3">
        {/* image */}
        <div className="p-4 rounded bg-[#E8F0D6] w-[100px] aspect-square">
          <img
            src={product.imageUrl}
            alt="cart-product"
            className="h-auto w-auto object-contain"
          />
        </div>
        {/* content */}
        <div className="flex flex-col justify-center gap-2">
          <p className="text-lg font-medium w-56 truncate">{product.name}</p>
          <p className="text-sm ">
            Size:
            <span className="text-dark_secondary">Medium</span>
          </p>
          <p className="font-semibold">
            ${product.price}
            {product.prevPrice && (
              <span className="font-medium text-dark_secondary ml-2 line-through">
                ${product.prevPrice}
              </span>
            )}
          </p>
        </div>
      </div>
      {/* action */}
      <CartItemAction product={product} />
    </div>
  );
};

const Cart = () => {
  const isCartOpen = useAppSelector((state) => state.cart.open);
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(selectCartItems);
  const hasItems = !!cartItems.length;

  let subTotal = useMemo(
    () =>
      cartItems.reduce((sum, item) => {
        return (sum += item.price * item.itemCount);
      }, 0),
    [cartItems]
  );

  if (!isCartOpen) return null;

  return (
    <div className="">
      {/* overlay */}
      <div
        className="fixed top-0 left-0 right-0 bottom-0 opacity-40 bg-black z-[60]"
        onClick={() => dispatch(toggleCart())}
      />
      {/* drawer */}
      <div className="w-[620px] right-0 top-0 h-screen z-[9999] fixed bg-white overflow-y-auto flex flex-col">
        {/* header */}
        <div className="flex items-center p-6 border-b-[1px] border-[#E9E9E9] sticky top-0 bg-white">
          <MdClose
            size={32}
            className="cursor-pointer"
            onClick={() => dispatch(toggleCart())}
          />
          <div className="flex items-center mx-auto gap-2">
            <p className="font-medium text-2xl">My cart</p>
            <BiShoppingBag size={36} />
          </div>
        </div>
        {/* cart item list */}
        <div className="px-6 py-6">
          {hasItems ? (
            cartItems.map((product, i) => <CartItem product={product} />)
          ) : (
            <p className="text-xl text-center" data-testid="no-item-text">
              No Item in cart
            </p>
          )}
        </div>
        {/* checkout */}
        {hasItems && (
          <div className="px-6 mt-auto sticky bottom-0 bg-white py-3 pb-6 shadow-lg">
            <div className="py-4 px-2 bg-[#E8F0D6] text-center rounded">
              <p>Hey get Free shipping on order over 250$</p>
            </div>
            <div className="flex items-stretch justify-between gap-4 mt-6">
              <div>
                <p className="text-lg text-dark_secondary">Sub total:</p>
                <p className="text-xl font-semibold">
                  $ <span data-testid="cart-sub-total">{subTotal}</span>
                </p>
              </div>
              <Button variant="filled" css="w-2/3 font-semibold">
                Checkout
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
