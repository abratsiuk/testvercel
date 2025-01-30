import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Search(props) {
    const [search, setSearch] = useState('matrix');
    const [type, setType] = useState('all');
    const { reloadMovies } = props;

    const handleType = (event) => {
        setType(event.target.dataset.type);
        reloadMovies(search, event.target.dataset.type);
    };

    return (
        <div className='row'>
            <div className='input-field'>
                <input
                    placeholder='search'
                    type='search'
                    className='validate'
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    onKeyDown={(event) => {
                        if (event.code === 'Enter') {
                            reloadMovies(search, type);
                        }
                    }}
                />
                <button
                    className='btn search-btn light-blue accent-4'
                    onClick={() => reloadMovies(search, type)}
                >
                    Search
                </button>

                <div>
                    <label>
                        <input
                            className='with-gap'
                            name='type'
                            type='radio'
                            data-type='all'
                            onChange={handleType}
                            checked={type === 'all'}
                        />
                        <span>All</span>
                    </label>
                    <label>
                        <input
                            className='with-gap'
                            name='type'
                            type='radio'
                            data-type='movie'
                            onChange={handleType}
                            checked={type === 'movie'}
                        />
                        <span>Movies only</span>
                    </label>
                    <label>
                        <input
                            className='with-gap'
                            name='type'
                            type='radio'
                            data-type='series'
                            onChange={handleType}
                            checked={type === 'series'}
                        />
                        <span>Series only</span>
                    </label>
                </div>
            </div>
        </div>
    );
}

Search.propTypes = {
    reloadMovies: PropTypes.func.isRequired,
};

export { Search };
