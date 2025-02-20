"use client"
import { useState } from "react";
import Link from "next/link";

export default function Post() {
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const { clientX, clientY, currentTarget } = e;
        const { left, top, width, height } = currentTarget.getBoundingClientRect();

        const x = (clientX - left) / width - 0.5;
        const y = (clientY - top) / height - 0.5;

        setRotateX(y * -5);
        setRotateY(x * 5);
    };

    return (
        <Link href="#">
            <div className="flex justify-center p-4">
                <div
                    className="h-52 w-full sm:w-3/4 md:w-2/5 border border-gray-700 rounded-3xl p-6 transition-transform duration-200 ease-out animate-fadeIn"
                    style={{
                        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
                    }}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={() => {
                        setRotateX(0);
                        setRotateY(0);
                    }}
                >
                    <h1 className="text-xl sm:text-2xl font-semibold text-gray-300 text-center sm:text-left">
                        Yazı Başlığı
                    </h1>
                    <p className="text-gray-400 text-sm sm:text-base text-center sm:text-left">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                </div>
            </div>
        </Link>
    );
}
