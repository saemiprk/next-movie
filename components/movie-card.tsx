"use client";

import Link from "next/link";

export default function MovieCard({ movie }){
    return (
        <div className="relative col-span-1">
            {/* Image */}
            <img src={movie.image_url} className="w-full"/>
            
            {/* Title Dim */}
            <Link href={`/movies/${movie.id}`}>
                <div className="absolute flex items-center justify-center top-0 bottom-0 left-0 right-0 z-10 bg-black opacity-0 hover:opacity-90 transition-opacity duration-300">
                    <div className="text-white">
                        <p className="font-bold text-xl">{movie.title}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}