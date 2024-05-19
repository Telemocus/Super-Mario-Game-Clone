import "./Game.css";

import React, { useEffect, useState } from "react";

const Game = () => {
  const [position, setPosition] = useState({ left: 50, bottom: 10 });

  useEffect(() => {
    const handleKeyDown = (e) => {
      setPosition((prev) => {
        let newPos = { ...prev };
        if (e.key === "ArrowRight") {
          newPos.left += 10;
        }
        if (e.key === "ArrowLeft") {
          newPos.left -= 10;
        }
        if (e.key === " ") {
          newPos.bottom += 50;
          setTimeout(() => {
            setPosition((prev) => ({ ...prev, bottom: 10 }));
          }, 500);
        }

        return newPos;
      });
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.addEventListener("keydown", handleKeyDown);
    };
  },[]);

  return (
    <div className="game">
      <div className="game-screen">
        <div className="mario" style={{left:`${position.left}px`,bottom:`${position.bottom}px`}}>
          <div className="body"></div>
          <div className="arm-left"></div>
          <div className="arm-right"></div>
          <div className="leg-left"></div>
          <div className="leg-right"></div>
        </div>
      </div>
    </div>
  );
};

export default Game;
