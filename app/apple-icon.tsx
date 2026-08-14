import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default async function AppleIcon() {
  const poppins = await readFile(
    join(process.cwd(), "assets/fonts/Poppins-Bold.ttf")
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#151312",
          borderRadius: 40,
          overflow: "hidden",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg, rgba(244,108,57,0.2) 0%, rgba(244,108,57,0) 50%), #151312",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: -44,
            bottom: -50,
            width: 125,
            height: 125,
            borderRadius: 34,
            background: "#f46c39",
            transform: "rotate(-10deg)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 34,
            right: 34,
            width: 24,
            height: 24,
            borderRadius: 8,
            background: "#c5ff41",
          }}
        />
        <div
          style={{
            color: "#ffffff",
            fontSize: 112,
            fontWeight: 700,
            fontFamily: "Poppins",
            letterSpacing: -2,
            marginTop: 4,
            position: "relative",
          }}
        >
          M
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Poppins", data: poppins, weight: 700, style: "normal" }],
    }
  );
}
