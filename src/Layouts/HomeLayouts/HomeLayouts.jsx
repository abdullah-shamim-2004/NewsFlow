import React from "react";
import { Outlet } from "react-router";

const HomeLayouts = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default HomeLayouts;
