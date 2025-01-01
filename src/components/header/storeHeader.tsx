import React from "react";
import StoreLink from "../link/storeLink";
import { Routes } from "@/constants/enums";
import StoreNavbar from "./storeNavbar";

type Props = {};

const StoreHeader = (props: Props) => {
  return (
    <header>
      <div className="container">
        <div className="gap-2">
          <StoreLink href={Routes.ROOT}>🏠</StoreLink>
          <StoreLink href={Routes.STORE}>🏪</StoreLink>
        </div>
        <StoreNavbar />
      </div>
    </header>
  );
};

export default StoreHeader;
