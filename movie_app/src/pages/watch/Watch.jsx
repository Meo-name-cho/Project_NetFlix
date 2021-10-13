import { ArrowBackIosOutlined } from '@material-ui/icons'
import React from 'react'
import ReactPlayer from 'react-player'
import { useLocation } from 'react-router'
import './Watch.scss'
import {Link} from 'react-router-dom'


const Watch = () => {
    const location=useLocation();
    const movie=location.movie;
    console.log(location)
    return (
        <div className="watch">
            <Link to="/">
            <div className="back">
                <ArrowBackIosOutlined />
                Home
            </div>
            </Link>
            <ReactPlayer controls autoPlay playing={true} url={movie.video} className="video"/>
        </div>
    )
}

export default Watch
