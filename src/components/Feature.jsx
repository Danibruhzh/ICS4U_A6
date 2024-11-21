import { useState } from "react";
import './Feature.css'

function Feature() {
    //
    return (
        <div className="movie-list-container">
            <h1 className="movie-list-title"> Header </h1>
            <div className="movie-list-wrapper">
                <div className="movie-list">
                    <div className="movie-list-item">
                        <img className="movie-list-item-image" src="" alt="The Chosen" />
                        <span className="movie-list-item-title">Placeholder</span>
                        <p className="movie-list-item-desc">Description</p>
                        <button className="movie-list-item-button">Watch</button>
                        <button className="movie-list-item-button rent">Rent</button>
                    </div>
                    <div className="movie-list-item">
                        <img className="movie-list-item-image" src="" alt="Arcane" />
                        <span className="movie-list-item-title">Placeholder</span>
                        <p className="movie-list-item-desc">Description</p>
                        <button className="movie-list-item-button">Watch</button>
                        <button className="movie-list-item-button rent">Rent</button>
                    </div>
                    <div className="movie-list-item">
                        <img className="movie-list-item-image" src="" alt="Attack On Titan" />
                        <span className="movie-list-item-title">Placeholder</span>
                        <p className="movie-list-item-desc">Description</p>
                        <button className="movie-list-item-button">Watch</button>
                        <button className="movie-list-item-button rent">Rent</button>
                    </div>
                    <div className="movie-list-item">
                        <img className="movie-list-item-image" src="" alt="Breaking Bad" />
                        <span className="movie-list-item-title">Placeholder</span>
                        <p className="movie-list-item-desc">Description</p>
                        <button className="movie-list-item-button">Watch</button>
                        <button className="movie-list-item-button rent">Rent</button>
                    </div>
                    <div className="movie-list-item">
                        <img className="movie-list-item-image" src="" alt="Better Call Saul" />
                        <span className="movie-list-item-title">Placeholder</span>
                        <p className="movie-list-item-desc">Description</p>
                        <button className="movie-list-item-button">Watch</button>
                        <button className="movie-list-item-button rent">Rent</button>
                    </div>
                    <div className="movie-list-item">
                        <img className="movie-list-item-image" src="" alt="Game of Thrones" />
                        <span className="movie-list-item-title">Placeholder</span>
                        <p className="movie-list-item-desc">Description</p>
                        <button className="movie-list-item-button">Watch</button>
                        <button className="movie-list-item-button rent">Rent</button>
                    </div>
                    <div className="movie-list-item">
                        <img className="movie-list-item-image" src="" alt="Avatar: The Last Airbender" />
                        <span className="movie-list-item-title">Placeholder</span>
                        <p className="movie-list-item-desc">Description</p>
                        <button className="movie-list-item-button">Watch</button>
                        <button className="movie-list-item-button rent">Rent</button>
                    </div>
                    <div className="movie-list-item">
                        <img className="movie-list-item-image" src='' alt="The Sopranos" />
                        <span className="movie-list-item-title">Placeholder</span>
                        <p className="movie-list-item-desc">Description</p>
                        <button className="movie-list-item-button watch">Watch</button>
                        <button className="movie-list-item-button rent">Rent</button>
                    </div>
                </div>

                <i className="fa-solid fa-arrow-right arrow"></i>

            </div>

        </div>
    )
}

export default Feature