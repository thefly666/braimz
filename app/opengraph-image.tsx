import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import path from "path";

export const alt = "Braimz – We Think Ahead";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const [geistRegular, geistBold, logoData] = await Promise.all([
    readFile(
      path.join(
        process.cwd(),
        "node_modules/geist/dist/fonts/geist-sans/Geist-Regular.ttf"
      )
    ),
    readFile(
      path.join(
        process.cwd(),
        "node_modules/geist/dist/fonts/geist-sans/Geist-Bold.ttf"
      )
    ),
    readFile(
      path.join(process.cwd(), "public/assets/images/Briamz Logo White.png")
    ),
  ]);

  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          background: "#000000",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "Geist",
          position: "relative",
        }}
      >
        {/* Blue glow top-right */}
        <div
          style={{
            position: "absolute",
            top: -100,
            right: -100,
            width: 600,
            height: 600,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(85,141,202,0.25) 0%, transparent 70%)",
            display: "flex",
          }}
        />

        {/* Blue glow bottom-left */}
        <div
          style={{
            position: "absolute",
            bottom: -80,
            left: -80,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(85,141,202,0.12) 0%, transparent 70%)",
            display: "flex",
          }}
        />

        {/* Braimz logo image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logoSrc}
          alt="Braimz"
          width={180}
          height={46}
          style={{ marginBottom: 40, objectFit: "contain" }}
        />

        {/* Headline */}
        <div
          style={{
            fontSize: 80,
            fontWeight: 700,
            color: "#ffffff",
            lineHeight: 1.05,
            marginBottom: 32,
            maxWidth: 800,
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          We Think{" "}
          <span style={{ color: "#558dca", marginLeft: 20 }}>Ahead.</span>
        </div>

        {/* Subline */}
        <div
          style={{
            fontSize: 28,
            color: "rgba(255,255,255,0.5)",
            maxWidth: 700,
            lineHeight: 1.5,
            display: "flex",
          }}
        >
          AI oversight and software development, built for what&apos;s next.
        </div>

        {/* Domain */}
        <div
          style={{
            position: "absolute",
            bottom: 60,
            right: 80,
            fontSize: 22,
            color: "rgba(255,255,255,0.25)",
            letterSpacing: "0.05em",
            display: "flex",
          }}
        >
          braimz.com
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Geist", data: geistRegular, weight: 400 },
        { name: "Geist", data: geistBold, weight: 700 },
      ],
    }
  );
}
