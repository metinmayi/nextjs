import { toggleNavbarContentVisibility } from "./toggleNavbarContentVisibility.js";

export default function HamburgerMenu() {
  return (
    <>
      <div
        className="flex grow flex-col justify-center pl-5 gap-1 transition-all duration-200"
        onClick={toggleNavbarContentVisibility}>
        <div className="h-1 w-1/2 bg-black hamburgerLine rotate-0 translate-y-0 transition-all duration-1000"></div>
        <div className="h-1 w-1/2 bg-black hamburgerLine rotate-0 translate-y-0 transition-all duration-1000"></div>
        <div className="h-1 w-1/2 bg-black hamburgerLine rotate-0 opacity-1 translate-y-0 transition-all duration-1000 ease-in-out"></div>
      </div>
    </>
  );
}
