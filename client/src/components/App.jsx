import React from 'react';
import ProductList from './ProductList';
import ProductViewer from './ProductViewer';
import Search from './Search';

import axios from 'axios';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      products: [],
      currentProduct: null
    }

  }
  componentDidMount() {
    axios.get('/products')
      .then((res) => {
        this.setState({products:res.data});
        console.log('res.data: ', res.data);
      })
      .catch((err) => {
        console.log(`compDidMount err:`, err)
      })
  }

  render(){
    let products = this.state.products
    return(
      <div>
        <div>
          <h1>EBID</h1>
          <h3>The jankiest ebay rip-off you'll ever see (probably)APP.JSX</h3>
        </div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search />
          </div>
        </nav>
        <div className="row main-container">
          <div className="col-md-7 product-viewer-container">
            <ProductViewer />
          </div>
          <div className="col-md-5 product-list-container">
            <ProductList products={this.state.products}/>
          </div>
        </div>
      </div>
    )
  }
}