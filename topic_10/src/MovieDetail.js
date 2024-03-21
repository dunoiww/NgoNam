import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const apiKey = 'cfeec2c3e57c3dd692722c2424a3d9b7';
const image = path => path ? `https://image.tmdb.org/t/p/w500${path}` : null;

function MovieDetail() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const {id} = useParams();
    console.log(id)
    const getDetail = async () => {
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=${apiKey}`)
            if (response && response.data) {
                setData(response.data);
                setLoading(false)
            }
        } catch (error) {
            console.log('Error', error);
            setLoading(true);
        }
    }
    useEffect(() => {
        getDetail();
    }, [])
  return (
    <div>
        {
            loading ? (
                <p>Loading...</p>
            ) : (
                <img src={image(data?.poster_path)} alt="" />
            )
        }
    </div>
  )
}

export default MovieDetail