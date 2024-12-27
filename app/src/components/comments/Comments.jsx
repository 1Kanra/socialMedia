import { useContext } from "react"
import "./comments.scss"
import {AuthContext} from "../../context/authContext"

const Comments = () => {
    const {currentUser} = useContext(AuthContext)
    //temp
    const comments = [
        {
            id:1,
            desc:"something something something something something something something something something something something something something",
            name:"john doe",
            userId:1,
            profilePic:"https://images.pexels.com/photos/28183013/pexels-photo-28183013/free-photo-of-a-dog-standing-in-a-field-with-its-tongue-out.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            id:2,
            desc:"something another another something something",
            name:"jane doe",
            userId:2,
            profilePic:"https://images.pexels.com/photos/29851712/pexels-photo-29851712/free-photo-of-mint-chocolate-chip-ice-cream-in-a-black-bowl.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        }
    ]
  return (
    <div className="comments">
        <div className="write">
            <img src={currentUser.profilePic} alt="" />
            <input type="text" placeholder="write a comment" />
            <button>Send</button>
        </div>
        {comments.map(comments=>(
            <div className="comment">
                <img src={comments.profilePic} alt="" />
                <div className="info">
                    <span>{comments.name}</span>
                    <p>{comments.desc}</p>
                </div>
                <span className="date">1 hour ago</span>
            </div>
        ))}
    </div>
  )
}

export default Comments