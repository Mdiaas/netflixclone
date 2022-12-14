import React from "react";
import './index.css';
const FeaturedMovie = ({item}) => {
    let firstDate = new Date(item.first_air_date);
    let genres = [];
    for(let i in item.genres){
        genres.push(item.genres[i].name);
    }
    return (
        <section className="featured" style={{
            backgroundSize:'cover',
            backgroundPosition:'center',
            backgroundImage:`url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            <div className="featured--vertical">
                <div className="featured--horizontal">
                    <div className="featured--name">
                        {item.original_name}
                    </div>
                    <div className="featured--info">
                        <div className="featured-items featured--points">
                            {item.vote_average} points
                        </div>
                        <div className="featured-items featured--year">
                            {firstDate.getFullYear()}
                        </div>
                        <div className="featured-items featured--seasons">
                            {item.number_of_seasons} Temporada{item.number_of_seasons !== 1 ? 's' : ''}
                        </div>
                    </div>
                    <div className="featured--description">
                        {item.overview}
                    </div>
                    <div className="featured--buttons">
                        <a href={`/watch/${item.id}`} className="featured--watchButton">► Watch</a>
                        <a href={`/list/add/${item.id}`} className="featured--listButton">+ My List</a>
                    </div>
                    <div className="featured--genres">
                        <strong>Genres: </strong>{genres.join(', ')}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FeaturedMovie;