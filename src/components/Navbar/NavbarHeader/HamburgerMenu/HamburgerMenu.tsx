import { toggleNavbarContentVisibility } from "./toggleNavbarContentVisibility.js";

export default function HamburgerMenu() {
  return (
    <>
      <div
        className="flex grow flex-col justify-center pl-5 gap-1"
        onClick={toggleNavbarContentVisibility}>
        <div className="h-1 w-1/2 bg-black"></div>
        <div className="h-1 w-1/2 bg-black"></div>
        <div className="h-1 w-1/2 bg-black"></div>
      </div>
    </>
  );
}
