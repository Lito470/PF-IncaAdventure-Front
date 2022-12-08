import React from 'react';
import {Link} from 'react-router-dom';

function nav() {
  return (
    <div>
    <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
            <Link to='/'>
                <img src='https://cdn-icons-png.flaticon.com/512/4135/4135890.png' width='50px' height='50px' alt='icon'/>
            </Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link" to='/home'>Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to='/activities'>Activities</Link>
                    </li>
                    
                    <li className="nav-item">
                    <Link className="nav-link" to='/shop'>Shop</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to='/cart'>Cart</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">User</Link>
                <ul className="dropdown-menu mx-auto">
                    <li><Link className="dropdown-item" to="/user_login">Login</Link></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><Link className="dropdown-item" to="/home">Logout</Link></li>
                   
                </ul>
                    </li>
                    <li className="nav-item" data-mdb-ripple-color="dark">
                    <Link className="nav-link" to='/register'>Register</Link>
                    </li>
                </ul>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>
    </div>
  )
}



export default nav