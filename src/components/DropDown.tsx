import { useState } from "react";

const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const list = ["Bombo", "Bulo", "Zamba"];
  return (
    <div className="relative flex flex-col items-center rounded-xl ">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className=" p-2 w-full flex items-center justify-between text-2xl  rounded-lg border-4 
        border-transparent active:border-white duration-300 active:text-white"
      >
        DropDown
        {!isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className=" mx-1 w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="mx-1 w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 15.75l7.5-7.5 7.5 7.5"
            />
          </svg>
        )}
      </button>
      {isOpen && (
        <div className=" bg-red-100  w-full top-10 my-2 flex flex-col items-center rounded-lg md:absolute ">
        <ul className="w-full h-full">
          {list.map((item, i) => (
            <li key={i} className=" p-3  w-full text-xl hover:bg-red-200 cursor-point  rounded-r-lg border-l-transparent hover:border-l-white border-l-8">
                {item}
            </li>
           
          ))}
           </ul>
        </div>
      )}
    </div>
  );
};

export default DropDown;
