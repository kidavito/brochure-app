import { forwardRef } from "react";
import "./Brochure.css";
import logo from "../logo.svg";

const Brochure = forwardRef((props, ref) => {
  return (
    <div className="brochure" ref={ref}>
      <h1>Welcome to Our Brochure</h1>
      <p>This is a sample brochure created using React.js.</p>
      <img src={logo} alt="logo" />
    </div>
  );
});

export default Brochure;
