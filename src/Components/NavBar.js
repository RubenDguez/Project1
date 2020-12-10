import React from 'react'
import { Link } from 'react-router-dom'

const navBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark">

            <a className="navbar-brand" href=''>Bootleg Amazon</a>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to='/'>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/products'>Products</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/about'>About</Link>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>

                    <Link className='btn btn-outline-light ml-2 my-2 my-sm-0' to='/signin' role='button'>Sign In</Link>

                </form>
            </div>
        </nav>
    )
}

export default navBar