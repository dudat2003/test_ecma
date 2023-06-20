import axios from "axios";
import { useEffect, useState } from "../lib";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:3000/products`).then(({ data }) => {
      setProducts(data);
    });
  }, []);
  useEffect(() => {
    const btnDelete = document.querySelectorAll(".btn-danger");
    for (const btn of btnDelete) {
      const id = btn.dataset.id;
      btn.addEventListener("click", () => {
        const tb = window.confirm("Delete this product?");
        if (tb) {
          axios.delete(`http://localhost:3000/products/${id}`).then(() => {
            alert("Delete Complete");
            setProducts(products.filter((pro) => pro.id != id));
          });
        }
      });
    }
  });
  return /*html*/ `
    <div class="container">
    <h1>Product List</h1>
    <a href="/products/add"><button class="btn btn-primary">Add</button></a>
    <a href="/signin"><button class="btn btn-primary">Sign In</button></a>
    <a href="/signup"><button class="btn btn-primary">Sign Up</button></a>
    <br>
    <br>

    <table class="table table-striped table-hover">
        <thead>
            <tr>
                <td>ID</td>
                <td>Name</td>
                <td>Price</td>
                <td>Image</td>
                <td>Action</td>
            </tr>
        </thead>
        <tbody>
           ${products.map((product, index) => {
    return /*html */ ` 
            <tr>
               <td>${index + 1}</td>
               <td>${product.name}</td>
               <td>${product.price}</td>
               <td>
                   <img src="${product.image}" alt="image" width="150px">
               </td>
               <td>
                   <button class="btn btn-danger" data-id="${product.id}">Delete</button>
                   <a href="/products/edit/${product.id}"><button class="btn btn-primary">Edit</button></a>
               </td>
           </tr>`;
  })
      .join("")}
        </tbody>
    </table>
</div>`;
};

export default ProductList;
