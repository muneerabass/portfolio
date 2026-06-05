import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1a1a1a",
          borderRadius: 40,
          border: "3px solid rgba(255,255,255,0.1)",
        }}
      >
        <div
          style={{
            color: "#e8c547",
            fontSize: 110,
            fontWeight: 700,
            fontFamily: "system-ui, sans-serif",
            marginTop: 6,
          }}
        >
          M
        </div>
      </div>
    ),
    { ...size }
  );
}
