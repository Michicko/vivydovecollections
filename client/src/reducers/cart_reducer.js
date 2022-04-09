import {
	ADD_TO_CART,
	REMOVE_FROM_CART,
	INCREASE_ITEM_AMOUNT,
	DECREASE_ITEM_AMOUNT,
} from "../Actions";

const CartReducer = (state, action) => {
	if (action.type === ADD_TO_CART) {
		const { product,amount, productOption } = action.payload;
		const { name, image, price } = product;
		const { _id, color, size, quantity } = productOption;

		const temp_cart_item = state.cart.find((item) => item._id === _id);

		if (temp_cart_item) {
			const tempCart = state.cart.map((cartItem) => {
				if (cartItem._id === _id) {
					let newAmount = cartItem.amount + amount;
					if (newAmount > cartItem.max) {
						newAmount = cartItem.max;
					}

					return { ...cartItem, amount: newAmount };
				} else {
					return cartItem;
				}
			});

			return { ...state, cart: tempCart };
		} else {
			const new_cart_item = {
				_id,
				name,
				image: image.url,
				color,
				footSize: size.footSize,
				heelHeight: size.heelHeight || null,
				price,
				amount,
				max: quantity,
			};

			return { ...state, cart: [...state.cart, new_cart_item] };
		}
	}

  if (action.type === REMOVE_FROM_CART) {
		const id = action.payload;
    const tempCart = state.cart.filter((item) => item._id !== id);
    return {...state, cart: tempCart}
  }

	if (action.type === INCREASE_ITEM_AMOUNT) {
		const id = action.payload;
		const tempCart = state.cart.map((item) => {
			if (item._id === id) {
				const { amount, max } = item;
				let tempAmount = amount + 1;
				if (tempAmount > max) {
					tempAmount = max;
				}

			return { ...item, amount: tempAmount };
			} else {
				return item;
			}
		})
		
		return { ...state, cart: tempCart };
	}
	
	if (action.type === DECREASE_ITEM_AMOUNT) {
		const id = action.payload;
		const tempCart = state.cart.map((item) => {
			if (item._id === id) {
				const { amount} = item;
				let tempAmount = amount - 1;
				if (tempAmount < 1) {
					tempAmount = 1;
				}

				return { ...item, amount: tempAmount };
			} else {
				return item;
			}
		});

		return { ...state, cart: tempCart };
	}

		return `No matching action ${action.type}`;
};

export default CartReducer;
