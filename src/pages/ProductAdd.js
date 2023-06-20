import axios from "axios";
import { router, useEffect, useState } from "../lib";

const ProductAdd = () => {
  useEffect(() => {
    document.querySelector("#add-form").addEventListener("submit", (e) => {
      e.preventDefault();
      const product = {
        name: document.querySelector("#name").value,
        price: document.querySelector("#price").value,
        image: document.querySelector("#image").value,
      };

      //validate
      if (product.name == "") {
        alert("Name cannot be empty");
      }
      else if (product.price == "") {
        alert("Price cannot be empty");
      } else if (isNaN(product.price)) {
        alert('Price must be a number');
      } else if (product.price <= 0) {
        alert("Price must be greater than 0 ");
      }
      else if (product.image == "") {
        alert("Image cannot be empty");
      }


      else {
        axios.post(`http://localhost:3000/products/`, product).then(() => {
          alert("Add Product Complete!");
          router.navigate("/products");
        });
      }
    });
  });
  return /*html*/ ` 
  <div class="container">
        <h1>Product Add</h1>
        <form action="" id="add-form">
            <div class="mb-3"><input type="text" placeholder="Name" name="" id="name" class="form-control"></div>
            <div class="mb-3"><input type="text" placeholder="Price" name="" id="price" class="form-control"></div>
            <div class="mb-3"><input type="text" placeholder="Image" name="" id="image" class="form-control"></div>
            <button class="btn btn-danger" type="submit">Submit</button>
        </form>
    </div>`;
};

export default ProductAdd;
