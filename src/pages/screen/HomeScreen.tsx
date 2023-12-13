import { useDispatch } from "react-redux";
import vite from "../../../public/vite.svg";
import { addToCart } from "../../global/globalState";
import { productHooks } from "../../hooks/productHooks";
import { FC } from "react";


interface iProps {
  props?: any
}

const Products:FC<iProps> = ({props}) => {
 const dispatch = useDispatch()
  return (
    <div>
      <div className="h-[250px] max-sm:h-[200px] flex items-center border flex-col border-gray-600 rounded-md">
        <div className="w-[95%] mt-2 border  rounded-md h-[150px] max-sm:h-[100px]">
          <img src={props.image ? props.image : vite} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="font-bold">{props.name}</div>
        <div className="text-red-500 font-bold">₦{props.price.toLocaleString()}</div>
        <div className="">
          <button className="px-4 py-2 rounded-md hover:scale-[1.1] transition-all duration-300 bg-black text-white text-[13px]"
          onClick={() => {
            dispatch(addToCart(props))
          }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

const HomeScreen = () => {
  const { products } = productHooks();
  return (
    <div className="grid grid-cols-4 gap-3 max-sm:grid-cols-2 max-lg:grid-cols-3 min-h-[100%] ">
      {products?.map((props: any) => (
        <Products key={props._id} props={props}/>
      ))}
    </div>
  );
};

export default HomeScreen;
