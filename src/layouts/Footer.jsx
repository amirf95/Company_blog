///rafc
import React from 'react'

export const Footer = () => {
  return (
  
    <>
<footer className="footer section">
  <div className="container">
    <div className="row">
      <div className="col-lg-3 col-md-6 col-sm-6">
        <div className="widget">
          <h4 className="text-capitalize mb-4">Company</h4>
          <ul className="list-unstyled footer-menu lh-35">
            <li><a href="#">Terms &amp; Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Support</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>
      </div>
      <div className="col-lg-2 col-md-6 col-sm-6">
        <div className="widget">
          <h4 className="text-capitalize mb-4">Quick Links</h4>
          <ul className="list-unstyled footer-menu lh-35">
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Team</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-6">
        <div className="widget">
          <h4 className="text-capitalize mb-4">Subscribe Us</h4>
          <p>Subscribe to get latest news article and resources</p>
          <form action="#" className="sub-form">
            <input type="text" className="form-control mb-3" placeholder="Subscribe Now ..." />
            <a href="#" className="btn btn-main btn-small">subscribe</a>
          </form>
        </div>
      </div>
      <div className="col-lg-3 ml-auto col-sm-6">
        <div className="widget">
          <div className="logo mb-4">
            <h3>Mega<span>kit.</span></h3>
          </div>
          <h6><a href="tel:+216 97120225">amirfenina03@gmail.com</a></h6>
          <a href="mailto:support@gmail.com"><span className="text-color h4">+216 97120225</span></a>
        </div>
      </div>
    </div>
    <div className="footer-btm pt-4">
      <div className="row">
        <div className="col-lg-4 col-md-12 col-sm-12">
          <div className="copyright">
            © Copyright Reserved to <span className="text-color">Megakit.</span> by <a href="https://themefisher.com/" target="_blank">fnayna</a>
          </div>
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12">
          <div className="copyright">
            Distributed by  <a href="https://themewagon.com/" target="_blank">Fnayna</a>
          </div>
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12 text-left text-lg-left">
          <ul className="list-inline footer-socials">
            <li className="list-inline-item"><a href="https://www.facebook.com/fenina.emir/"><i className="ti-facebook mr-2" />Facebook</a></li>
            <li className="list-inline-item"><a href="https://twitter.com/themefisher"><i className="ti-twitter mr-2" />Twitter</a></li>
            <li className="list-inline-item"><a href="https://www.pinterest.com/themefisher/"><i className="ti-linkedin mr-2 " />Linkedin</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</footer>

    
    </>
  )
  
}
