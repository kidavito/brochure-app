import React, { useRef } from "react";
import html2canvas from "html2canvas";
import Brochure from "./components/Brochure";
import "../src/App.css";

function App() {
  const brochureRef = useRef();

  const handleCaptureClick = async () => {
    const canvas = await html2canvas(brochureRef.current);
    const link = document.createElement("a"); // This represents the <a>.
    link.href = canvas.toDataURL("image/png");
    link.download = "brochure.png";
    link.click();
  };

  const styles = {
    buttonStyle: {
      backgroundColor: "#4CAF50" /* Green background */,
      border: "none" /* Remove borders */,
      color: "white" /* White text */,
      padding: "15px 32px" /* Some padding */,
      textAlign: "center" /* Centered text */,
      textDecoration: "none" /* Remove underline */,
      display:
        "inline-block" /* Get the element to respect the width and height */,
      fontSize: "16px" /* Increase font size */,
      margin: "20px auto" /* Center button and add some margin */,
      cursor: "pointer" /* Pointer/hand icon on hover */,
      borderRadius: "4px" /* Rounded corners */,
      transition:
        "background-color 0.3s ease" /* Smooth background color transition */,
    },
  };

  return (
    <div className="App">
      <button
        onClick={handleCaptureClick}
        style={styles.buttonStyle}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#45a049")}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#4CAF50")}
      >
        Capture Brochure as Image
      </button>
      <Brochure ref={brochureRef} />
    </div>
  );
}

export default App;
