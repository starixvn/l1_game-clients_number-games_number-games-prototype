"use client";
import React, { useState } from "react";
import "./style.css";

const TopInfo = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="relative flex items-center justify-center text-white px-3 h-8">
      <div className="round-id flex-1">#2345</div>
      <div className="countdown-timer flex-1 text-center">00:30</div>
      <div className="button-group flex flex-1">
        <div className="icon-button button-volume">
          <span className="icon-sound-on"></span>
        </div>
        <div className="icon-button button-guide">
          <span className="icon-guide"></span>
        </div>
        <div className="icon-button button-home">
          <span className="icon-home"></span>
        </div>
      </div>
    </div>
  );
};

export default TopInfo;
