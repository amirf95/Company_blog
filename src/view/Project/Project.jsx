import React, { useEffect, useState } from 'react'
import projectService from '../../services/projectService'
import { Link } from 'react-router-dom'
import { NavBar } from '../../layouts/NavBar'

export const Project = () => {
  const[projects,setprojcets]=useState([])
  const fetchprojects=()=> 
    {
      projectService.findallProjects().then((res)=>{
    console.log(res,"ress projects");
    setprojcets(res.data.data)
      }).catch((err)=>{
        console.log(err,"err");
      
      })
    }
    useEffect(() => {
      
    
  
      fetchprojects()
    }, [])


  return (
    <>
    <NavBar/>

<div>
  <section className="page-title bg-1">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="block text-center">
            <span className="text-white">Our blog</span>
            <h1 className="text-capitalize mb-4 text-lg">Blog articles</h1>
            <ul className="list-inline">
              <li className="list-inline-item"><a href="index.html" className="text-white">Home</a></li>
              <li className="list-inline-item"><span className="text-white">/</span></li>
              <li className="list-inline-item"><a href="#" className="text-white-50">Our blog</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="section blog-wrap bg-gray">
    <div className="container">
      <div className="row">
        {
          projects.map((p)=> {
          return(
          
<>   
  
<div className="col-lg-6 col-md-6 mb-5">
          <div className="blog-item">
            <img src={`http://localhost:4000/file/projects/${p?.file}`} alt className="img-fluid rounded" />
            <div className="blog-item-content bg-white p-5">
              <div className="blog-item-meta bg-gray py-1 px-2">
                <span className="text-muted text-capitalize mr-3"><i className="ti-pencil-alt mr-2" />{p?.category?.name}</span>
                <span className="text-muted text-capitalize mr-3"><i className="ti-comment mr-2" />{p?.status}</span>
                <span className="text-black text-capitalize mr-3"><i className="ti-time mr-1" /> {p?.duration}</span>
              </div>   
              <h3 className="mt-3 mb-3"><Link to={`/detailproject/${p?._id}`}>{p?.title}</Link></h3>
              <p className="mb-4">{p?.description}</p>
              <Link to={`/detailproject/${p?._id}`} className="btn btn-small btn-main btn-round-full">Learn More</Link>
            </div>
          </div>
        </div>





</>
          )

          })
        }
       
        
      </div>
      <div className="row justify-content-center mt-5">
        <div className="col-lg-6 text-center">
          <nav className="navigation pagination d-inline-block">
            <div className="nav-links">
              <a className="prev page-numbers" href="#">Prev</a>
              <span aria-current="page" className="page-numbers current">1</span>
              <a className="page-numbers" href="#">2</a>
              <a className="next page-numbers" href="#">Next</a>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </section>
</div>

    </>
  )
}
