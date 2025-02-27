import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer/Footer";
import { LoginHeader } from "../components/LoginHeader/LoginHeader";

export const LayoutLogin = () => {
  return (
    <>
      <div>
        <LoginHeader></LoginHeader>
      </div>
      <div>
        <Outlet></Outlet>
      </div>
    </>
  );
};
