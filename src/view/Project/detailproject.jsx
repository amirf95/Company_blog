import React, { useEffect, useState } from 'react'
import { NavBar } from '../../layouts/NavBar'
import { Footer } from '../../layouts/Footer'
import { useParams } from 'react-router-dom'
import projectService from '../../services/projectService'

export const Detailproject = () => {
    const{id}=useParams();
    console.log(id , "idddddd")
    const [Oneproject,setoneproject]=useState({})
    const projectOne=()=>
    {
projectService.oneproject(id).then((res)=>
{
    console.log(res,"ress")
    setoneproject(res.data.data)
}).catch((err)=>
{
    console.log(err,"err");
    
})
    }
useEffect(()=>
{
    projectOne()
},[])



    
  return (
    <>
    <NavBar/>
  <div>
    

  <section className="section blog-wrap bg-gray">
    <div className="container">
    <h2 className="mt-5 content-title text-center">Detail Project</h2>
      <div className="row">
        <div className="col-lg-8">
          <div className="row">
            <div className="col-lg-12 mb-5">
              <div className="single-blog-item">
                <img src={`http://localhost:4000/file/projects/${Oneproject?.file}`} alt className="img-fluid rounded" />
                <div className="blog-item-content bg-white p-5">
                  <div className="blog-item-meta bg-gray py-1 px-2">
                    <span className="text-muted text-capitalize mr-3"><i className="ti-pencil-alt mr-2" />{Oneproject?.category?.name}</span>
                    <span className="text-muted text-capitalize mr-3"><i className="ti-comment mr-2" />{Oneproject?.status}</span>
                    <span className="text-black text-capitalize mr-3"><i className="ti-time mr-1" /> {Oneproject?.duration}</span>
                  </div> 
                  <h2 className="mt-3 mb-4"><a href="blog-single.html">{Oneproject?.title}</a></h2>
                  <h3 className="quote">{Oneproject?.description}</h3>
                 
                </div>
              </div>
            </div>
            <div className="col-lg-12 mb-5">
              <div className="posts-nav bg-white p-5 d-lg-flex d-md-flex justify-content-between ">
                <a className="post-prev align-items-center" href="#">
                  <div className="posts-prev-item mb-4 mb-lg-0">
                    <span className="nav-posts-desc text-color">- Previous Post</span>
                    <h6 className="nav-posts-title mt-1">
                      Donec consectetuer ligula <br />vulputate sem tristique.
                    </h6>
                  </div>
                </a>
                <div className="border" />
                <a className="posts-next" href="#">
                  <div className="posts-next-item pt-4 pt-lg-0">
                    <span className="nav-posts-desc text-lg-right text-md-right text-color d-block">- Next Post</span>
                    <h6 className="nav-posts-title mt-1">
                      Ut aliquam sollicitudin leo.
                    </h6>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-12 mb-5">
              <div className="comment-area card border-0 p-5">
                <h4 className="mb-4">2 Comments</h4>
                <ul className="comment-tree list-unstyled">
                  <li className="mb-5">
                    <div className="comment-area-box">
                      <img alt src="images/blog/test1.jpg" className="img-fluid float-left mr-3 mt-2" />
                      <h5 className="mb-1">Philip W</h5>
                      <span>United Kingdom</span>
                      <div className="comment-meta mt-4 mt-lg-0 mt-md-0 float-lg-right float-md-right">
                        <a href="#"><i className="icofont-reply mr-2 text-muted" />Reply |</a>
                        <span className="date-comm">Posted October 7, 2018 </span>
                      </div>
                      <div className="comment-content mt-3">
                        <p>Some consultants are employed indirectly by the client via a consultancy staffing company, a company that provides consultants on an agency basis. </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="comment-area-box">
                      <img alt src="images/blog/test2.jpg" className="mt-2 img-fluid float-left mr-3" />
                      <h5 className="mb-1">Philip W</h5>
                      <span>United Kingdom</span>
                      <div className="comment-meta mt-4 mt-lg-0 mt-md-0 float-lg-right float-md-right">
                        <a href="#"><i className="icofont-reply mr-2 text-muted" />Reply |</a>
                        <span className="date-comm">Posted October 7, 2018</span>
                      </div>
                      <div className="comment-content mt-3">
                        <p>Some consultants are employed indirectly by the client via a consultancy staffing company, a company that provides consultants on an agency basis. </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-12">
              <form className="contact-form bg-white rounded p-5" id="comment-form">
                <h4 className="mb-4">Write a comment</h4>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input className="form-control" type="text" name="name" id="name" placeholder="Name:" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input className="form-control" type="text" name="mail" id="mail" placeholder="Email:" />
                    </div>
                  </div>
                </div>
                <textarea className="form-control mb-3" name="comment" id="comment" cols={30} rows={5} placeholder="Comment" defaultValue={""} />
                <input className="btn btn-main btn-round-full" type="submit" name="submit-contact" id="submit_contact" defaultValue="Submit Message" />
              </form>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="sidebar-wrap">
            <div className="sidebar-widget search card p-4 mb-3 border-0">
              <inp type="text" className="form-control" placeholder="search">
                <a href="#" className="btn btn-mian btn-small d-block mt-2">search</a>
              </inp></div>
            <div className="sidebar-widget card border-0 mb-3">
              <img src="images/blog/blog-author.jpg" alt className="img-fluid" />
              <div className="card-body p-4 text-center">
                <h5 className="mb-0 mt-4">Arther Conal</h5>
                <p>Digital Marketer</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, dolore.</p>
                <ul className="list-inline author-socials">
                  <li className="list-inline-item mr-3">
                    <a href="#"><i className="fab fa-facebook-f text-muted" /></a>
                  </li>
                  <li className="list-inline-item mr-3">
                    <a href="#"><i className="fab fa-twitter text-muted" /></a>
                  </li>
                  <li className="list-inline-item mr-3">
                    <a href="#"><i className="fab fa-linkedin-in text-muted" /></a>
                  </li>
                  <li className="list-inline-item mr-3">
                    <a href="#"><i className="fab fa-pinterest text-muted" /></a>
                  </li>
                  <li className="list-inline-item mr-3">
                    <a href="#"><i className="fab fa-behance text-muted" /></a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="sidebar-widget latest-post card border-0 p-4 mb-3">
              <h5>Latest Posts</h5>
              <div className="media border-bottom py-3">
                <a href="#"><img className="mr-4" src="images/blog/bt-3.jpg" alt /></a>
                <div className="media-body">
                  <h6 className="my-2"><a href="#">Thoughtful living in los Angeles</a></h6>
                  <span className="text-sm text-muted">03 Mar 2018</span>
                </div>
              </div>
              <div className="media border-bottom py-3">
                <a href="#"><img className="mr-4" src="images/blog/bt-2.jpg" alt /></a>
                <div className="media-body">
                  <h6 className="my-2"><a href="#">Vivamus molestie gravida turpis.</a></h6>
                  <span className="text-sm text-muted">03 Mar 2018</span>
                </div>
              </div>
              <div className="media py-3">
                <a href="#"><img className="mr-4" src="images/blog/bt-1.jpg" alt /></a>
                <div className="media-body">
                  <h6 className="my-2"><a href="#">Fusce lobortis lorem at ipsum semper sagittis</a></h6>
                  <span className="text-sm text-muted">03 Mar 2018</span>
                </div>
              </div>
            </div>
            <div className="sidebar-widget bg-white rounded tags p-4 mb-3">
              <h5 className="mb-4">Tags</h5>
              <a href="#">Web</a>
              <a href="#">agency</a>
              <a href="#">company</a>
              <a href="#">creative</a>
              <a href="#">html</a>
              <a href="#">Marketing</a>
              <a href="#">Social Media</a>
              <a href="#">Branding</a>
            </div>
          </div>
        </div>   
      </div>
    </div>
  </section>
</div>

    <Footer/>
    </>
  )
}
