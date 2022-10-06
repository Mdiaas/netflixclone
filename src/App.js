import React, {useEffect, useState} from "react";
import tmdb from "./tmdb";
import MovieList from "./components/MovieList";
import FeaturedMovie from "./components/FeaturedMovie";
import Header from "./components/Header/index";
import Footer from "./components/Footer/index";
import './App.css';
const FunctionList = ({black}) => {
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    const loadAll = async () => {
      let list = await tmdb.getList();
      setMovieList(list);
      
      //pegando o featured
      let originals = list.filter(i=>i.description === 'Netflix Originals');
      let random = Math.floor(Math.random() * (originals[0].items.results.length -1 ));
      let chosen = originals[0].items.results[random];
      let chosenInfo = await tmdb.getMovieInfo(chosen.id, 'tv');
      setFeaturedData(chosenInfo);
    }
    loadAll();
  }, []);  

  useEffect(() => {
    const scrollListener = () => {
      if(window.scrollY > 30){
        setBlackHeader(true);
      }else{
        setBlackHeader(false);
      }
    }
    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  }, [])
  return (
    <div className="page">
        <Header black ={blackHeader}></Header>
        {
          featuredData && <FeaturedMovie item={featuredData}></FeaturedMovie>
        }
        <section className="lists">
        {
          movieList.map((item, key) => (
            <MovieList key ={key} title={item.title} items = {item.items}></MovieList>
          ))
        }
        </section>
        <Footer></Footer>
    </div>
  );
}

export default FunctionList;