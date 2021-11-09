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
      price: '10.000',
      stock: '',
      description: ''
    }
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

  // Fetch data from API
  componentDidMount()
  {
    this.getApi();
  }

  // Delete data from API
  deletePost = (id) => {
    fetch(`http://localhost:3001/posts/${id}`, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(json => {
      this.setState({
        post: this.state.post.filter(post => post.id !== id)
      });
    });
  }

  // function get input value
  getInputValue = (e) => {
    
    let {postForm} = this.state;
    
    postForm[e.target.name] = e.target.value;
    postForm.id = Date.now();

    this.setState({
      postForm
    });

  }

  // save data to API
  savePost = (e) => {

    fetch('http://localhost:3001/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state.postForm)
    })
    .then(response => response.json())
    .then(json => {
      this.setState({
        post: [...this.state.post, json].sort((a, b) => {
          return b.id - a.id
        })
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
                        deleteData={this.deletePost} />
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
                    <input type="text" className="form-control" id="product" name="product" onChange={this.getInputValue} placeholder="Enter title" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <input type="number" className="form-control" id="price" name="price" onChange={this.getInputValue} placeholder="Enter Price" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="stock">Stock</label>
                    <input type="number" className="form-control" id="stock" name="stock" onChange={this.getInputValue} placeholder="Enter Stock" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea className="form-control" id="description" name="description" onChange={this.getInputValue} placeholder="Enter content"></textarea>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary" onClick={this.savePost}>
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