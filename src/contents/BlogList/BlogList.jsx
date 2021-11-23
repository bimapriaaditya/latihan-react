import React, {Component, Fragment} from "react";
import '../../css/product.css';
import PostCard from '../../components/BlogPos/PostCard';

class BlogList extends Component 
{
  state = {
    post: [],
    postForm: {
      id: '',
      product: '',
      price: '',
      stock: '',
      description: ''
    },
    statusForm: 'create'
  }

  // Fetch data from API
  componentDidMount()
  {
    this.getApi();
  }

  getApi = () => {
    fetch('http://localhost:3001/posts?_sort=id&_order=desc')
    .then(response => response.json())
    .then(json => {
      this.setState({
        post: json
      });
    });
  }

  // Delete data from API
  deletePost = (id) => {
    fetch(`http://localhost:3001/posts/${id}`, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(json => {
      this.getApi();
    });
  }

  // function get input value
  getInputValue = (e) => {

    let postFormNew = {...this.state.postForm};
    
    postFormNew[e.target.name] = e.target.value;

    if(this.state.statusForm === 'create') {
      postFormNew.id = Date.now();
    }

    this.setState({
      postForm: postFormNew
    });

  }

  // empty form
  emptyForm = () => {
    this.setState({
      postForm: {
        id: '',
        product: '',
        price: '',
        stock: '',
        description: ''
      }
    })
  }

  // hadle post
  handlePost = (e) => {
    if(this.state.statusForm === 'create'){
      this.postData();
    } else {
      this.putData();
    }
    
  }

  // function post data
  postData = () => {
    fetch('http://localhost:3001/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state.postForm)
    })
    .then(response => response.json())
    .then(json => {
      this.emptyForm();
      this.getApi();
    });
  }

  // function PUT API
  handleUpdate = (data) => {
    this.setState({
      postForm: data,
      statusForm: 'update'
    });
  }

  // function PUT data
  putData = () => {
    const {postForm} = this.state;

    fetch(`http://localhost:3001/posts/${this.state.postForm.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(postForm)
    })
    .then(response => response.json())
    .then(json => {
      this.emptyForm();
      this.getApi();
      this.setState({
        statusForm: 'create'
      });
    });
  }

  
  render() {
    return (
      <Fragment>
        <section className="container mt-3">
          <div className="row justify-content-center">
            <div className="col-md-6 col-sm-8">
              <nav className="my-navbar border-bottom border-success px-4 py-2">
                <div className="nav-left">
                  <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpngimg.com%2Fuploads%2Fnike%2Fnike_PNG5.png&f=1&nofb=1" alt="nike-logo" width="75px"/>
                </div>
                <div className="nav-right">
                  <div className="cart">
                    <i className="fas fa-shopping-cart icon-cart"></i>
                    <span className="d-flex align-items-center justify-content-center bg-danger text-light rounded-circle cart-count" id="cart-count">
                      1
                    </span>
                  </div>
                </div>
              </nav>
              <div className="content">
                <div className="pt-3 px-3">
                  <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#modalCreate">
                    <i className="far fa-square-plus mr-2"></i>
                    Create Item
                  </button>
                </div>
                <div className="row m-0">
                  {
                    this.state.post.map(map => {
                      return <PostCard key={map.id}
                        data={map}
                        deleteData={this.deletePost}
                        updateData={this.handleUpdate} />
                    })
                  }
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* modal */}
        <div className="modal fade" id="modalCreate">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Create Item</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="product">Product</label>
                    <input type="text" 
                      className="form-control" 
                      id="product" 
                      name="product" 
                      onChange={this.getInputValue} 
                      placeholder="Enter title"
                      value={this.state.postForm.product} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <input type="number" 
                      className="form-control" 
                      id="price" 
                      name="price" 
                      onChange={this.getInputValue} 
                      placeholder="Enter Price"
                      value={this.state.postForm.price} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="stock">Stock</label>
                    <input type="number" 
                      className="form-control" 
                      id="stock" 
                      name="stock" 
                      onChange={this.getInputValue} 
                      placeholder="Enter Stock"
                      value={this.state.postForm.stock} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea className="form-control" 
                      id="description" 
                      name="description" 
                      onChange={this.getInputValue} 
                      placeholder="Enter content"
                      value={this.state.postForm.description}></textarea>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary" onClick={this.handlePost}>
                  <span className="spinner-border spinner-border-sm spinner d-none"></span>
                  <span className="text">Save changes</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default BlogList;