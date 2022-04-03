import Portal from "./Portal";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "./hooks/ScrollToTop";
import Home from "./pages/Home/Home";
import Error from "./pages/Error/Error";
import Blog from "./pages/Blog/Blog";
import Contact from "./pages/Contact/Contact";
import Shop from "./pages/Shop/Shop";
import SingleProduct from "./pages/Shop/SingleProduct";
import Profile from "./pages/Account/Profile";
import UserOrders from "./pages/Account/UserOrders";
import Dashboard from "./pages/Admin/Dashboard/Dashboard";
import Orders from "./pages/Admin/Orders/Orders";
import Products from "./pages/Admin/Product/Products";
import Customers from "./pages/Admin/Customers/Customers";
import Blogs from "./pages/Admin/Blogs/Blogs";
import CreateProduct from "./pages/Admin/Product/CreateProduct";
import CreateProductOption from "./pages/Admin/Product/CreateProductOption";
import EditProduct from "./pages/Admin/Product/EditProduct";
import ProductOptions from "./pages/Admin/Product/ProductOptions";
import EditProductOption from "./pages/Admin/Product/EditProductOption";
import Cart from "./pages/Cart/Cart";

function App() {
	// const {
	// alert: { type, message },
	// } = usePageContext();

	return (
		<>
			{/* for displaying alerts and errors */}
			<Portal>{/* <p className={type}>{message}</p> */}</Portal>

			<Router>
				<ScrollToTop>
					<Switch>
						<Route exact path='/'>
							<Home />
						</Route>
						<Route exact path='/blog'>
							<Blog />
						</Route>
						<Route exact path='/contact'>
							<Contact />
						</Route>
						<Route exact path='/shop'>
							<Shop />
						</Route>
						<Route exact path='/products/:slug'>
							<SingleProduct />
						</Route>

						{/* Private routes */}
						{/* User Routes */}
						<Route exact path='/profile'>
							<Profile />
						</Route>
						<Route exact path='/user-orders'>
							<UserOrders />
						</Route>
						<Route exact path='/cart'>
							<Cart />
						</Route>

						{/* Admin Routes */}
						<Route exact path='/dashboard'>
							<Dashboard />
						</Route>
						<Route exact path='/orders'>
							<Orders />
						</Route>
						<Route exact path='/products'>
							<Products />
						</Route>
						<Route exact path='/create-product'>
							<CreateProduct />
						</Route>
						<Route exact path='/products/:slug/create-product-option'>
							<CreateProductOption />
						</Route>
						<Route exact path='/products/:slug/product-options'>
							<ProductOptions />
						</Route>
						<Route exact path='/products/:slug/edit-product'>
							<EditProduct />
						</Route>
						<Route
							exact
							path='/products/:slug/productOptions/:id/edit-productOption'
						>
							<EditProductOption />
						</Route>
						<Route exact path='/customers'>
							<Customers />
						</Route>
						<Route exact path='/blogs'>
							<Blogs />
						</Route>

						{/* End of private routes */}

						<Route exact path='*'>
							<Error />
						</Route>
					</Switch>
				</ScrollToTop>
			</Router>
		</>
	);
}

export default App;
