export default function WhatWeDoItem({ img, icon, projectName }) {
  return (
    <div
      style={{
        background: `url(${img})`,
        backgroundSize: "cover",
        width: "100%",
        height: "40vh",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0,0.5)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: 90,
            height: 90,
            borderRadius: "50%",
            background: `url(${icon})`,
            backgroundSize: "contain",
          }}
        ></div>
        <h2 style={{ color: "#fff", fontWeight: 900, textAlign: "center" }}>
          {projectName}
        </h2>
      </div>
    </div>
  );
}
