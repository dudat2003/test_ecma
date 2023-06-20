import { render, router } from "./lib";
import ProductAdd from "./pages/ProductAdd";
import ProductEdit from "./pages/ProductEdit";
import ProductList from "./pages/ProductList";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

const app = document.querySelector("#app");
router.on("/products", () => render(ProductList, app));
router.on("/products/add", () => render(ProductAdd, app));
router.on("/products/edit/:id", ({ data }) => render(() => ProductEdit(data), app));
router.on("/signin", () => render(SignIn, app));
router.on("/signup", () => render(SignUp, app));
router.resolve();
