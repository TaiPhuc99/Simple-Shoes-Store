import React, { Component } from "react";
import ProductList from "./ProductList";
import DetailModal from "./DetailModal";
import { dataList } from "./DataList";
import CartModal from "./CartModal";
import ModalMessage from "./ModalMessage";

export default class ShoesStore extends Component {
  state = {
    dataList: dataList,
    productDetail: dataList[0],
    cart: [],
  };

  // Setstate Change Product
  changeProduct = (item) => {
    this.setState({ productDetail: item });
  };

  // Add Product to Cart
  addProduct = (item) => {
    let cartClone = [...this.state.cart];

    // Check ID Product
    const index = this.state.cart.findIndex((product) => {
      return product.id === item.id;
    });

    if (index === -1) {
      const itemProduct = { ...item, oderQuantity: 1 };
      cartClone.push(itemProduct);
    } else {
      cartClone[index].oderQuantity++;
    }

    this.setState({ cart: cartClone }, () => {
      console.log(this.state.cart);
    });
  };

  // Change Order Quantity
  ChangeOrderQuantity = (idProduct, value) => {
    let cartClone = [...this.state.cart];

    // Check ID Product
    const index = this.state.cart.findIndex((product) => {
      return product.id === idProduct;
    });

    if (index !== -1) {
      cartClone[index].oderQuantity += value;
      cartClone[index].oderQuantity === 0 && cartClone.splice(index, 1);
    }

    this.setState({ cart: cartClone });
  };

  // Contain all data --> render layout
  render() {
    return (
      <div className="container py-5">
        <h1 className="mb-5 text-center text-bold">Shoes Shop</h1>
        <CartModal
          cart={this.state.cart}
          ChangeOrderQuantity={this.ChangeOrderQuantity}
        />
        <ProductList
          dataArr={this.state.dataList}
          changeProduct={this.changeProduct}
        />
        <DetailModal
          content={this.state.productDetail}
          addProduct={this.addProduct}
        />
        <ModalMessage />
      </div>
    );
  }
}
