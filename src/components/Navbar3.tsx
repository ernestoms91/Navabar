import React, { useEffect, useState } from "react";
import { NavLink, Router } from "react-router-dom";
import Logo from "./logo.png";
import DropDown from "./DropDown";

const navbar = {
  //ADMIN_ROLE: [["Usuarios", "administrador/gestionar"], ["Eventos", "administrador/eventos"], ["Cabina", "/cabina"]],
  ADMIN_ROLE: [
    ["Usuarios", "administrador/gestionar"],
    ["Eventos", "administrador/eventos"],
    ["Cabina", "/cabina"],
  ],
  REDACTOR_ROLE: [
    ["Redactar", "redactor/redactar"],
    ["Titulares", "redactor/titulares"],
    ["Minutos", "redactor/minutos"],
    ["Cabina", "/cabina"],
  ],
  CORRECTOR_ROLE: [
    ["Corregir", "corrector/corregir"],
    ["Redactar", "corrector/redactar"],
    ["Titulares", "corrector/titulares"],
    ["Minutos", "corrector/minutos"],
    ["Cabina", "/cabina"],
  ],
  JEFE_T_ROLE: [
    ["Equipo", "jturno/equipo"],
    ["Disponibles", "jturno/disponibles"],
    ["Corregir", "jturno/corregir"],
    ["Redactar", "jturno/redactar"],
    ["Machon", "jturno/machon"],
    ["Titulares", "jturno/titulares"],
    ["Minutos", "jturno/minutos"],
    ["Asignar", "jturno/asignar"],
    ["Revista", "jturno/revista"],
    ["Enfoque", "jturno/enfoque"],
    ["Boletin", "jturno/boletin"],
    ["Cabina", "/cabina"],
  ],
  JEFE_R_ROLE: [
    ["Reportes", "jredaccion/reportes"],
    ["Equipo", "jredaccion/equipo"],
    ["Disponibles", "jturno/disponibles"],
    ["Corregir", "jredaccion/corregir"],
    ["Redactar", "jredaccion/redactar"],
    ["Titulares", "jredaccion/titulares"],
    ["Minutos", "jredaccion/minutos"],
    ["Asignar", "jredaccion/asignar"],
    ["Revista", "jredaccion/revista"],
    ["Enfoque", "jredaccion/enfoque"],
    ["Boletin", "jredaccion/boletin"],
    ["Cabina", "/cabina"],
  ],
  JEFE_REV_ROLE: [
    ["Sumarios", "jrevista/sumarios"],
    ["Corregir", "jrevista/corregir"],
    ["Redactar", "jrevista/redactar"],
    ["Minutos", "jrevista/minutos"],
    ["Asignar", "jrevista/asignar"],
    ["Cabina", "/cabina"],
  ],
  EDITORWEB_ROLE: [
    ["Boletin", "editorweb/boletin"],
    ["Redactar", "editorweb/redactar"],
    ["Minutos", "editorweb/minutos"],
    ["Cabina", "/cabina"],
  ],
  JEFE_E_ROLE: [
    ["Bloques", "jenfoque/bloques"],
    ["Corregir", "jenfoque/corregir"],
    ["Redactar", "jenfoque/redactar"],
    ["Minutos", "jenfoque/minutos"],
    ["Asignar", "jenfoque/asignar"],
    ["Cabina", "/cabina"],
  ],
};

const Navbar3 = () => {
  const [active, setActive] = useState<boolean>(false);
  const [navrole, setNavrole] = useState<string[2][0]>();

  const arreglo = [
    "String1",
    "String2",
    "String3",
    "String4",
    // "string5",
    // "string6",
    // "string7",
    // "string8",
    // "string9",
    // "string1",
    // "string2",
    // "string3",
    // "string4",
    // "string5",
    // "string6",
    // "string7",
    // "string8",
    // "string9",
  ];

  // let arrayNavbarValues = navbar[roleParseTString as keyof typeof navbar];

  const handleActive = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setActive(!active);
  };

  // useEffect(() => {
  //   setNavrole(arrayNavbarValues);
  // });

  return (
    <>
      <nav className="  bg-gradient-to-r from-slate-100 to-red-100  p-5 bg-white shadow md:flex md:items-center  w-full sticky md:justify-between">
        <div className="flex justify-between">
          <img className="h-10" src={Logo} />
          {/* <span className="text-2xl font-[Poppins] cursor-pointer">Radio Reloj</span> */}
          <button className="hover:scale-110  md:hidden" onClick={handleActive}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        <ul className={` flex flex-col text-center ${active ? "" : "hidden"} md:flex-row`}>
          {navbar &&
            arreglo.map((ni) => (
              <>
              <li
                key={`${ni}`}
                className=" flex justify-between  mx-1 border-4 border-transparent  p-2  rounded-lg hover:border-b-white  "
              >
                <a
                  className="text-2xl mx-2 hover:text-red-00 duration-300 "
                  // to={`${ni}`}
                >{`${ni}`}</a>
            
              </li>
             
               <DropDown />
               </>
            ))}
           

          {/*------------- Button Exit ----------------------- */}
          <div className="flex justify-between">
            <button
              className=" flex w-full bg-gradient-to-r from-red-500 to-red-700 text-2xl text-white font-[Poppins] duration-500 px-4 py-3 mx-1 hover:bg-red-800 rounded-lg  justify-center"
              onClick={() => {}}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="my-1 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
              {`Culo`}
            </button>
          </div>
        </ul>
      </nav>
      <div className="bg-slate-500 h-96  text-2xl ">Culo</div>
    </>
  );
};

export default Navbar3;
