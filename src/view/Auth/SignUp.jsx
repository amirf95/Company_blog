import React, { useState } from 'react'
import { NavBar } from '../../layouts/NavBar'
import { Footer } from '../../layouts/Footer'
import usersService from '../../services/usersService'
import Swal from 'sweetalert2'
import { Link, useNavigate } from 'react-router-dom'

export const SignUp = () => {
  const [firstName, setfirstname] = useState("")
  const [lastName, setlastname] = useState("")
  const [email, setemail] = useState("")
  const [phone, setphone] = useState("")
  const [password, setpassword] = useState("")
  const [address, setaddress] = useState("")
  const navigate=useNavigate()
  const signup = () => {
    let data = {
      role:"Employee",
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      password: password,
      address:address
    }
    usersService.signup(data).then((res) => {
      console.log(res, "ress")
      if (res.status === 201) {
        Swal.fire({
          position: "Center",
          icon: "success",
          title: "SignUp Successfully",
          showConfirmButton: false,
          timer: 1500
        });
        navigate("/signin")
      }
    }).catch((err) => {
      console.log(err, "err")

    })
  }
  return (
    <>          <NavBar />
      <section className="contact-form-wrap section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div id="contact-form" className="contact__form" >
                {/* form message */}
                <div className="row">
                  <div className="col-12">

                  </div>
                </div>
                <span className="text-color">SignUp</span>
                <h3 className="text-md mb-4">SignUp</h3>
                <div className="form-group">
                  <input name="name" type="text" className="form-control" placeholder=" firstname"
                    onChange={(e) => setfirstname(e.target.value)} />             </div>
                <div className="form-group">
                  <input name="name" type="text" className="form-control" placeholder=" lastname"
                    onChange={(e) => setlastname(e.target.value)} />             </div>
                <div className="form-group">
                  <input name="name" type="text" className="form-control" placeholder=" email"
                    onChange={(e) => setemail(e.target.value)} />             </div>
                <div className="form-group">
                  <input name="name" type="text" className="form-control" placeholder=" phone"
                    onChange={(e) => setphone(e.target.value)} />             </div>

                <div className="form-group">
                  <input name="name" type="password" className="form-control" placeholder=" password"
                    onChange={(e) => setpassword(e.target.value)} />             </div>
 <div className="form-group">
                  <input name="name" type="text" className="form-control" placeholder=" address"
                    onChange={(e) => setaddress(e.target.value)} />             </div>



                <button className="btn btn-main" name="submit" type="submit"
                  onClick={signup} >signup</button>
              </div>
              <div> already have account <Link to="/signin"><span>signin</span></Link> </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
