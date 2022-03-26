import {useState,useEffect} from "react";
import {getComments as getCommentsApi} from "../api";

const Comments = ({currentUserId}) => {
    const [backendComments,setBackendComments] = useState([]);
    
    console.log("backendComments", backendComments);

    useEffect(() => {
        getCommentsApi().then((data) => {
          setBackendComments(data);
        });
      }, []);

    return (
        <div>
            Comments
        </div>
    );
};
export default Comments;