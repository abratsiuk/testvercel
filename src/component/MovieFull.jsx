import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function MovieFull(props) {
    const {
        Title: title,
        Year: year,
        imdbID: id,
        Type: type,
        Poster: poster,
        Actors: actors,
    } = props?.movie;
    const navigate = useNavigate();

    return (
        <div
            id={id}
            className='card movie-full'
        >
            <div className='card-image waves-effect waves-block waves-light'>
                {poster === 'N/A' ? (
                    <img
                        className='activator'
                        src={`https://via.placeholder.com/300x400?text=${title}`}
                        alt=''
                    />
                ) : (
                    <img
                        className='activator'
                        src={poster}
                        alt=''
                    />
                )}
            </div>
            <div className='card-content'>
                <span className='card-title activator grey-text text-darken-4'>
                    {title}
                </span>
                <p>
                    {year} <span className='right'>{type}</span>
                </p>
                <p>
                    <a
                        href={`https://www.imdb.com/title/${id}/`}
                        target='_blank'
                    >
                        {title} in IMDB
                    </a>
                </p>
                <p>
                    Actors:{' '}
                    {actors.split(',').map((actor) => (
                        <p>
                            <Link to={`/actor/${actor}`}>{actor}</Link>
                        </p>
                    ))}
                </p>
            </div>
        </div>
    );
}

export { MovieFull };
