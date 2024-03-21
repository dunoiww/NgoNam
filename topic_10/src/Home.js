import React from "react";
import useGetMovie from "./useGetMovie";
import MoviesList from "./MoviesList";

function Home() {
    const { data, loading, error } = useGetMovie();
    return (
        <div>
            {loading && <p>Loading...</p>}
            {error && <p>Error</p>}
            {data && <MoviesList data={data.results} />}
        </div>
    );
}

export default Home;
