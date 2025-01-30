import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getActorImageShort } from '../services/movieApi';
import { ActorFull } from '../component/ActorFull';
import { Preloader } from '../component/Preloader';

function Actor() {
    const { actorName } = useParams();
    const [actor, setActor] = useState({});
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true);
        getActorImageShort(actorName)
            .then((data) => {
                setActor(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            });
    }, [actorName]);

    return <>{loading ? <Preloader /> : <ActorFull actor={actor} />}</>;
}

export { Actor };
