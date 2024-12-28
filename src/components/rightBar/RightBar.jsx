import './rightBar.scss'

const RightBar = () => {
  return (
    <div className='rightBar'>
      <div className="container">
        <div className="item">
          <span>Suggestions for you</span>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/29851090/pexels-photo-29851090/free-photo-of-diverse-crowd-celebrating-at-a-beach-gathering.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <span>Jane Smith</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/29851090/pexels-photo-29851090/free-photo-of-diverse-crowd-celebrating-at-a-beach-gathering.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <span>Jane Smith</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/29851090/pexels-photo-29851090/free-photo-of-diverse-crowd-celebrating-at-a-beach-gathering.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <p>
                <span>Jane Smith</span> changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/29851090/pexels-photo-29851090/free-photo-of-diverse-crowd-celebrating-at-a-beach-gathering.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <p>
                <span>Jane Smith</span> changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/29851090/pexels-photo-29851090/free-photo-of-diverse-crowd-celebrating-at-a-beach-gathering.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <p>
                <span>Jane Smith</span> changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/29851090/pexels-photo-29851090/free-photo-of-diverse-crowd-celebrating-at-a-beach-gathering.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <p>
                <span>Jane Smith</span> changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/29851090/pexels-photo-29851090/free-photo-of-diverse-crowd-celebrating-at-a-beach-gathering.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <div className="online"/>
              <span>Jane Smith</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/29851090/pexels-photo-29851090/free-photo-of-diverse-crowd-celebrating-at-a-beach-gathering.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <div className="online"/>
              <span>Jane Smith</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightBar