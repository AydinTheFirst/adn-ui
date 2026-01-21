import { createContext } from "react";

import type { navbarVariants } from "./navbar.variants";

export interface NavbarContext {
  slots: ReturnType<typeof navbarVariants>;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const NavbarContext = createContext<NavbarContext | null>(null);
