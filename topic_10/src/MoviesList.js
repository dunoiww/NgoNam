import React from 'react'
import { Link } from 'react-router-dom'

function MoviesList({data}) {
  return (
    <div>
        {
            data.map((movie, index) => {
                return (
                    <div key={index}>
                        <Link to={`movie/${movie.id}`}>
                            <h3>{movie.title}</h3>
                        </Link>
                    </div>
                )
            })
        }
    </div>
  )
}

export default MoviesList