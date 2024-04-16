import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/login/Login";
import Home from "../pages/home/Home";
import { Signin } from "../pages/signin/Signin";
import { ComponentType } from "react";
import Libary from "../pages/libary/Libary";

interface PrivateProps {
  Item: ComponentType; 
}

export const Private = ({ Item }: PrivateProps) =>{
  const signed = false;

  return signed > true ? <Item /> : <Login />;
}

 export const ListRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/libary" element={<Private Item={Libary} />} /> 
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};



