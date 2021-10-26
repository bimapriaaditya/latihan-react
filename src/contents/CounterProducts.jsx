import React, {Fragment, Component} from "react";
import '../css/product.css';
import CardProduct from "./CardProduct/CardProduct";

class CounterProducts extends Component {

  state = {
    orders: 4,
    users: 'Adidayaaa'
  }

  handleCounterChange = (newValue) => {
    this.setState({
      orders: newValue
    });
  }
  
  render() {
    return(
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
                      {this.state.orders}
                    </span>
                  </div>
                </div>
              </nav>
              <CardProduct onCounterChange={(value) => this.handleCounterChange(value)} />
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default CounterProducts;