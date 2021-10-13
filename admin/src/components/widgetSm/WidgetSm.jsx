import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import { useEffect, useState } from "react";
import axios from 'axios'

export default function WidgetSm() {
  const [newUsers, setNewUsers] = useState([]);

  useEffect(() => {
    const getNewUsers = async () => {
      try {
        const res = await axios.get("/users?new=true", {
          headers: {
            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNWRhOWExNGRjODk2ZTkzMmM3OGFjNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMzk0NjU0MCwiZXhwIjoxNjM0Mzc4NTQwfQ._wV3N9rW9HWXqWzit3D3knIv2ujk3aPOrknaUPG6Bdc"
          },
        });
        setNewUsers(res.data)
      }
      catch (err) {
        console.log(err)
      }
    };
    getNewUsers();
  }, [])

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {newUsers.map((user)=>(
          <li className="widgetSmListItem">
            <img
              src={user.profilePic || "https://kenh14cdn.com/thumb_w/660/2017/75614297jw1faoy1g9cnlj21og23je84-1509002837953.jpg"}
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{user.username}</span>
              {/* <span className="widgetSmUserTitle">Software Engineer</span> */}
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
