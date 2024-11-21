import React from 'react'
import { NavBar } from '../layouts/NavBar'
import { Footer } from '../layouts/Footer'

export const Home = () => {
  return (
    <>
    <NavBar/>
<div>
  <section className="slider">
    <div className="container">
      <div className="row">
        <div className="col-lg-9 col-md-10">
          <div className="block">
            <span className="d-block mb-3 text-white text-capitalize">Prepare for new future</span>
            <h1 className="animated fadeInUp mb-5">Our work is <br />presentation of our <br />capabilities.</h1>
            <a href="#" target="_blank" className="btn btn-main animated fadeInUp btn-round-full">Get started<i className="btn-icon fa fa-angle-right ml-2" /></a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="section intro">
    <div className="container">
      <div className="row ">
        <div className="col-lg-8">
          <div className="section-title">
            <span className="h6 text-color ">We are creative &amp; expert people</span>
            <h2 className="mt-3 content-title">We work with business &amp; provide solution to client with their business problem </h2>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-4 col-md-6 col-12">
          <div className="intro-item mb-5 mb-lg-0"> 
            <i className="ti-desktop color-one" />
            <h4 className="mt-4 mb-3">Modern &amp; Responsive design</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, ducimus.</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="intro-item mb-5 mb-lg-0">
            <i className="ti-medall color-one" /> 
            <h4 className="mt-4 mb-3">Awarded licensed company</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, ducimus.</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="intro-item">
            <i className="ti-layers-alt color-one" />
            <h4 className="mt-4 mb-3">Build your website Professionally</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, ducimus.</p>
          </div>
        </div> 
      </div>
    </div>
  </section>
  {/* Section Intro END */}
  {/* Section About Start */}
  <section className="section about position-relative">
    <div className="bg-about" />
    <div className="container">
      <div className="row">
        <div className="col-lg-6 offset-lg-6 offset-md-0">
          <div className="about-item ">
            <span className="h6 text-color">What we are</span>
            <h2 className="mt-3 mb-4 position-relative content-title">We are dynamic team of creative people</h2>
            <div className="about-content">
              <h4 className="mb-3 position-relative">We are Perfect Solution</h4>
              <p className="mb-5">We provide consulting services in the area of IFRS and management reporting, helping companies to reach their highest level. We optimize business processes, making them easier.</p>
              <a href="#" className="btn btn-main btn-round-full">Get started</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Section About End */}
  {/* section Counter Start */}
  <section className="section counter">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="counter-item text-center mb-5 mb-lg-0">
            <h3 className="mb-0"><span className="counter-stat font-weight-bold">1730</span> +</h3>
            <p className="text-muted">Project Done</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="counter-item text-center mb-5 mb-lg-0">
            <h3 className="mb-0"><span className="counter-stat font-weight-bold">125 </span>M </h3>
            <p className="text-muted">User Worldwide</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="counter-item text-center mb-5 mb-lg-0">
            <h3 className="mb-0"><span className="counter-stat font-weight-bold">39</span></h3>
            <p className="text-muted">Availble Country</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="counter-item text-center">
            <h3 className="mb-0"><span className="counter-stat font-weight-bold">14</span></h3>
            <p className="text-muted">Award Winner </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* section Counter End  */}
  {/*  Section Services Start */}
  <section className="section service border-top">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-7 text-center">
          <div className="section-title">
            <span className="h6 text-color">Our Services</span>
            <h2 className="mt-3 content-title ">We provide a wide range of creative services </h2>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="service-item mb-5">
            <i className="ti-desktop" />
            <h4 className="mb-3">Web development.</h4>
            <p>A digital agency isn't here to replace your internal team, we're here to partner</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="service-item mb-5">
            <i className="ti-layers" />
            <h4 className="mb-3">Interface Design.</h4>
            <p>A digital agency isn't here to replace your internal team, we're here to partner</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="service-item mb-5">
            <i className="ti-bar-chart" />
            <h4 className="mb-3">Business Consulting.</h4>
            <p>A digital agency isn't here to replace your internal team, we're here to partner</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="service-item mb-5 mb-lg-0">
            <i className="ti-vector" />
            <h4 className="mb-3">Branding.</h4>
            <p>A digital agency isn't here to replace your internal team, we're here to partner</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="service-item mb-5 mb-lg-0">
            <i className="ti-android" />
            <h4 className="mb-3">App development.</h4>
            <p>A digital agency isn't here to replace your internal team, we're here to partner</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="service-item mb-5 mb-lg-0">
            <i className="ti-pencil-alt" />
            <h4 className="mb-3">Content creation.</h4>
            <p>A digital agency isn't here to replace your internal team, we're here to partner</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*  Section Services End */}
  {/* Section Cta Start */} 
  <section className="section cta">
    <div className="container">
      <div className="row">
        <div className="col-lg-5">
          <div className="cta-item  bg-white p-5 rounded">
            <span className="h6 text-color">We create for you</span>
            <h2 className="mt-2 mb-4">Entrust Your Project to Our Best Team of Professionals</h2>
            <p className="lead mb-4">Have any project on mind? For immidiate support :</p>
            <h3><i className="ti-mobile mr-3 text-color" />+216 97120225</h3>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*  Section Cta End*/}
  {/* Section Testimonial Start */}
  <section className="section testimonial">
    <div className="container">
      <div className="row">
        <div className="col-lg-7 ">
          <div className="section-title">
            <span className="h6 text-color">Clients testimonial</span>
            <h2 className="mt-3 content-title">Check what's our clients say about us</h2>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row testimonial-wrap">
        <div className="testimonial-item position-relative">
          <i className="ti-quote-left text-color" />
          <div className="testimonial-item-content">
            <p className="testimonial-text">Quam maiores perspiciatis temporibus odio reiciendis error alias debitis atque consequuntur natus iusto recusandae numquam corrupti facilis blanditiis.</p>
            <div className="testimonial-author">
              <h5 className="mb-0 text-capitalize">Thomas Johnson</h5>
              <p>Excutive Director,themefisher</p>
            </div>
          </div>
        </div>
        <div className="testimonial-item position-relative">
          <i className="ti-quote-left text-color" />
          <div className="testimonial-item-content">
            <p className="testimonial-text">Consectetur adipisicing elit. Quam maiores perspiciatis temporibus odio reiciendis error alias debitis atque consequuntur natus iusto recusandae .</p>
            <div className="testimonial-author">
              <h5 className="mb-0 text-capitalize">Mickel hussy</h5>
              <p>Excutive Director,themefisher</p>
            </div>
          </div>
        </div>
        <div className="testimonial-item position-relative">
          <i className="ti-quote-left text-color" />
          <div className="testimonial-item-content">
            <p className="testimonial-text">Quam maiores perspiciatis temporibus odio reiciendis error alias debitis atque consequuntur natus iusto recusandae numquam corrupti.</p>
            <div className="testimonial-author">
              <h5 className="mb-0 text-capitalize">James Watson</h5>
              <p>Excutive Director,themefisher</p>
            </div>
          </div>
        </div>
        <div className="testimonial-item position-relative">
          <i className="ti-quote-left text-color" />
          <div className="testimonial-item-content">
            <p className="testimonial-text">Consectetur adipisicing elit. Quam maiores perspiciatis temporibus odio reiciendis error alias debitis atque consequuntur natus iusto recusandae .</p>
            <div className="testimonial-author">
              <h5 className="mb-0 text-capitalize">Mickel hussy</h5>
              <p>Excutive Director,themefisher</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Section Testimonial End */}
  <section className="section latest-blog bg-2">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-7 text-center">
          <div className="section-title">
            <span className="h6 text-color">Latest News</span>
            <h2 className="mt-3 content-title text-white">Latest articles to enrich knowledge</h2>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-4 col-md-6 mb-5">
          <div className="card bg-transparent border-0">
            <img src="images/blog/1.jpg" alt className="img-fluid rounded" />
            <div className="card-body mt-2">
              <div className="blog-item-meta">
                <a href="#" className="text-white-50">Design<span className="ml-2 mr-2">/</span></a>
                <a href="#" className="text-white-50">Ui/Ux<span className="ml-2">/</span></a>
                <a href="#" className="text-white-50 ml-2"><i className="fa fa-user mr-2" />admin</a>
              </div> 
              <h3 className="mt-3 mb-5 lh-36"><a href="#" className="text-white ">How to improve design with typography?</a></h3>
              <a href="blog-single.html" className="btn btn-small btn-solid-border btn-round-full text-white">Learn More</a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-5">
          <div className="card border-0 bg-transparent">
            <img src="images/blog/2.jpg" alt className="img-fluid rounded" />
            <div className="card-body mt-2">
              <div className="blog-item-meta">
                <a href="#" className="text-white-50">Design<span className="ml-2 mr-2">/</span></a>
                <a href="#" className="text-white-50">Ui/Ux<span className="ml-2">/</span></a>
                <a href="#" className="text-white-50 ml-2"><i className="fa fa-user mr-2" />admin</a>
              </div>  
              <h3 className="mt-3 mb-5 lh-36"><a href="#" className="text-white">Interactivity design may connect consumer</a></h3>
              <a href="blog-single.html" className="btn btn-small btn-solid-border btn-round-full text-white">Learn More</a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-5">
          <div className="card border-0 bg-transparent">
            <img src="images/blog/3.jpg" alt className="img-fluid rounded" />
            <div className="card-body mt-2">
              <div className="blog-item-meta">
                <a href="#" className="text-white-50">Design<span className="ml-2 mr-2">/</span></a>
                <a href="#" className="text-white-50">Ui/Ux<span className="ml-2">/</span></a>
                <a href="#" className="text-white-50 ml-2"><i className="fa fa-user mr-2" />admin</a>
              </div> 
              <h3 className="mt-3 mb-5 lh-36"><a href="#" className="text-white">Marketing Strategy to bring more affect</a></h3>
              <a href="blog-single.html" className="btn btn-small btn-solid-border btn-round-full text-white">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="mt-70 position-relative">
    <div className="container">
      <div className="cta-block-2 bg-gray p-5 rounded border-1">
        <div className="row justify-content-center align-items-center ">
          <div className="col-lg-7">
            <span className="text-color">For Every type business</span>
            <h2 className="mt-2 mb-4 mb-lg-0">Entrust Your Project to Our Best Team of Professionals</h2>
          </div>
          <div className="col-lg-4">
            <a href="contact.html" className="btn btn-main btn-round-full float-lg-right ">Contact Us</a>
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
