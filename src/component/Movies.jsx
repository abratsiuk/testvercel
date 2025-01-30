import React from 'react';
import PropTypes from 'prop-types';
import { MovieItem } from './MovieItem';

function Movies(props) {
    const { movies = [] } = props;

    return (
        <div className='movies'>
            {movies.length ? (
                movies.map((movie) => (
                    <MovieItem
                        key={movie.imdbID}
                        {...movie}
                    />
                ))
            ) : (
                <h4>Nothing found</h4>
            )}
        </div>
    );
}
Movies.propTypes = {
    movies: PropTypes.arrayOf(
        PropTypes.shape({
            imdbID: PropTypes.string.isRequired,
        })
    ),
};

export { Movies };
