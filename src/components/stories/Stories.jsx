import { useContext } from "react";
import "./stories.scss";
import { AuthContext } from "../../context/authContext"

const Stories = () => {

    const {currentUser} = useContext(AuthContext);

  //temp
  const stories = [
    {
      id: 1,
      name: "john doe",
      img: "https://images.pexels.com/photos/28183013/pexels-photo-28183013/free-photo-of-a-dog-standing-in-a-field-with-its-tongue-out.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      name: "john doe",
      img: "https://images.pexels.com/photos/28183013/pexels-photo-28183013/free-photo-of-a-dog-standing-in-a-field-with-its-tongue-out.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      name: "john doe",
      img: "https://images.pexels.com/photos/28183013/pexels-photo-28183013/free-photo-of-a-dog-standing-in-a-field-with-its-tongue-out.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 4,
      name: "john doe",
      img: "https://images.pexels.com/photos/28183013/pexels-photo-28183013/free-photo-of-a-dog-standing-in-a-field-with-its-tongue-out.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];
  return (<div className="stories">
        <div className="story">
            <img src={currentUser.profilePic} alt="" />
            <span>{currentUser.name}</span>
            <button>+</button>
        </div>
    {stories.map(story=>( 
        <div className="story" key={story.id}>
            <img src={story.img} alt="" />
            <span>{story.name}</span>
        </div>
    ))}
  </div>
  )
};

export default Stories;
