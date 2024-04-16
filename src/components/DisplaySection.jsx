import React, { useEffect, useRef } from "react";
import { useRefStore } from "../store";

const DisplaySection = ({ triggerPreview }) => {
  const displayRef = useRef(null);
  const updateDisplayRef = useRefStore((state) => state.updateDisplayRef);

  useEffect(() => {
    updateDisplayRef(displayRef);
  }, [displayRef]);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <div className="display-section wrapper" ref={displayRef}>
      <h2 className="title">New</h2>
      <p className="text">Brilliant</p>
      <span className="description">A display that's up to 2x brighter in the sun.</span>
      <button className="button" onClick={triggerPreview}>
        Try me!
      </button>
      <button className="back-button" onClick={handleScrollToTop}>
        Top
      </button>
    </div>
  );
};

export default DisplaySection;
