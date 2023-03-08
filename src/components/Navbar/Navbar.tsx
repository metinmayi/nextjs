import HamburgerMenu from "./HamburgerMenu/HamburgerMenu";

export default function Navbar() {
  return (
    <nav className="absolute top-0 flex">
      <HamburgerMenu />
    </nav>
  );
}
