import todo from "../images/images/icon-todo.svg";
import calendar from "../images/images/icon-calendar.svg";
import planning from "../images/images/icon-planning.svg";
import reminder from "../images/images/icon-reminders.svg";
import logo from "../images/images/logo.svg";


function NavBar(){
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><img src={logo} /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Features
                </a>
                <ul className="dropdown-menu">
                   
                  <li><a className="dropdown-item" href="#"><img src={todo} style={{padding:"5px", height:"25px"}} />Todo List</a></li>
                  <li><a className="dropdown-item" href="#"><img src={calendar} style={{padding:"5px", height:"25px"}} />Calendar</a></li>
                  <li><a className="dropdown-item" href="#"><img src={reminder} style={{padding:"5px", height:"25px"}} />Reminders</a></li>
                  <li><a className="dropdown-item" href="#"><img src={planning} style={{padding:"5px", height:"25px"}} />Planning</a></li>
                </ul>
                
              </li>
    
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Company
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">History</a></li>
                  <li><a className="dropdown-item" href="#">Our Team</a></li>
                  <li><hr className="dropdown-divider"></hr></li>
                  <li><a className="dropdown-item" href="#">Blog</a></li>
                </ul>
                
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Careers</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              
            </ul>
            <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
        <button type="button" className="btn btn-dark">Search</button>
        </form>
            
          </div>
        </div>
      </nav>
    );

    
}

export default NavBar;