import { ImageResponse } from "next/og"
import { AGENCIA, SLOGAN } from "@/lib/constants"

export const runtime = "edge"
export const alt = AGENCIA
export const size = {
    width: 1200,
    height: 630,
}
export const contentType = "image/png"

export default async function Image() {
    return new ImageResponse(
        <div
            style={{
                background: "linear-gradient(135deg, #0b0f1a 0%, #1e293b 100%)",
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "80px",
            }}
        >
            <div
                style={{
                    fontSize: 72,
                    fontWeight: "bold",
                    background: "linear-gradient(90deg, #00e5ff 0%, #7c3aed 50%, #ff7a00 100%)",
                    backgroundClip: "text",
                    color: "transparent",
                    marginBottom: 24,
                }}
            >
                {AGENCIA}
            </div>
            <div
                style={{
                    fontSize: 36,
                    color: "#94a3b8",
                    textAlign: "center",
                    maxWidth: 900,
                }}
            >
                {SLOGAN}
            </div>
        </div>,
        {
            ...size,
        },
    )
}
