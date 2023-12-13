import { AiOutlineMenu } from "react-icons/ai";
const SellerHeader = () => {
  return (
    <div className="w-full h-[50px] flex items-center justify-center  bg-[#EEEEEE]">
      <div className="w-full h-[50px] items-center justify-center flex fixed bg-[#EEEEEE]">
        <div className="w-[95%] h-[50px] flex justify-between items-center">
          <div className="font-[Zah]">Mace</div>
          <div className="flex items-center font-[Ever] text-[14px] max-md:hidden"></div>
          <div className="hidden max-md:block">
            <AiOutlineMenu className="text-2xl hover:cursor-pointer transition-all duration-300 hover:scale-125" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerHeader;
