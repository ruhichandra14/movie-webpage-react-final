import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';



export default class WatchedListComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           watchedMovieArray : ["https://s-media-cache-ak0.pinimg.com/originals/d9/da/86/d9da86d714685c56455756034e3de033.jpg","http://static.fastcommerce.com/content/ff808081163c05b001169d6655243ae9/mainimages/Chicken_Little_poster.jpg","http://www.impawards.com/2009/posters/ice_age_dawn_of_the_dinosaurs_xlg.jpg","https://s-media-cache-ak0.pinimg.com/originals/a0/7a/c9/a07ac9a45ac784ce842f0e714619685e.jpg"]
        }
    }


    render() {
        let defaultWatchedList;
        
        if(this.props.watchedMovie){
            this.state.watchedMovieArray.push(this.props.watchedMovie);
        }
        defaultWatchedList = this.state.watchedMovieArray.map(movieSrc => <li className = "watched-list-item"><img className = "watched-movie-image" src = {movieSrc} /></li> )

        return (
            <div>
                <section className = "watched-movie-section">
                    <article className = "watched-movie-article">
                        <h6><span className = "watched-section-title">Watched</span><span className = "movie-viewall-link"><a href = "#">View All</a></span></h6>
                        <ul className = "watched-movie-list">
                            {defaultWatchedList}  
                        </ul>
                    </article>
                </section>
            </div>
        )
    }
}