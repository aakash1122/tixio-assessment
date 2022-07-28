import { AiOutlineHeart, AiOutlineUser } from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi";
import { CgMenuGridR } from "react-icons/cg";
import { FiSearch } from "react-icons/fi";
import Logo from "../../assets/logo.svg";
import { useAppDispatch, useAppSelector } from "../../store";
import {
  selectCartCount,
  selectWishlist,
  toggleCart,
} from "../../store/slices/cartSlice";
import CartDrawer from "../cartDrawer";
import Badge from "../core/badge";
import Button from "../core/button";
import TextField from "../core/textfield";

const links = [
  { label: "Products", link: "#" },
  { label: "About", link: "#" },
  { label: "Discount", link: "#" },
  { label: "Reviews", link: "#" },
  { label: "Contact Now", link: "#" },
  { label: "Order tracking", link: "#" },
  { label: "Help", link: "#" },
];

const BrandLogo = () => {
  return (
    <div className="flex items-center gap-2">
      <img src={Logo} alt="logo" />
      <h4 className="logo-text">
        <span>Shop</span>Now
      </h4>
    </div>
  );
};

export const Header = () => {
  const dispatch = useAppDispatch();
  const cartCount = useAppSelector(selectCartCount);
  const wishList = useAppSelector(selectWishlist).length;

  return (
    <div className="flex items-center gap-6 py-4">
      <Button variant="outlined" css="bg-[#F9FAFB] border-[#E9E9E9]">
        <CgMenuGridR size={20} />
        <p> Category</p>
      </Button>
      <TextField
        variant="outlined"
        type="text"
        fullwidth
        placeHolder="Search something"
        css="bg-[#F9FAFB] border-[#E9E9E9] focus:border-primary"
      >
        <FiSearch size={20} />
      </TextField>
      <div className="flex items-center gap-4">
        <Badge count={wishList} onClick={() => {}} name="wish-count">
          <AiOutlineHeart size={20} />
        </Badge>
        <Badge
          count={cartCount}
          onClick={() => dispatch(toggleCart())}
          name="cart-count"
        >
          <BiShoppingBag size={20} />
        </Badge>
        <Badge onClick={() => {}}>
          <AiOutlineUser size={20} />
        </Badge>
      </div>
    </div>
  );
};

const Navbar = () => {
  const isCartOpen = useAppSelector((state) => state.cart.open);
  return (
    <>
      <CartDrawer open={isCartOpen} />
      <div className="sticky top-0 z-50 bg-white shadow">
        <div className="container">
          <div className="py-4 flex flex-col md:flex-row items-center justify-between border-b-[1px] border-[#E9E9E9]">
            <div>
              <div className="flex items-center gap-12">
                <BrandLogo />
                <div className="flex items-center gap-4">
                  {links.slice(0, 5).map((link) => (
                    <p className="nav-link" key={link.label}>
                      {link.label}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              {links.slice(5).map((link) => (
                <p className="nav-link" key={link.label}>
                  {link.label}
                </p>
              ))}
            </div>
          </div>

          <div>
            <Header />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
