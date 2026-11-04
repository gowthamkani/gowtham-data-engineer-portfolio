import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const alt = `${profile.name} | Data Engineer`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0b0f13",
          color: "#e8edf2",
          padding: 72,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 22, letterSpacing: 4, color: "#2dd4bf" }}>
            DATA ENGINEER
          </div>
          <div style={{ fontSize: 76, fontWeight: 700, marginTop: 18 }}>{profile.name}</div>
          <div style={{ fontSize: 32, color: "#9aa8b4", marginTop: 24, maxWidth: 900 }}>
            {profile.headline}
          </div>
        </div>

        <div style={{ display: "flex", gap: 16, fontSize: 24, color: "#9aa8b4" }}>
          {["Python", "SQL", "AWS", "Azure", "Databricks", "PySpark"].map((tech) => (
            <div
              key={tech}
              style={{
                border: "1px solid #303c47",
                borderRadius: 8,
                padding: "8px 18px",
              }}
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
