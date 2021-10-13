import axios from 'axios'
import { loginFailure, loginStat, loginSuccess } from './AuthActions'

export const login = async (user, dispatch) => {
    dispatch(loginStat());
    try {
        const res = await axios.post("auth/login", user);
        dispatch(loginSuccess(res.data))
    }
    catch (err) {
        dispatch(loginFailure())
    }
}
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNWRhOWExNGRjODk2ZTkzMmM3OGFjNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMzU5NjM2NSwiZXhwIjoxNjM0MDI4MzY1fQ.-o-LQuDxkZ-1fwl8vLLjrF-hw68G68Qd0MjeAwwQOkM