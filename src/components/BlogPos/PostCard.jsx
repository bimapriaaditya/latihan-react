import React from "react";

const PostCard = (props) => {
  return(
    <div className="col-6 mt-4">
      <div className="card">
        <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80" className="card-img-top" />
        <div className="pt-3">
          <div className="p-2">
            <h5 className="card-title">{props.data.product}</h5>
            <small className="text-muted">{props.data.price}</small>
            <p className="card-text">{props.data.description}</p>
            <div className="d-flex justify-content-between">
              <div>
                <strong>Stock : {props.data.stock}</strong>
              </div>
              <div>
                <button className="btn p-0 text-danger shadow-none" onClick={() => props.deleteData(props.data.id)}>
                  <i className="fas fa-trash-alt mr-1"></i>
                  <small>Remove Item</small>
                </button>
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