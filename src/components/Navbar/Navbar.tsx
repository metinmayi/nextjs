import NavbarBody from "./NavbarBody/NavbarBody";
import NavbarHeader from "./NavbarHeader/NavbarHeader";

export default function Navbar() {
  return (
    <>
      {/* The body is before the header because I want the the body to appear behind the header.
    I do not want to use Z-index as it can lead to unnecessary complications when scaling up. */}
      <NavbarBody />
      <NavbarHeader />
    </>
  );
}
