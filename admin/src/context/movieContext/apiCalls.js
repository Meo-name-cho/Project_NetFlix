import { createMovieFailure, 
    createMovieStats, 
    createMovieSuccess, 
    deleteMovieFailure, 
    deleteMovieStats, 
    deleteMovieSuccess, 
    getMovieFailure, 
    getMovieStats, 
    getMovieSuccess 
} from "./MovieActions";
import axios from 'axios'

export const getMovies=async(dispatch)=>{
    dispatch(getMovieStats());
    try{
        const res= await axios.get("/movies",{
            headers:{
                // chú ý dấu cách ở phần headers
                token:"Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            },
           
        });
        dispatch(getMovieSuccess(res.data))
    }
    catch(err){
           dispatch(getMovieFailure());
        }
}
// CREATE
export const createMovies=async(movie,dispatch)=>{
    dispatch(createMovieStats());
    try{
        const res= await axios.post("/movies",movie,{
            headers:{
                // chú ý dấu cách ở phần headers
                token:"Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            },
           
        });
        dispatch(createMovieSuccess(res.data))
    }
    catch(err){
           dispatch(createMovieFailure());
        }
}
// DELETE
export const deleteMovies=async(id,dispatch)=>{
    dispatch(deleteMovieStats());
    try{
       await axios.delete("/movies/" +id,{
            headers:{
                // chú ý dấu cách ở phần headers
                token:"Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            },
           
        });
        dispatch(deleteMovieSuccess(id))
    }
    catch(err){
           dispatch(deleteMovieFailure());
        }
}