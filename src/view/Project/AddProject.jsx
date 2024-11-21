import React, { useEffect, useState } from 'react'
import { NavBar } from '../../layouts/NavBar'
import { Footer } from '../../layouts/Footer'
import projectService from '../../services/projectService'
import Swal from 'sweetalert2'
import categoryService from '../../services/categoryService'
import Select from 'react-select'

export const AddProject = () => {
  const [categories, setcategories] = useState([]);
  const [filtredcategories, setfiltredcategories] = useState([]);

  const fetchCategories = () => {
    categoryService.findAllCategories().then((res) => {
      console.log(res, "ress categories");
      const fetchedCategories = res.data.data;
      setcategories(fetchedCategories);
      // Set filtered categories after fetching
      setfiltredcategories(
        fetchedCategories.map((res) => {
          return {
            label: res.name,
            value: res._id
          };
        })
      );
    }).catch((err) => {
      console.log(err, "err");
    });
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [file, setfile] = useState(null);
  const [duration, setduration] = useState("");
  const [status, setstatus] = useState("");
  const [category, setcategory] = useState("");

  const ajouProject = () => {
    const data = new FormData();
    data.append("title", title);
    data.append("description", description);
    data.append("file", file);
    data.append("duration", duration);
    data.append("status", status);
    data.append("category", category);
    
    projectService.addProjects(data).then((res) => {
      console.log(res, "ressss");
      if (res.status === 201) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Project has been saved",
          showConfirmButton: false,
          timer: 1500
        });
      }
    }).catch((err) => {
      console.log(err, "errr");
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
                <span className="text-color">Project</span>
                <h3 className="text-md mb-4">Add Project</h3>
                <div className="form-group">
                  <input name="name" type="text" className="form-control" placeholder="Title"
                    onChange={(e) => settitle(e.target.value)} />
                </div>
                <div className="form-group">
                  <input name="name" type="text" className="form-control" placeholder="Description"
                    onChange={(e) => setdescription(e.target.value)} />
                </div>
                <div className="form-group">
                  <input name="name" type="file" className="form-control" placeholder="File"
                    onChange={(e) => setfile(e.target.files[0])} />
                </div>
                <div className="form-group">
                  <input name="name" type="text" className="form-control" placeholder="Duration"
                    onChange={(e) => setduration(e.target.value)} />
                </div>
                <div className="form-group">
                  <select className="form-control" placeholder="Status" onChange={(e) => setstatus(e.target.value)}>
                    <option>Select Status</option>
                    <option value="in progress">In Progress</option>
                    <option value="completed">Completed</option>
                  </select>
                </div>
                <div className="form-group">
                  <Select onChange={(e) => setcategory(e.value)} options={filtredcategories} />
                </div>
                <button className="btn btn-main" name="submit" type="submit"
                  onClick={ajouProject}>Add</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
