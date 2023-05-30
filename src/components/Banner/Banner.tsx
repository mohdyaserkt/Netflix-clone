import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "axios";
import { API_KEY, imageUrl } from "../../constants/constants";
import { Movie } from "./model";

const Banner: React.FC = () => {
    const [movie, setmovie] = useState<Movie>()
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {
            let x = Math.floor((Math.random() * 20) + 1);
            setmovie(response.data.results[x])

        })


    }, [])

    return (
        <div style={{ backgroundImage: `url(${imageUrl + movie?.backdrop_path})` }} className="Banner">
            <div className="Bnr_content">
                <h1 className="Bnr_title ">{movie?.title}</h1>
                <div className="Banner_buttons">
                    <button className="Bnr_btn">Play</button>
                    <button className="Bnr_btn">+My list</button>
                </div>
                <h1 className="Bnr_description">{movie?.overview}</h1>
            </div>
            <div className="Bnr_fadebtm"></div>
        </div>
    );
};

export default Banner;
