import * as React from "react";
import { THEME_TRANSPARENT_RED, THEME_LARGE_FONT } from "../../constants";

const CollageSection = () => {
  return (
    <div className="container">
      {/* COLLAGE BACKGROUND CONTAINER */}

      <div
        style={{
          background: "black",
          width: "100%",
          height: "100vh",
          backgroundImage: "url('./images/Collage.jpg')",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
        }}
      >
          
        <div
          style={{
            padding: "60px 30px 30px 30px",
            background: THEME_TRANSPARENT_RED,
            fontSize: THEME_LARGE_FONT,
            display: "flex",
            flexDirection:'column',
            alignItems: "center",
            justifyContent: "center",
            transform:'translateY(80px)',
            marginBottom:'16px',
            color: "#fff",
            fontWeight: 900,
          }}
        >
            <div> ONE </div>
            <div> BLOCK </div>
            <div> CAN </div>
            <div> CHANGE</div>
            <div> A </div>
            <div>NATION </div>

            <br/>

          <img
            src="/images/active foundation logo2.png"
            style={{
              width: 180,
              height: 100,
              objectFit: "contain",
              filter:'invert(100%)'
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CollageSection;
