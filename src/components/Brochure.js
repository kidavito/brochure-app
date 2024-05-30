import { forwardRef } from "react";
import "./Brochure.css";
import image from "../fo3.webp";

const Brochure = forwardRef((props, ref) => {
  return (
    <div
      className="brochure"
      ref={ref}
      style={{ backgroundImage: `url(${image})` }}
    >
      <h1>Brochure Title</h1>
      <p>This is the brochure description.</p>
    </div>
  );
});

export default Brochure;
