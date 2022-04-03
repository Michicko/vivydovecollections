import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import App from "./App";
import { PageProvider } from "./contexts/page_context";
import { ProductsProvider } from "./contexts/product_context";
import { FilterProvider } from "./contexts/filter_contex";
import { BlogsProvider } from "./contexts/blog_context";
import { UserProvider } from "./contexts/user_context";
import { OrdersProvider } from "./contexts/order_context";

ReactDOM.render(
	<UserProvider>
		<ProductsProvider>
			<PageProvider>
				<BlogsProvider>
					<FilterProvider>
						<OrdersProvider>
							<App />
						</OrdersProvider>
					</FilterProvider>
				</BlogsProvider>
			</PageProvider>
		</ProductsProvider>
	</UserProvider>,
	document.getElementById("root")
);
