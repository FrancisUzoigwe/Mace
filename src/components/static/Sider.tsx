import { TiArrowForward } from "react-icons/ti";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  buyerChangedToggle,
  buyerToggle,
  logOut,
} from "../../global/globalState";
import { useState } from "react";
import { FiShoppingBag } from "react-icons/fi";
import { TiShoppingCart } from "react-icons/ti";
import { AiOutlineLogout } from "react-icons/ai";
import { Link } from "react-router-dom";

const Sider = () => {
  const [toggled, setToggled] = useState<boolean>(false);
  const onToggle = () => {
    setToggled(!toggled);
  };

  const buyer = useSelector((state: any) => state.buyer);
  const dispatch = useDispatch();
  return (
    <div
      className={`${
        !buyer ? "w-[50px]" : "w-[100px] "
      } flex flex-col items-center h-screen`}
    >
      <div className="fixed">
        <div
          className={`${
            !buyer ? "w-[50px]" : "w-[100px] "
          } flex flex-col items-center h-screen bg-[#EEEEEE]`}
        >
          <div className="w-full items-center flex justify-end ">
            <div
              className=""
              onClick={() => {
                onToggle();
              }}
            >
              {!toggled ? (
                <TiArrowForward
                  className="text-3xl hover:cursor-pointer transition-all duration-300 hover:scale-125 "
                  onClick={() => {
                    dispatch(buyerToggle());
                  }}
                />
              ) : (
                <TiArrowForward
                  className="text-3xl hover:cursor-pointer transition-all  duration-300 hover:scale-125 rotate-180"
                  onClick={() => {
                    dispatch(buyerChangedToggle());
                  }}
                />
              )}
            </div>
          </div>
          <Link to="/">
            <div className="mt-4 flex items-center justify-start">
              <FiShoppingBag className="text-2xl" />
              {buyer && <div>Products</div>}
            </div>
          </Link>
          <Link to="/check">
            <div className="mt-10 flex items-center justify-start">
              <TiShoppingCart className="text-3xl" />
              {buyer && <div className="">See Cart</div>}
            </div>
          </Link>
          <div
            className="mt-10 flex items-center justify-start"
            onClick={() => {
              dispatch(logOut());
            }}
          >
            <AiOutlineLogout className="text-3xl" />
            {buyer && <div className="">Logout</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sider;
