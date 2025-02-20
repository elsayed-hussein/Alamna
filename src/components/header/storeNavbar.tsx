"use client";
import React from "react";
import StoreLink from "../link/storeLink";
import { Pages, Routes } from "@/constants/enums";
import { useState } from "react";
import { Button, buttonVariants } from "../ui/button";
import { useParams, usePathname } from "next/navigation";
import { Menu, XIcon } from "lucide-react";

const StoreNavbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const { locale } = useParams();
  const pathname = usePathname();
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
    <nav className="flex-1 justify-end flex">
      <Button
        variant="secondary"
        size="sm"
        className="lg:hidden"
        onClick={() => setOpenMenu(true)}
      >
        <Menu className="!w-6 !h-6" />
      </Button>
      <ul
        className={`fixed lg:static ${
          openMenu ? "left-0 z-50" : "-left-full"
        } top-0 px-10 py-20 lg:p-0 bg-background lg:bg-transparent transition-all duration-200 h-full lg:h-auto flex-col lg:flex-row w-full lg:w-auto flex items-start lg:items-center gap-10`}
      >
        {" "}
        <Button
          variant="secondary"
          size="sm"
          className="absolute top-10 right-10 lg:hidden"
          onClick={() => setOpenMenu(false)}
        >
          <XIcon className="!w-6 !h-6" />
        </Button>
        {links.map((link) => (
          <li key={link.id}>
            <StoreLink
              href={`${link.href}`}
              className={`${
                link.href === `${Routes.AUTH}/${Pages.LOGIN}`
                  ? `${buttonVariants({ size: "lg" })} !px-8 !rounded-full`
                  : "hover:text-primary duration-200 transition-colors"
              }  font-semibold`}
            >
              {link.title}
            </StoreLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default StoreNavbar;
