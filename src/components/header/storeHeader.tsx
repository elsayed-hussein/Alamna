import React from "react";
import StoreLink from "../link/storeLink";
import { Routes } from "@/constants/enums";
import StoreNavbar from "./storeNavbar";

const StoreHeader = () => {
  return (
    <header className="py-4 md:py-6">
      <div className="container flex items-center justify-between ">
        <div className="flex gap-4">
          <StoreLink
            href={Routes.ROOT}
            className="text-primary font-semibold text-2xl px-2"
          >
            🏠 Home
          </StoreLink>
          <StoreLink
            href={Routes.STORE}
            className="text-primary font-semibold text-2xl px-2"
          >
            🏪 Store
          </StoreLink>
        </div>
        <StoreNavbar />
      </div>
    </header>
  );
};

export default StoreHeader;
