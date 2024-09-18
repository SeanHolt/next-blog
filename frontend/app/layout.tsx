import { Metadata } from "next";
import React from "react"

export const metadata: Metadata = {
    title: {
        template: "%s | NextBlog",
        default: "NextBlog"
    }
}

export default function RootLayout({children, } : {children: React.ReactNode}) {
    console.log("RootLayout")
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}