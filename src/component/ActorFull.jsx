import React from 'react';

function ActorFull(props) {
    const { title, link, image, description } = props.actor;

    return (
        <div className='card actor-full'>
            <div className='card-image waves-effect waves-block waves-light'>
                {image ? (
                    <img
                        className='activator'
                        src={image}
                        alt=''
                    />
                ) : (
                    <img
                        className='activator'
                        src={`https://via.placeholder.com/300x400?text=${title}`}
                        alt=''
                    />
                )}
            </div>
            <div className='card-content'>
                <span className='card-title activator grey-text text-darken-4'>
                    <a
                        href={link}
                        target='_blank'
                    >
                        {title}
                    </a>
                </span>
                <p>{description}</p>
            </div>
        </div>
    );
}

export { ActorFull };
