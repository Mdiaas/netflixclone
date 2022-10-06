const API_KEY = '98afcfc0229b96689403813c286f453a';
const URL_BASE = 'https://api.themoviedb.org/3';

const basicFetch = async(endpoint) => {
    const req = await fetch(`${URL_BASE}${endpoint}`);
    const data = await req.json();

    return data;
}

export default {
    getList: async () => {
        return [
            {
                description : 'Netflix Originals',
                title: 'Originais da netflix',
                items: await basicFetch(`/discover/tv?with_network=213&api_key=${API_KEY}`)
            },
            {
                description : 'trending',
                title: 'Recomendados',
                items: await basicFetch(`/trending/all/week?api_key=${API_KEY}`)
            },
            {
                description : 'toprated',
                title: 'Melhores avaliados',
                items: await basicFetch(`/movie/top_rated/?api_key=${API_KEY}`)
            },
            {
                description : 'action',
                title: 'Ação',
                items: await basicFetch(`/discover/movie/?with_genres=28&api_key=${API_KEY}`)
            },
            {
                description : 'comedy',
                title: 'Comédia',
                items: await basicFetch(`/discover/movie/?with_genres=35&api_key=${API_KEY}`)
            },
            {
                description : 'horror',
                title: 'Terror',
                items: await basicFetch(`/discover/movie/?with_genres=27&api_key=${API_KEY}`)
            },
            {
                description : 'romance',
                title: 'Romance',
                items: await basicFetch(`/discover/movie/?with_genres=10749&api_key=${API_KEY}`)
            },
            {
                description : 'documentary',
                title: 'Documentário',
                items: await basicFetch(`/discover/movie/?with_genres=99&api_key=${API_KEY}`)
            }
        ]
    },
    getMovieInfo: async(id, type) => {
        let info = {};
        if(id){
            switch(type){
                case 'movie':
                    info = await basicFetch(`/movie/${id}?api_key=${API_KEY}`)
                break;
                case 'tv':
                    info = await basicFetch(`/tv/${id}?api_key=${API_KEY}`)
                break;
            }
        }
        return info;
    }
}