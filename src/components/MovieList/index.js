import React from "react";
import './index.css';
const MovieList = ({title, items}) => {
    return (
        <div className="movieList">
            <h2>{title}</h2>
            <div className="movieList--listarea">
                <div className="movieList--list">
                    {  
                        items.results.length > 0 && items.results.map((item, key) => (
                            <div key={key} className="movieList--item">
                                <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
                            </div>
                        )) 
                    }
                </div>
            </div>
        </div>
    );
}

export default MovieList;