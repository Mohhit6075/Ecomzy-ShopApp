import Logo from "../logo.png";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { cart } = useSelector((state) => state);
  return (
    <div className="flex flex-row justify-between items-center h-20 max-w-6xl mx-auto">
      <NavLink to="/">
        <div className="ml-6">
          <img src={Logo} className="h-14 brightness-150" alt="Logo" />
        </div>
      </NavLink>
      <div className="flex flex-row items-center gap-x-6 mr-6 text-slate-100 -tracking-tighter font-medium">
        <NavLink to="/">
          <p className="hover:text-green-400 cursor-pointer transition-color duration-100">
            Home
          </p>
        </NavLink>
        <NavLink to="/cart">
          <div className="relative">
            <FaShoppingCart className="text-2xl " />
            {cart.length > 0 && (
              <span className="absolute -top-1 -right-2 bg-[#ff0000] rounded-full text-sm w-5 h-5 grid justify-items-center animate-bounce text-white">
                {cart.length}
              </span>
            )}
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
