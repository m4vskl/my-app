"use client"
import React from "react";
import Navbar from "@/components/Navbar"
export default function Layouts({
                                    children
                                }: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-col h-screen w-screen overflow-y-auto">
            <Navbar />
            {children}
        </div>
    )
}