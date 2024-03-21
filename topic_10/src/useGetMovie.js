import React, { useEffect, useState } from 'react'
import axios from 'axios'

function useGetMovie() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiKey = 'cfeec2c3e57c3dd692722c2424a3d9b7';
  const getMovie = async () => {
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key=${apiKey}`);
        if (response && response.data) {
            setData(response.data);
            setLoading(false);
            setError(null);
        }
    } catch (error) {
        console.log('Error', error);
        setError(error);
        setLoading(true);
    }
  }

  useEffect(() => {
    getMovie();
  }, [])

  return {data, loading, error}
}

export default useGetMovie