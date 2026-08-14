import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default async function Icon() {
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
          borderRadius: 8,
          overflow: "hidden",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg, rgba(244,108,57,0.16) 0%, rgba(244,108,57,0) 48%), #151312",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: -8,
            bottom: -9,
            width: 23,
            height: 23,
            borderRadius: 7,
            background: "#f46c39",
            transform: "rotate(-10deg)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 6,
            right: 6,
            width: 5,
            height: 5,
            borderRadius: 2,
            background: "#c5ff41",
          }}
        />
        <div
          style={{
            color: "#ffffff",
            fontSize: 20,
            fontWeight: 700,
            fontFamily: "Poppins",
            letterSpacing: -0.5,
            marginTop: 1,
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
