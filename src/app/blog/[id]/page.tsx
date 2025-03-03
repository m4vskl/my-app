"use client";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

type Post = {
    id: number;
    title: string;
    content: string;
    date_posted: string;
};

const PostDetail = () => {
    const pathName = usePathname();
    console.log(pathName);
    const _id = pathName.split("/").pop();
    const [post, setPost] = useState<Post | null>(null);

    useEffect(() => {
        if (_id) {
            fetch(`http://213.145.94.248:8000/api/posts/${_id}/`)
                .then((res) => res.json())
                .then((data: Post) => setPost(data))
                .catch((err) => console.error("Post getirilirken hata oluştu:", err));
        }
    }, [_id]);

    if (!post) return <p>Yükleniyor...</p>;

    return (
        <div className="scrollbar-custom overflow-y-scroll overflow-x-hidden scrollbar-thumb-blue-500 scrollbar-track-gray-100">
            <div className="flex flex-col w-full m-4 sm:w-1/2 sm:mx-auto ">
                <h1 className="text-3xl font-semibold">{post.title}</h1>
                <p className="text-gray-300 mt-4 whitespace-pre-line">{post.content}</p>
                <p className="text-sm text-gray-400 mt-2">
                    Yayınlanma Tarihi: {post.date_posted ? new Date(post.date_posted).toLocaleString() : "Bilinmiyor"}
                </p>
            </div>
        </div>
    );
};

export default PostDetail;
