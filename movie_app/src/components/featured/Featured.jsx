import React, { useEffect, useState } from 'react'
import './Featured.scss'
import { PlayArrow, InfoOutlined } from '@material-ui/icons'
import axios from 'axios'

const Featured = ({ type,setGenre }) => {
    const [content, setContent] = useState({});
    useEffect(() => {
        const getRandomContent = async () => {
            try {
                const res=await axios.get(`/movies/random?type=${type}`,{
                    headers:{
                        token:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNWRhOWExNGRjODk2ZTkzMmM3OGFjNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMzc4MjA2NSwiZXhwIjoxNjM0MjE0MDY1fQ.S5W_W1ULNvZ-9zJjwH0hnxG43-hitq1XWE56XV0wmSg"
                    }
                });
                setContent(res.data[0]);
            }
            catch (err) {
                console.log(err)
            }
        };
        getRandomContent();
    },[type])
    return (
        <div className="featured">
            {type && (
                <div className="category">
                    <span>{type === "movie" ? "Movie" : "Series"}</span>
                    <select name="genre" id="genre" onChange={e=>setGenre(e.target.value)}>
                        <option>Genre</option>
                        <option value="romance">Romance</option>
                        <option value="comedy">Comedy</option>
                        <option value="Horror">Horror</option>
                        <option value="fiction">Fiction</option>
                    </select>
                </div>
            )}
            <img src={content?.img} alt="" />
            <div className="info">
                <img src={content?.imgTitle} alt="" />
                <span className="desc">
                    {content?.desc}
                </span>
                <div className="buttons">
                    <button className="play">
                        <PlayArrow />
                        <span>Play</span>
                    </button>
                    <button className="more">
                        <InfoOutlined />
                        <span>Info</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Featured
