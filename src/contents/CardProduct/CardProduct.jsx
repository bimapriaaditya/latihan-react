import React, {Component} from "react";

class CardProduct extends Component {
  
  state = {
    orders: 4,
    users: 'Adidayaaa'
  }

  handleCounterChange = (value) => {
    this.props.onCounterChange(value)
  }

  handlePlus = () => {
    this.setState({
      orders: this.state.orders + 1
    }, () => {
      this.handleCounterChange(this.state.orders);
    });
  }

  handleMinus = () => {
    if (this.state.orders > 0) {
      this.setState({
        orders: this.state.orders - 1
      }, () => {
        this.handleCounterChange(this.state.orders);
      });
    }
  }

  render() {
    return(
      <div className="content">
        <div className="main-cover">
          <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80" alt="main-cover" />
        </div>
        <div className="px-3 py-2">
          <div>
            <small className="text-muted">Running</small>
            <h4 className="mb-0">Sepatu Lari Nike Run ZoomX VaporFly Next % 2 Ice Blue CU41111-400 - 44</h4>
            <div className="d-flex">
              <div className="mr-2 border-right pr-2">
                <span className="text-muted mr-1">Terjual</span>
                <strong>12</strong>
              </div>
              <div className="mr-2 border-right pr-2">
                <span className="text-muted mr-1">Dilihat</span>
                <strong>200</strong>
              </div>
            </div>
          </div>
          <div className="w-100 mt-4">
            <div className="btn-group w-100 d-flex" role="group">
              <button type="button" className="btn btn-dark btn-sm p-0 shadow-none" id="counterMinus" onClick={this.handleMinus}>
                <i className="fas fa-minus"></i>
              </button>
              <button type="button" className="btn btn-light border btn-lg flex-grow-1 shadow-none" id="counterLength">
                {this.state.orders}
              </button>
              <button type="button" className="btn btn-dark btn-sm p-0 shadow-none" id="counterPlus" onClick={this.handlePlus}>
                <i className="fas fa-plus"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CardProduct;