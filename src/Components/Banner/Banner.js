import React from "react";
import "./Banner.css";

function Banner() {
  return (
    <div className="banner">
      <div className="content">
        <div className="title-logo-container">
          <img
            className="title-logo"
            src="https://occ-0-4994-2164.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABfxUat5mm5RXz6NPbEhLr0IiOHbBWnq35THazsUjUX5zYK6OH8xzP2iKnO216r6pZlL7pBj2H2bmiRqHSB9bq4B2so7XW5nvvc9vaYLcn1s8Y94OQUheVKdV23VvaWc82MTJ8bfHkqAi6ImKnNocG-0jx7YJ_fYLoZZpNpWxTuee0A.webp?r=4a4"
            alt="money heist"
          />
        </div>
        <div className="episode-title-container">
          Eight thieves take hostages and lock themselves in the Royal Mint of
          Spain as a criminal mastermind manipulates the police to carry out his
          plan.
        </div>
        <div className="banner-buttons-container">
          <button  className="banner-button1">Play</button>
          <button className="banner-button2">More Info</button>
        </div>
      </div>
      <div className="banner-fide-bottom"></div>
    </div>
  );
}

export default Banner;
