import BookingButton from "./BookingButton/BookingButton";
import HamburgerMenu from "./HamburgerMenu/HamburgerMenu";
import Logo from "./Logo/Logo";

export default function NavbarHeader() {
  return (
    <nav className="fixed top-0 flex justify-between h-20 w-full border-b bg-white">
      <HamburgerMenu />
      <Logo />
      <BookingButton />
    </nav>
  );
}
