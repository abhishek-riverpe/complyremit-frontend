import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "ComplyRemit - Send Money Globally at 0.3% Flat";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#ffffff",
          backgroundImage:
            "radial-gradient(circle at 25% 25%, #dbeafe 0%, transparent 50%), radial-gradient(circle at 75% 75%, #dcfce7 0%, transparent 50%)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "40px 80px",
          }}
        >
          {/* Logo */}
          <div
            style={{
              fontSize: 48,
              fontWeight: 700,
              color: "#111827",
              marginBottom: 24,
            }}
          >
            ComplyRemit
          </div>

          {/* Main Headline */}
          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              color: "#111827",
              textAlign: "center",
              lineHeight: 1.1,
              marginBottom: 24,
              maxWidth: 900,
            }}
          >
            Send money globally at 0.3% flat
          </div>

          {/* Subheadline */}
          <div
            style={{
              fontSize: 28,
              color: "#4b5563",
              textAlign: "center",
              marginBottom: 40,
            }}
          >
            Cross-border payments • Treasury management • Invoice lending
          </div>

          {/* Feature Pills */}
          <div
            style={{
              display: "flex",
              gap: 16,
            }}
          >
            <div
              style={{
                backgroundColor: "#dbeafe",
                color: "#1e40af",
                padding: "12px 24px",
                borderRadius: 9999,
                fontSize: 20,
                fontWeight: 600,
              }}
            >
              0.3% Flat Fee
            </div>
            <div
              style={{
                backgroundColor: "#dcfce7",
                color: "#166534",
                padding: "12px 24px",
                borderRadius: 9999,
                fontSize: 20,
                fontWeight: 600,
              }}
            >
              FDIC Insured
            </div>
            <div
              style={{
                backgroundColor: "#f3e8ff",
                color: "#7c3aed",
                padding: "12px 24px",
                borderRadius: 9999,
                fontSize: 20,
                fontWeight: 600,
              }}
            >
              80% Invoice Advance
            </div>
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            display: "flex",
            alignItems: "center",
            gap: 8,
            color: "#6b7280",
            fontSize: 18,
          }}
        >
          <div
            style={{
              width: 12,
              height: 12,
              backgroundColor: "#22c55e",
              borderRadius: "50%",
            }}
          />
          Save up to 88% on international transfers
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
