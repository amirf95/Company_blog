import React from 'react'
import { NavBar } from '../layouts/NavBar'
import { Footer } from '../layouts/Footer'

export const About = () => {
  return (
    <>
   <NavBar/>
<div>
  <section className="page-title bg-1">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="block text-center">
            <span className="text-white">About Us</span>
            <h1 className="text-capitalize mb-4 text-lg">Our Company</h1>
            <ul className="list-inline">
              <li className="list-inline-item"><a href="index.html" className="text-white">Home</a></li>
              <li className="list-inline-item"><span className="text-white">/</span></li>
              <li className="list-inline-item"><a href="#" className="text-white-50">About Us</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="section about-2 position-relative">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-6">
          <div className="about-item pr-3 mb-5 mb-lg-0">
            <span className="h6 text-color">What we are</span>
            <h2 className="mt-3 mb-4 position-relative content-title">We are dynamic team of creative people</h2>
            <p className="mb-5">We provide consulting services in the area of IFRS and management reporting, helping companies to reach their highest level. We optimize business processes, making them easier.</p>
            <a href="#" className="btn btn-main btn-round-full">Get started</a>
          </div>
        </div>
        <div className="col-lg-6 col-md-6">
          <div className="about-item-img">
            <img src="images/about/home-7.jpg" alt className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="about-info section pt-0">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="about-info-item mb-4 mb-lg-0">
            <h3 className="mb-3"><span className="text-color mr-2 text-md ">01.</span>Our Mission</h3>
            <p>llum similique ducimus accusamus laudantium praesentium, impedit quaerat, itaque maxime sunt deleniti voluptas distinctio .</p>
          </div>		
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="about-info-item mb-4 mb-lg-0">
            <h3 className="mb-3"><span className="text-color mr-2 text-md">02.</span>Vission</h3>
            <p>llum similique ducimus accusamus laudantium praesentium, impedit quaerat, itaque maxime sunt deleniti voluptas distinctio .</p>
          </div>		
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="about-info-item mb-4 mb-lg-0">
            <h3 className="mb-3"><span className="text-color mr-2 text-md">03.</span>Our Approach</h3>
            <p>llum similique ducimus accusamus laudantium praesentium, impedit quaerat, itaque maxime sunt deleniti voluptas distinctio .</p>
          </div>		
        </div>
      </div>
    </div>
  </section>
  <section className="section counter bg-counter">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="counter-item text-center mb-5 mb-lg-0">
            <i className="ti-check color-one text-md" />
            <h3 className="mt-2 mb-0 text-white"><span className="counter-stat font-weight-bold">1730</span> +</h3>
            <p className="text-white-50">Project Done</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="counter-item text-center mb-5 mb-lg-0">
            <i className="ti-flag color-one text-md" />
            <h3 className="mt-2 mb-0 text-white"><span className="counter-stat font-weight-bold">125 </span>M </h3>
            <p className="text-white-50">User Worldwide</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="counter-item text-center mb-5 mb-lg-0">
            <i className="ti-layers color-one text-md" />
            <h3 className="mt-2 mb-0 text-white"><span className="counter-stat font-weight-bold">39</span></h3>
            <p className="text-white-50">Availble Country</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="counter-item text-center">
            <i className="ti-medall color-one  text-md" />
            <h3 className="mt-2 mb-0 text-white"><span className="counter-stat font-weight-bold">14</span></h3>
            <p className="text-white-50">Award Winner </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="section team">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-7 text-center">
          <div className="section-title">
            <span className="h6 text-color">Our Team</span>
            <h2 className="mt-3 content-title">Expert Team member to get best service</h2>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="team-item-wrap mb-5">
            <div className="team-item position-relative">
              <img src="images/team/team-1.jpg" alt className="img-fluid w-100" />
              <div className="team-img-hover">
                <ul className="team-social list-inline">
                  <li className="list-inline-item">
                    <a href="#" className="facebook"><i className="fab fa-facebook-f" aria-hidden="true" /></a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="twitter"><i className="fab fa-twitter" aria-hidden="true" /></a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="instagram"><i className="fab fa-instagram" aria-hidden="true" /></a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="linkedin"><i className="fab fa-linkedin-in" aria-hidden="true" /></a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="team-item-content">
              <h4 className="mt-3 mb-0 text-capitalize">Justin hammer</h4>
              <p>Digital Marketer</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="team-item-wrap mb-5">
            <div className="team-item position-relative">
              <img src="images/team/team-2.jpg" alt className="img-fluid w-100" />
              <div className="team-img-hover">
                <ul className="team-social list-inline">
                  <li className="list-inline-item">
                    <a href="#" className="facebook"><i className="fab fa-facebook-f" aria-hidden="true" /></a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="twitter"><i className="fab fa-twitter" aria-hidden="true" /></a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="instagram"><i className="fab fa-instagram" aria-hidden="true" /></a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="linkedin"><i className="fab fa-linkedin-in" aria-hidden="true" /></a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="team-item-content">
              <h4 className="mt-3 mb-0 text-capitalize">Jason roy</h4>
              <p>UI/UX Designer</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="team-item-wrap mb-5 ">
            <div className="team-item position-relative">
              <img src="images/team/team-3.jpg" alt className="img-fluid w-100" />
              <div className="team-img-hover">
                <ul className="team-social list-inline">
                  <li className="list-inline-item">
                    <a href="#" className="facebook"><i className="fab fa-facebook-f" aria-hidden="true" /></a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="twitter"><i className="fab fa-twitter" aria-hidden="true" /></a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="instagram"><i className="fab fa-instagram" aria-hidden="true" /></a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="linkedin"><i className="fab fa-linkedin-in" aria-hidden="true" /></a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="team-item-content">
              <h4 className="mt-3 mb-0 text-capitalize">Henry oswald</h4>
              <p>Developer</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="team-item-wrap mb-5 mb-lg-0">
            <div className="team-item position-relative">
              <img src="images/team/team-4.jpg" alt className="img-fluid w-100" />
              <div className="team-img-hover">
                <ul className="team-social list-inline">
                  <li className="list-inline-item">
                    <a href="#" className="facebook"><i className="fab fa-facebook-f" aria-hidden="true" /></a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="twitter"><i className="fab fa-twitter" aria-hidden="true" /></a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="instagram"><i className="fab fa-instagram" aria-hidden="true" /></a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="linkedin"><i className="fab fa-linkedin-in" aria-hidden="true" /></a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="team-item-content">
              <h4 className="mt-3 mb-0 text-capitalize">David Williams</h4>
              <p>Senior Marketer</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="team-item-wrap mb-5 mb-lg-0">
            <div className="team-item position-relative">
              <img src="images/team/team-6.jpg" alt className="img-fluid w-100" />
              <div className="team-img-hover">
                <ul className="team-social list-inline">
                  <li className="list-inline-item">
                    <a href="#" className="facebook"><i className="fab fa-facebook-f" aria-hidden="true" /></a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="twitter"><i className="fab fa-twitter" aria-hidden="true" /></a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="instagram"><i className="fab fa-instagram" aria-hidden="true" /></a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="linkedin"><i className="fab fa-linkedin-in" aria-hidden="true" /></a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="team-item-content">
              <h4 className="mt-3 mb-0 text-capitalize">Peter Odin</h4>
              <p>App Developer</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="team-item-wrap mb-5 mb-lg-0 ">
            <div className="team-item position-relative">
              <img src="images/team/team-5.jpg" alt className="img-fluid w-100" />
              <div className="team-img-hover">
                <ul className="team-social list-inline">
                  <li className="list-inline-item">
                    <a href="#" className="facebook"><i className="fab fa-facebook-f" aria-hidden="true" /></a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="twitter"><i className="fab fa-twitter" aria-hidden="true" /></a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="instagram"><i className="fab fa-instagram" aria-hidden="true" /></a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="linkedin"><i className="fab fa-linkedin-in" aria-hidden="true" /></a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="team-item-content">
              <h4 className="mt-3 mb-0 text-capitalize">David Spensor</h4>
              <p>Project Manager</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="section testimonial bg-gray">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-7 text-center">
          <div className="section-title">
            <span className="h6 text-color">Clients testimonial</span>
            <h2 className="mt-3 content-title">Check what's our clients say about us</h2>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="testimonial-wrap">
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
</div>

<Footer/>

</>
  )
}
