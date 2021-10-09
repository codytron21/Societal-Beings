
import "./topbar.css"
import {Search,Person,Chat,Notifications} from "@material-ui/icons";
export default function topbar() {
    return (
    <div className="topbarContainer">
          <div className="topbarLeft">
              <span className="logo">Societal Man</span>
          </div>
          <div className="topbarCenter">
              <div className="searchBar">
                  <Search/>
                  <input placeholder="search for friends,post or any video" className="searchInput" />
              </div>
          </div>
          <div className="topbarRight">
              <div className="topbarLinks">
                  <span className="topbarLink">Homepage</span>
                  <span className="topbarLink">Timeline</span>
              </div>
              <div className="topbarIcons">
                  <div className="topbarItems">
                      <Person/>
                      <span className="topbarIconBadge">1</span>
                  </div>
                  <div className="topbarItems">
                      <Chat/>
                      <span className="topbarIconBadge">1</span>
                  </div>
                  <div className="topbarItems">
                      <Notifications/>
                      <span className="topbarIconBadge">1</span>
                  </div>
              </div>
              <img src="/assets/persons/1.jpeg" alt="" className="topbarImage" />
          </div>

    </div>
    )
}
