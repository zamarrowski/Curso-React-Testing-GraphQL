import React from 'react'
import productsConstants from './products.constants'
import ProductsList from './ProductsList'
import { getPrice } from './helpers'

class ShopPage extends React.Component {

  state = {
    selectedProducts: [],
    discountCode: '',
    applyDiscount: false,
  }

  componentDidMount() {
    const selectedProducts = this.getProductsFormLocalStorage()
    this.setState({ selectedProducts })
  }

  addProduct = product => {
    const newProducts = [...this.state.selectedProducts, product]
    this.setProductsInLocalStorage(newProducts)
    this.setState({
      selectedProducts: newProducts
    })
  }

  removeProduct = product => {
    const newProducts = this.state.selectedProducts.filter(p => p.id !== product.id)
    this.setProductsInLocalStorage(newProducts)
    this.setState({
      selectedProducts: newProducts
    })
  }

  setProductsInLocalStorage = products => {
    localStorage.selectedProducts = JSON.stringify(products)
  }

  getProductsFormLocalStorage = () => {
    const selectProducts = localStorage.selectedProducts
    if (selectProducts) return JSON.parse(localStorage.selectedProducts)
    return []
  }

  handleChangeDiscountCode = e => {
    this.setState({
      discountCode: e.target.value
    })
  }

  validateDiscountCode = () => {
    if (this.state.discountCode === 'SAVE10') {
      this.setState({ applyDiscount: true })
    } else {
      this.setState({ applyDiscount: false })
    }
  }

  render() {
    return (
      <div className="shopContainer">
        <div>
          <h1>Products</h1>
          <ProductsList products={productsConstants} button={product => <button onClick={() => this.addProduct(product)}>Add product</button>} />
        </div>
        <div>
          <h1>Selected Products</h1>
          <ProductsList products={this.state.selectedProducts} button={product => <button onClick={() => this.removeProduct(product)}>Remove product</button>} />
          <input type="text" onChange={this.handleChangeDiscountCode}/>
          <button onClick={this.validateDiscountCode}>Validate discount code</button>
          {this.state.selectedProducts.length > 0 && <p>Total: {this.state.applyDiscount ? getPrice(this.state.selectedProducts) * 0.90 : getPrice(this.state.selectedProducts)}€</p>}
        </div>
      </div>
    )
  }

}

export default ShopPage