import { Link } from 'react-router-dom';
import { Add, PlayArrow, ThumbDownOutlined, ThumbUpOutlined } from '@material-ui/icons'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './ListIterm.scss'

const ListIterm = ({ index,item }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [movie, setMovie] = useState({});
   console.log(item)
   useEffect(()=>{
    const getMovie=async ()=>{
        try{
            const res=await axios.get("/movies/find/"+item,{
                headers:{
                    token:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNWRhOWExNGRjODk2ZTkzMmM3OGFjNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMzc4MjA2NSwiZXhwIjoxNjM0MjE0MDY1fQ.S5W_W1ULNvZ-9zJjwH0hnxG43-hitq1XWE56XV0wmSg"
                }
            });
            setMovie(res.data)
        }
        catch(err){
            console.log(err)
        }
    };
    getMovie();
   },[item]);
    return (
        <Link to={{pathname : "/watch",movie:movie}}>
        <div className="listItem"
            style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            <img src={movie?.imgSm} alt="" />
            {isHovered && (
                <>
                    <video src={movie?.trailer} autoPlay={true} loop></video>
                    <div className="ItemInfo">
                        <div className="icons">
                            <PlayArrow className="icon"/>
                            <Add className="icon"/>
                            <ThumbUpOutlined className="icon"/>
                            <ThumbDownOutlined className="icon"/>
                        </div>
                        <div className="itemInfoTop">
                            <span>{movie?.duration}</span>
                            <span className="limit">+{movie?.limit}</span>
                            <span>{movie?.year}</span>
                        </div>
                        <div className="desc">
                            {movie?.desc}
                        </div>
                        <div className="genre">
                            {movie?.genre}
                        </div>
                    </div>

                </>

            )}



        </div>
                </Link>
    )
}

export default ListIterm
