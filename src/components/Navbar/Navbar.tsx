import BookingButton from "./BookingButton/BookingButton";
import HamburgerMenu from "./HamburgerMenu/HamburgerMenu";
import Logo from "./Logo/Logo";

export default function Navbar() {
  return (
    <nav className="fixed top-0 flex justify-between h-20 w-full">
      <HamburgerMenu />
      {/* <Search /> */}
      <Logo />
      <BookingButton />
    </nav>
  );
}
