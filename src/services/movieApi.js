import { API_URL, Google_Custom_Search_JSON_API_URL } from '../config';

const getMovies = async (search, type) => {
    const typeParam = type !== 'all' ? `&type=${type}` : '';
    const response = await fetch(API_URL + `&s=${search}${typeParam}`);
    return await response.json();
};

const getMovie = async (id) => {
    const response = await fetch(API_URL + `&plot=full&i=${id}`);
    return await response.json();
};

//Google Custom Search JSON API.
const getActorImageFull = async (actor) => {
    // &q=Keanu+Reeves+site:www.imdb.com
    actor = actor.split(' ').join('+');
    const response = await fetch(
        Google_Custom_Search_JSON_API_URL + `&q=${actor}+site:www.imdb.com`
    );
    return await response.json();
};

const getActorImageShort = async (actor) => {
    // &q=Keanu+Reeves+site:www.imdb.com
    actor = actor.split(' ').join('+');
    const response = await fetch(
        Google_Custom_Search_JSON_API_URL + `&q=${actor}+site:www.imdb.com`
    );
    const data = await response.json();

    let resp = {};
    try {
        const firstItem = data.items[0];

        const title = firstItem.title || 'No title';
        const link = firstItem.link || 'No link';
        const image =
            firstItem.pagemap?.metatags?.[0]?.['og:image'] || 'No image';
        const description =
            firstItem.pagemap?.metatags?.[0]?.['og:description'] ||
            'No description';

        resp = { title, link, image, description };
    } catch (err) {
        console.error(err);
        return '';
    }
    return resp;
};

export { getMovies, getMovie, getActorImageShort, getActorImageFull };
