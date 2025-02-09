import React from "react";
import { Outlet } from "react-router-dom";
import { DashboardLinks } from "./index";

export default function layout() {
  return (
    <div className="bg-black max-h-[100dvh]">
      <div className="flex lg:py-[2.67dvh] lg:px-3">
        <DashboardLinks />
        <div className="bg-white w-full max-md:flex-col max-md:items-center flex justify-between lg:rounded-3xl max-lg:h-[100dvh] lg:h-[94.65dvh]">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
