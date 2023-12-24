import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
       <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">E-Shop</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/products">Products</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/register">Register</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/list">Users List</Link>
        </li>
       
       
      </ul>
      <form className="d-flex">
        {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" /> */}
        <button className="btn btn-warning me-2 btn-sm" type="submit ">Login</button>
        <button className="btn btn-success btn-sm" type="submit">Cart</button>
      </form>
    </div>
  </div>
</nav>

    </>
  )
}

export default Navbar
