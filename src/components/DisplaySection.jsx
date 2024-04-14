import React, { useEffect, useRef } from "react";
import { useRefStore } from "../store";

const DisplaySection = () => {
  const displayRef = useRef(null);
  const updateDisplayRef = useRefStore((state) => state.updateDisplayRef);

  useEffect(() => {
    updateDisplayRef(displayRef);
  }, [displayRef]);

  return (
    <div className="display-section wrapper" ref={displayRef}>
      <h2 className="title">New</h2>
      <p className="text">Brilliant</p>
      <span className="description">A display that's up to 2x brighter in the sun.</span>
      <button className="button">Try me!</button>
      <button className="back-button">Top</button>
    </div>
  );
};

export default DisplaySection;
