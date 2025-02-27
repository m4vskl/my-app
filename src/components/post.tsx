"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

type Post = {
    id: number;
    title: string;
    content: string;
    date_posted: string;
};

export default function Post() {
    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState<Post[]>([]);
    const [rotation, setRotation] = useState<Record<number, { rotateX: number; rotateY: number }>>({});

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/posts/")
            .then((res) => res.json())
            .then((data: Post[]) => {
                setPosts(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("API Hatası:", err);
                setLoading(false);
            });
    }, []);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, postId: number) => {
        const { clientX, clientY, currentTarget } = e;
        const { left, top, width, height } = currentTarget.getBoundingClientRect();

        const x = (clientX - left) / width - 0.5;
        const y = (clientY - top) / height - 0.5;

        setRotation((prev) => ({
            ...prev,
            [postId]: {
                rotateX: y * -5,
                rotateY: x * 5,
            }
        }));
    };

    const handleMouseLeave = (postId: number) => {
        setRotation((prev) => ({
            ...prev,
            [postId]: {
                rotateX: 0,
                rotateY: 0,
            }
        }));
    };

    if (loading) {
        return <p className="text-gray-400 text-center">Yükleniyor...</p>;
    }

    if (posts.length === 0) {
        return <p className="text-gray-400 text-center">Henüz hiç yazı eklenmemiş.</p>;
    }

    return (
        <>
            {posts.map((post) => (
                <div key={post.id} className="flex justify-center p-4">
                    <div
                        className="h-52 w-full sm:w-3/4 md:w-2/5 border border-gray-700 rounded-3xl p-6 transition-transform duration-200 ease-out animate-fadeIn"
                        style={{
                            transform: `perspective(1000px) rotateX(${rotation[post.id]?.rotateX || 0}deg) rotateY(${rotation[post.id]?.rotateY || 0}deg)`,
                        }}
                        onMouseMove={(e) => handleMouseMove(e, post.id)}
                        onMouseLeave={() => handleMouseLeave(post.id)}
                    >
                        <Link href={`/blog/${post.id}`}>
                            <div className="p-4 rounded-lg shadow">
                                <h1 className="text-xl sm:text-2xl font-semibold text-gray-300 text-center sm:text-left">
                                    {post.title}
                                </h1>
                                <p className="text-gray-400 text-sm sm:text-base text-center sm:text-left ">
                                    {post.content.substring(0, 100)}
                                </p>
                            </div>
                        </Link>
                    </div>
                </div>
            ))}
        </>
    );
}
