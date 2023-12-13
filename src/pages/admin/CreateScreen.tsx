import { useDispatch } from "react-redux";
import { createChangedToggle } from "../../global/globalState";
import { AiOutlineClose } from "react-icons/ai";
import { FaCamera } from "react-icons/fa";
import { useState } from "react";
import pix from "../../../public/vite.svg";
const CreateScreen = () => {
  const dispatch = useDispatch();
  const [avatar, setAvatar] = useState(pix);
  const [image, setImage] = useState("");
  const onHandleImage = (e: any) => {
    const local = e.target.files[0];
    const save = URL.createObjectURL(local);
    setImage(local);
    setAvatar(save);
  };

  return (
    <div
      className="w-full z-[300] h-full fixed flex-col top-0 flex items-center bg-gray-300"
      // style={{ backdropFilter: "blur(4px)" }}
    >
      <div className="w-full z-[300] h-full flex items-center justify-center ">
        <div className="flex w-[800px] h-[300px] items-center justify-around flex-col border border-black rounded-[20px]">
          <div>
            <div className="absolute top-32">
              <AiOutlineClose
                className="hover:cursor-pointer  z-[300] text-3xl transition-all duration-300 hover:scale-[1.2]"
                onClick={() => {
                  dispatch(createChangedToggle());
                }}
              />
            </div>
          </div>
          <div className="flex  items-center w-full justify-around">
            <input type="file" id="image" hidden onChange={onHandleImage} />
            <div className="w-[200px] h-[200px] rounded-[10px] border relative ">
              <label htmlFor="image">
                <div className="absolute bottom-0 -right-5 px-2 py-2 rounded-full bg-white hover:cursor-pointer">
                  <FaCamera className="text-2xl hover:cursor-pointer" />
                </div>
              </label>
              <img
                src={avatar ? avatar : image}
                alt=""
                className="object-cover w-full h-full"
              />
            </div>
            <div className="px-2 py-2 border border-gray-300 w-auto h-auto">
              <div className="flex flex-col px-2 py-2 ">
                Product Name:
                <div className="w-full h-[35px] border border-gray-700 rounded-md overflow-hidden">
                  <input type="text"  className="w-full h-full pl-3 outline-none  "/>
                </div>
              </div>
              <div className="flex flex-col px-2 py-2 ">
                Price:
                <div className="w-full h-[35px] border border-gray-700 rounded-md overflow-hidden">
                  <input type="text" className="w-full h-full pl-3 outline-none  "/>
                </div>
              </div>
              <div className="w-ful items-center flex justify-center my-3">
                <button className="px-3 py-2 rounded-md text-[14px]  bg-black text-white">
                  Create Product
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateScreen;
