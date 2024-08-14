"use client";

export default function UI({movie}){

    return (
        <div className="flex flex-col md:flex-row items-center">
            <img className="w-1/3"
            src={movie.image_url} />

            <div className="md:w-2/3 w-full md:items-start flex flex-col p-6 gap-4">
                <h1 className="text-3xl font-bold">{movie.title}</h1>
                <p className="text-l font-medium">{movie.overview}</p>
                <div className="font-bold text-lg">
                    <i className="fas fa-star mr-1" />
                    Vote Average: {movie.vote_average}
                </div> 
                <div className="font-bold text-lg">Popularity: {movie.popularity}</div>     
                <div className="font-bold text-lg">Release: {movie.release_date}</div>
            </div>
        </div>
    )
}