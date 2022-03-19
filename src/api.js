import axios from "axios";

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
        api_key: "92534cc754ea06b0664dcca9def7cb1c",
        language: "ko-KR"
    }
});

export const moviesApi = {
    nowPlaying: () => api.get("movie/now_playing"),
    upcoming: () => api.get("movie/upcoming"),
    popular: () => api.get("movie/popular"),
    movieDetail: id =>
    api.get(`movie/${id}`, {
        params: {
            append_to_response: "videos"
        }
    }),
    search: term =>
    api.get("search/movie", {
        params: {
            query: encodeURIComponent(term) //띄어쓰기같은거 인코딩하기위해서
        }
    })
};
  
export const tvApi = {
    topRated: () => api.get("tv/top_rated"),
    popular: () => api.get("tv/popular"),
    airingToday: () => api.get("tv/airing_today"),
    showDetail: id =>
    api.get(`tv/${id}`, {
        params: {
            append_to_response: "videos"
        }
    }),
    search: term =>
    api.get("search/tv", {
        params: {
            query: encodeURIComponent(term)
        }
    })
};



// const api = axios.create({
//     baseURL: "https://api.coinpaprika.com/v1/"
// });

// api.get("tickers");
