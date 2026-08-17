import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = site.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#4c6a54",
          color: "#faf6ec",
          padding: "64px",
          textAlign: "center",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            fontSize: 30,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "#cfa95e",
            marginBottom: 36,
          }}
        >
          {site.name}
        </div>
        <div style={{ fontSize: 64, lineHeight: 1.25, maxWidth: 980 }}>
          {site.tagline}
        </div>
        <div
          style={{
            fontSize: 28,
            marginTop: 40,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#d9d2c2",
          }}
        >
          {site.citation}
        </div>
      </div>
    ),
    size
  );
}
