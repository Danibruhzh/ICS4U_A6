import { useState } from "react";
import './Feature.css';

function Feature() {
    //

    return (
        <div className="featured-content" >
            <img className="featured-title" src="images/walle title.png" alt="Wall-E Title Image" />
            <p>A robot who is responsible for cleaning a waste-covered Earth meets another robot and falls in love with her. Together, they set out on a journey that will alter the fate of mankind.</p>
            <button className="featured-button watch">WATCH</button>
            <button className="featured-button rent">RENT</button>
        </div>
    )
}

export default Feature