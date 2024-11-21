import axios from "axios"
import { useEffect, useState } from "react"
import { Link, Navigate, useNavigate } from "react-router-dom"
import axiosApi from "../config/axios"



export const NavBar = () => {
  const[auth , setauth]=useState({})
  useEffect(()=>{
  setauth(JSON.parse(localStorage.getItem("user")))
}, [])
console.log(auth, "authhhhh");
const navigate=useNavigate()
const logout=()=>{
  axiosApi.get("http://localhost:4000/auth/logout",{
    headers:{
      Authorization:`Bearer ${auth?.tokens?.accessToken}`
    }
  }).then((res)=>{
    console.log(res,"res lo")
    localStorage.removeItem("user")
    navigate("/signin")
  }).catch((err)=>{
    console.log(err,"err lo");
  })
}

  return (
    <>
    
<header className="navigation">
  <div className="header-top ">
    <div className="container">
      <div className="row justify-content-between align-items-center">
        <div className="col-lg-2 col-md-4">
          <div className="header-top-socials text-center text-lg-left text-md-left">
            <a href="https://www.facebook.com/fenina.emir/" target="_blank"><i className="ti-facebook" /></a>
            <a href="https://twitter.com/themefisher" target="_blank"><i className="ti-twitter" /></a>
            <a href="https://github.com/themefisher/" target="_blank"><i className="ti-github" /></a>
          </div>
        </div>
        <div className="col-lg-10 col-md-8 text-center text-lg-right text-md-right">
          <div className="header-top-info">
            <a href="tel:+216 97120225">Call Us : <span>+216 97120225</span></a>
            <a href="mailto:amirfenina03@gmail.com"><i className="fa fa-envelope mr-2" /><span>amirfenina03@gmail.com</span></a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <nav className="navbar navbar-expand-lg  py-4" id="navbar">
    <div className="container">
      <a className="navbar-brand" href="index.html">
        Mega<span>kit.</span>
      </a>
      <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
        <span className="fa fa-bars" />
      </button>
      <div className="collapse navbar-collapse text-center" id="navbarsExample09">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link className="nav-link"to ="/" >Home <span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" to="/about" id="dropdown03" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">About</Link>
           
          </li>
          <li className="nav-item"><Link className="nav-link"to="/projects" >Project</Link></li>
          <li className="nav-item"><Link className="nav-link"to="/contact" >Contact</Link></li>
          {
            auth?.user?.role==="Admin"?(
              <>
<li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="dropdown05" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dashboard</a>
            <ul className="dropdown-menu" aria-labelledby="dropdown05">
              <li><Link className="dropdown-item"to = "/addproject">Add Project</Link></li>
              <li><Link className="dropdown-item" to = "/listprojects">List projects</Link></li>
              <li><Link className="dropdown-item"to = "/addcategory">Add Category</Link></li>
              <li><Link className="dropdown-item" to = "/listcategories">List Category</Link></li>
              <li><Link className="dropdown-item"to = "/addTask">Add Task</Link></li>
              <li><Link className="dropdown-item" to = "/listTasks">List Task</Link></li>
              <li><Link className="dropdown-item" to = "/listtypes">List types</Link></li>
              <li><Link className="dropdown-item" to = "/addtypes">Add types</Link></li>
              <li><Link className="dropdown-item" to = "/listpermission">Listpermission </Link></li>
              <li><Link className="dropdown-item" to = "/addpermission">add permission </Link></li>
              <li><a className="dropdown-item" >logout</a></li>
            </ul>
          </li>
          </>
            )
            :""
          }
          
          
        </ul>
        {
          !auth ?
          <div className="form-lg-inline my-2 my-md-0 ml-lg-4 text-center">
          <Link to="/signup"className="btn btn-solid-border btn-round-full">SignUp</Link>
        </div>
        :
        <div className="form-lg-inline  my-md-0 ml-lg-4 text-center nav-item dropdown">
            <a className="btn btn-solid-border btn-round-full nav-link dropdown-toggle" href="#" id="dropdown05" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              {auth?.user?.firstName}</a>
            <ul className="dropdown-menu" aria-labelledby="dropdown05">
              {
                auth?.user?.role === "Employee" ? (
                  <>
                  <li><Link className="dropdown-item"to = "/addpermission">Add permission</Link></li>
              <li><Link className="dropdown-item" to = {`/listpermissionuser/${auth?.user?._id}`}>listpermission</Link></li>
              <li><Link className="dropdown-item" to = {`/listtaskemployee/${auth?.user?._id}`}>List Task</Link></li>
                  </>
                ):""
              }
              
              <li><a className="dropdown-item" onClick={logout}>logout</a></li>            
            </ul>
          </div>
        }
      </div>
    </div>
  </nav>
</header>



    

    </>
  )
}
//koul lyassinne yib3athlik
