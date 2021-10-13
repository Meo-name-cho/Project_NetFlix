// GET
export const getMovieStats=()=>({
    type:"GET_MOVIES_START"
});
export const getMovieSuccess=(movies)=>({
    type:"GET_MOVIES_SUCCESS",
    payload:movies,
});
export const getMovieFailure=()=>({
    type:"GET_MOVIES_FAILURE"
});

// CREATE MOVIE
export const createMovieStats=()=>({
    type:"CREATE_MOVIES_START"
});
export const createMovieSuccess=(movie)=>({
    type:"CREATE_MOVIES_SUCCESS",
    payload:movie,
});
export const createMovieFailure=()=>({
    type:"CREATE_MOVIES_FAILURE"
});

// UPLOAD
export const uploadMovieStats=()=>({
    type:"UPLOAD_MOVIES_START"
});
export const uploadMovieSuccess=(movie)=>({
    type:"UPLOAD_MOVIES_SUCCESS",
    payload:movie,
});
export const uploadMovieFailure=()=>({
    type:"UPLOAD_MOVIES_FAILURE"
});
// DELETE
export const deleteMovieStats=()=>({
    type:"DELETE_MOVIES_START"
});
export const deleteMovieSuccess=(id)=>({
    type:"DELETE_MOVIES_SUCCESS",
    payload:id,
});
export const deleteMovieFailure=()=>({
    type:"DELETE_MOVIES_FAILURE"
});