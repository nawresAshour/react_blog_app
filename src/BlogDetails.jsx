// import { useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import useFetch from "./useFetch";
// import { FaTrash } from "react-icons/fa";

// const BlogDetails = () => {
//     const { id } = useParams()
//   const navigate = useNavigate();


//     //grap parameters 

//     const { data: blog, error, isPending }= useFetch('http://localhost:8000/blog/' + id);
//   const [isDeleting, setIsDeleting] = useState(false);

// const handleDelete = () => {
//     const confirmDelete = window.confirm(
//       "Are you sure you want to delete this blog?"
//     );

//     if (!confirmDelete) return;

//     setIsDeleting(true);

//     fetch("http://localhost:8000/blog/" + id, {
//       method: "DELETE"
//     })
//       .then(() => {
//         setIsDeleting(false);
//         navigate("/");
//       })
//       .catch((err) => {
//         setIsDeleting(false);
//         console.log(err);
//       });
//   };

  
//     return (
//         <div className="blog-details">
//             {isPending && <div> Lodaing .... </div>}
//             {error && <div> {error} </div>}

//             {blog && (
//                 <article>
//                     <h2>{blog.title}</h2>
//                     <p>witten By {blog.auther} </p>
//                     <div>{blog.body}</div>

//           <button
//             className="delete-button"
//             onClick={handleDelete}
//             disabled={isDeleting}
//           >
//             <FaTrash />

//             {isDeleting ? "Deleting..." : "Delete Blog"}
//           </button>
//                 </article>
//             )}

//         </div>
//     );
// }

// export default BlogDetails;

import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { FaTrash } from "react-icons/fa";
import "./BlogDetails.css";
 
const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
 
  // Grap parameters
  const { data: blog, error, isPending } = useFetch(
    "http://localhost:8000/blog/" + id
  );
 
  const [isDeleting, setIsDeleting] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
 
  const handleDeleteClick = () => {
    setShowDeleteModal(true);
  };
 
  const handleConfirmDelete = () => {
    setIsDeleting(true);
    setShowDeleteModal(false);
 
    fetch("http://localhost:8000/blog/" + id, {
      method: "DELETE",
    })
      .then(() => {
        setIsDeleting(false);
        navigate("/");
      })
      .catch((err) => {
        setIsDeleting(false);
        console.log(err);
      });
  };
 
  const handleCancelDelete = () => {
    setShowDeleteModal(false);
  };
 
  return (
    <div className="blog-details">
      {isPending && <div className="loading">Loading ....</div>}
      {error && <div className="error">{error}</div>}
 
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written By {blog.auther}</p>
          <div>{blog.body}</div>
 
          <button
            className="delete-button"
            onClick={handleDeleteClick}
            disabled={isDeleting}
          >
            <FaTrash />
            {isDeleting ? "Deleting..." : "Delete Blog"}
          </button>
        </article>
      )}
 
      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="modal-overlay" onClick={handleCancelDelete}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Delete Blog</h3>
              <button
                className="modal-close"
                onClick={handleCancelDelete}
                aria-label="Close"
              >
                ✕
              </button>
            </div>
 
            <div className="modal-body">
              <div className="warning-icon">⚠️</div>
              <p>Are you sure you want to delete this blog?</p>
              <p className="modal-subtitle">
                This action cannot be undone.
              </p>
            </div>
 
            <div className="modal-footer">
              <button
                className="btn-cancel"
                onClick={handleCancelDelete}
              >
                Cancel
              </button>
              <button
                className="btn-delete"
                onClick={handleConfirmDelete}
                disabled={isDeleting}
              >
                {isDeleting ? (
                  <>
                    <span className="spinner"></span>
                    Deleting...
                  </>
                ) : (
                  <>
                    <FaTrash /> Delete
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
 
export default BlogDetails;