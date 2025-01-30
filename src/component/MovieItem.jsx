import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

function MovieItem(props) {
    const {
        Title: title,
        Year: year,
        imdbID: id,
        Type: type,
        Poster: poster,
    } = props;

    const navigate = useNavigate();
    return (
        <div
            id={id}
            className='card movie-item'
            onClick={() => navigate(`/movie/${id}`)}
            style={{ cursor: 'pointer' }}
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
                <p>imdbID: {id}</p>
            </div>
        </div>
    );
}
MovieItem.propTypes = {
    Title: PropTypes.string.isRequired,
    Year: PropTypes.string.isRequired,
    imdbID: PropTypes.string.isRequired,
    Type: PropTypes.string.isRequired,
    Poster: PropTypes.string,
};

export { MovieItem };
