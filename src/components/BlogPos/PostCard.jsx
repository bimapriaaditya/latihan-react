import React from "react";

const PostCard = (props) => {
  return(
    <div className="col-6 mt-4">
      <div className="card">
        <div className="position-relative">
          <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80" className="card-img-top" alt="lorem" />
          <div className="my-action">
            <div className="dropdown">
              <button className="btn text-light shadow-none rounded-circle" type="button" data-toggle="dropdown" aria-expanded="false">
                <i className="fas fa-ellipsis-h"></i>
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href="#">View</a>
                <button type="button" className="dropdown-item" onClick={() => props.updateData(props.data)}>
                  Edit
                  </button>
                <button type="button" className="dropdown-item text-danger" onClick={() => props.deleteData(props.data.id)}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-3">
          <div className="p-2">
            <h5 className="card-title">{props.data.product}</h5>
            <small className="text-muted">{props.data.price}</small>
            <p className="card-text">{props.data.description}</p>
            <div className="d-flex justify-content-between">
              <div>
                <strong>Stock : {props.data.stock}</strong>
              </div>
            </div>
          </div>
          <button type="button" className="btn btn-primary w-100 rounded-0">
            Buy
          </button>
        </div>
      </div>
    </div>
  );
}

export default PostCard