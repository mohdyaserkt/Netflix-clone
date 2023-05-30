import React, { useEffect, useState } from 'react'
import './Rowpost.css'
import axios from 'axios'
import { API_KEY, imageUrl } from '../../constants/constants'
import { Originals, VideoData, rowpostdata } from './model'
import YouTube, { YouTubeProps } from 'react-youtube'


const Rowpost: React.FC<rowpostdata> = (props: rowpostdata) => {



    const [urlID, seturlID] = useState<VideoData>()

    const [movies, setmovies] = useState<Originals[]>([])
    useEffect(() => {
        axios.get(props.url).then((response) => {

            setmovies(response.data.results)
            console.log(response.data.results);


        })
    }, [])

    const handleMovie = (id: number) => {

        console.log(id);


        axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response) => {
            console.log(response.data.results[0]);

            if (response.data.results.length !== 0) {
                seturlID(response.data.results[0])
            }
        })

    }
    const opts: YouTubeProps['opts'] = {
        height: '1000',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };

    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className='posters'>
                {
                    movies.map((obj) =>

                        <img onClick={() => {
                            handleMovie(obj.id)
                        }} className={props.issmall ? 'poster_sm' : 'poster'} src={`${imageUrl + obj.backdrop_path}`} key={obj.name} alt="poster" />
                    )
                }




            </div>
            {urlID && <YouTube videoId={urlID.key} opts={opts} />}

        </div>
    )
}

export default Rowpost