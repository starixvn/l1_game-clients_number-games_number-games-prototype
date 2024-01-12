import React from "react";
import Style from "./ball.module.scss";
const Ball = (props: any) => {
  return (
    <div
      className={`${Style.ball} relative rounded-full ${
        props.isLoading || props.isEmpty
          ? Style["ball-border-gray"]
          : Style["ball-border-black"]
      }`}
    >
      {props.number != null && (
        <div className={Style["ball-bg"]}>
          <img
            className={Style["ball-img"]}
            src={`/images/Ball/ball-${props.color}.png`}
            alt="ball"
          />
          <span className={Style["ball-number"]}>{props.number}</span>
        </div>
      )}

      {props.isLoading && <div className={Style.loading}></div>}
    </div>
  );
};

export default Ball;
