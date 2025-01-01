import React from "react";
import StoreLink from "../link/storeLink";
import { Pages, Routes } from "@/constants/enums";

const StoreNavbar = () => {
  const links = [
    { id: crypto.randomUUID(), title: "Vendors", href: Routes.VENDORS },
    { id: crypto.randomUUID(), title: "About", href: Routes.ABOUT },
    {
      id: crypto.randomUUID(),
      title: "contact",
      href: Routes.CONTACT,
    },
    {
      id: crypto.randomUUID(),
      title: "login",
      href: `${Routes.AUTH}/${Pages.LOGIN}`,
    },
  ];
  return (
    <nav>
      <ul>
        {links.map((link) => (
          <li key={link.id}>
            <StoreLink href={`${link.href}`}>{link.title}</StoreLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default StoreNavbar;
