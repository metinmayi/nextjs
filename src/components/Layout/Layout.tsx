import { ReactElement } from "react";
import Navbar from "../Navbar/Navbar";

export default function Layout(props: { children: ReactElement<any, any> }) {
  return (
    <>
      <Navbar />
      <div className="mt-20">{props.children}</div>
    </>
  );
}
