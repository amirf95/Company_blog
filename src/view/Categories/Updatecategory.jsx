import React, { useEffect, useState } from 'react';
import { Footer } from '../../layouts/Footer';
import { NavBar } from '../../layouts/NavBar';
import categoryService from '../../services/categoryService';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

export const UpdateCategory = () => {
  const { id } = useParams(); // Get category ID from URL parameters
  const [category, setCategory] = useState({}); // Category state
  const navigate = useNavigate();

  const fetchCategory = () => {
    categoryService.findCategoryByID(id).then((res) => {
      const fetchedCategory = res.data.data;
      setCategory(fetchedCategory);
    }).catch((err) => {
      console.error(err, "Error fetching category");
    });
  };

  useEffect(() => {
    fetchCategory();
  }, [id]);

  // Update the category data
  const updateCategory = () => {
    const data = {
      name: category.name, 
    };

    categoryService.updateCategory(id, data).then((res) => {
      if (res.status === 200) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Category has been updated",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/listcategories");
      }
    }).catch((err) => {
      console.error(err, "Error updating category");
      Swal.fire({
        position: "center",
        icon: "error",
        title: err.message,
        showConfirmButton: false,
        timer: 1500,
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
                <span className="text-color">Category</span>
                <h3 className="text-md mb-4">Update Category</h3>
                <div className="form-group">
                  <input
                    name="name"
                    type="text"
                    className="form-control"
                    placeholder="Category Name"
                    onChange={(e) => setCategory({ ...category, name: e.target.value })}
                    value={category.name || ''}
                  />
                </div>
                <button
                  className="btn btn-main"
                  name="submit"
                  type="submit"
                  onClick={updateCategory}
                >
                  Update
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
