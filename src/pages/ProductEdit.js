import axios from "axios";
import { router, useEffect, useState } from "../lib";

const ProductEdit = ({ id }) => {
  const [product, setProduct] = useState({});
  useEffect(() => {
    axios.get(`http://localhost:3000/products/${id}`).then(({ data }) => {
      setProduct(data);
    });
  }, []); l
  useEffect(() => {
    document.querySelector("#update-form").addEventListener("submit", (e) => {
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
      } else {
        axios.post(`http://localhost:3000/products/`, product).then(() => {
          alert("Update Product Complete!");
          router.navigate("/products");
        });
      }
    });
  });


  return /*html*/ ` 
  <div class="container">
  <h1>Product Edit</h1>
  <form action="" id="update-form">
      <div class="mb-3 "><input class="form-control" type="text" placeholder="Name" value="${product.name}" id="name"></div>
      <div class="mb-3 "><input class="form-control" type="text" placeholder="Price" value="${product.price}" id="price"></div>
      <div class="mb-3 "><input class="form-control" type="text" placeholder="Image" value="${product.image}" id="image"></div>
      <button class="btn btn-danger" type="submit">Submit</button>
  </form>
</div>`;
};

export default ProductEdit;
