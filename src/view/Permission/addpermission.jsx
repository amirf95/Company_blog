import React, { useEffect, useState } from 'react';
import { NavBar } from '../../layouts/NavBar';
import { Footer } from '../../layouts/Footer';
import Swal from 'sweetalert2';
import Select from 'react-select';
import typeService from '../../services/typeService';
import PermissionService from '../../services/PermissionService';
export const Addpermission = () => {
  const [types, settypes] = useState([]);
  const [filtredtypes, setfiltredtypes] = useState([]);
  const [auth, setauth] = useState({});
  useEffect(() => {
    // Fetch the connected user information from localStorage
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setauth(JSON.parse(storedUser));
    }
    fetchtypes();
  }, []);
  const fetchtypes = () => {
    typeService.findalltype().then((res) => {
      const fetchedtypes = res.data.data;
      settypes(fetchedtypes);
      setfiltredtypes(
        fetchedtypes.map((res) => ({
          label: res.name,
          value: res._id
        }))
      );
    }).catch((err) => {
      console.log(err, "Error fetching types");
    });
  };
  const [reason, setreason] = useState("");
  const [datedeb, setdatedb] = useState("");
  const [datefin, setdatefin] = useState("");
  const [type, settype] = useState("");
  const ajoutpermission = () => {
    // Check if user is authenticated
    let data={
      reason:reason,
      datedeb:datedeb,
      datefin:datefin,
      user:auth?.user?._id,
      status:"hold",
      type:type
    }
    PermissionService.addPermission(data).then((res) => {
      console.log(res , "res");
      if (res.status === 201) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Permission has been saved",
          showConfirmButton: false,
          timer: 1500
        });
      }
    }).catch((err) => {
      console.log(err, "Error adding permission");
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'An error occurred while adding the permission. Please try again.',
      });
    });
  };
  return (
    <>
      <NavBar />
      <section className="contact-form-wrap section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div id="contact-form" className="contact__form">
                <span className="text-color">type</span>
                <h3 className="text-md mb-4">Add permission</h3>
                <div className="form-group">
                  <input
                    name="reason"
                    type="text"
                    className="form-control"
                    placeholder="Reason"
                    value={reason}
                    onChange={(e) => setreason(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <input
                    name="datedeb"
                    type="date"
                    className="form-control"
                    placeholder="Start Date"
                    value={datedeb}
                    onChange={(e) => setdatedb(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <input
                    name="datefin"
                    type="date"
                    className="form-control"
                    placeholder="End Date"
                    value={datefin}
                    onChange={(e) => setdatefin(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <Select
                    onChange={(e) => settype(e.value)}
                    options={filtredtypes}
                    placeholder="Select Type"
                  />
                </div>
                <button
                  className="btn btn-main"
                  name="submit"
                  type="button"
                  onClick={ajoutpermission}
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};