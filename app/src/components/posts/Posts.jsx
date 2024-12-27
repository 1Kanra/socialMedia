import Post from "../post/Post"
import "./posts.scss"

const Posts = () => {

    const posts = [
        {
            id: 1,
            name:'John Doe',
            userId:1,
            profilePic:"https://images.pexels.com/photos/28183013/pexels-photo-28183013/free-photo-of-a-dog-standing-in-a-field-with-its-tongue-out.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            desc:'LOREM IPSUM DOLOR SIT AMET CONSECTETUR',
            img:"https://images.pexels.com/photos/29851712/pexels-photo-29851712/free-photo-of-mint-chocolate-chip-ice-cream-in-a-black-bowl.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        },
        {
            id: 2,
            name:'John Doe',
            userId:1,
            profilePic:"https://images.pexels.com/photos/28183013/pexels-photo-28183013/free-photo-of-a-dog-standing-in-a-field-with-its-tongue-out.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            desc:'LOREM IPSUM DOLOR SIT AMET CONSECTETUR',
        }
    ]
  return (
    <div className="posts">
        {posts.map(post=>(
            <div className="post">
               <Post post={post} key={post.id}/> 
            </div>
        ))}
    </div>
  )
}

export default Posts