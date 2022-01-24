import * as React from "react";
import { THEME_LARGE_FONT, THEME_TRANSPARENT_RED } from "../../constants";

const BannerSection = () => {
  return (
    <div className="container">
      {/* HOME BACKGROUND CONTAINER */}
      <div
        style={{
          width: "100%",
          height: "75vh",
          backgroundImage: "url('/images/CK-Medc744180200-2w.jpg')",
          backgroundSize: "cover",
        }}
      >
        <div
          style={{
            background: THEME_TRANSPARENT_RED,
            marginLeft: 30,
            top: -30,
            padding: "90px 30px 30px 30px",
            position: "relative",
            display: "inline-flex",
            flexDirection:'column',
            fontSize: THEME_LARGE_FONT,
            fontWeight: 900,
            color: "#fff",
          }}
        >
          <div> OUR </div>
          <div> VISION </div>
          <div> FOR A </div>
          <div> BETTER </div>
          <div> FUTURE </div>
        </div>

      </div>

      <div
        style={{
          background: "#fff",
          width: "100%",
          height: 50,
          marginTop: 15,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <p
          style={{
            fontSize: 18,
            opacity:.5
          }}
        >
          ONE BLOCK CAN CHANGE A NATION
        </p>
        <div>
          <div
            style={{
              width: 180,
              height: 100,
              backgroundSize: "contain",
              backgroundImage:`url("/images/active foundation logo2.png")`,
              opacity: 0.85,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
