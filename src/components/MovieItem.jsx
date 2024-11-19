import { useState } from "react";
import './MovieItem.css'

function MovieItem() {
    //
    return (
        <div className="movie-list-item">
            <img className="movie-list-item-image" src="images/the chosen.jpg" alt="The Chosen" />
                <span className="movie-list-item-title">The Chosen</span>
                <p className="movie-list-item-desc">The Chosen is a historical drama based on the life of Jesus and those who knew him. Set against the backdrop of Roman oppression in first-century Israel, the series shares an authentic look at Jesus' revolutionary life and teachings.</p>
                <button className="movie-list-item-button">Watch</button>
                <button className="movie-list-item-button rent">Rent</button>
        </div>
    )
}