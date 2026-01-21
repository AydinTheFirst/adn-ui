import {
  NavbarContainer,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarRoot,
  NavbarMenuContent,
  NavbarToggle,
} from "./navbar";

export const Navbar = Object.assign(NavbarRoot, {
  Container: NavbarContainer,
  Content: NavbarContent,
  Item: NavbarItem,
  Menu: NavbarMenu,
  MenuContent: NavbarMenuContent,
  Root: NavbarRoot,
  Toggle: NavbarToggle,
});

export * from "./navbar";

export type { NavbarVariants } from "./navbar.variants";
export { navbarVariants } from "./navbar.variants";
