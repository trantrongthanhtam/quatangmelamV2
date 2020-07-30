import { createReducer,on } from "@ngrx/store";
import {ActionsUnion,ActionTypes} from '../actions/cart.actions';

export interface cartState {
	total:number,
	cartProducts:Array<{
		id:string,
		src:string,
		price:string,
		pricenumber:number,
		name:string,
		quantity:number
	}>
}
export const initialState:cartState  = {
    total: 0,
    cartProducts:[],
};

export default function cartReducer(state = initialState, action: ActionsUnion) {
	const {cartProducts } = state;
	let updatedCart  = [];
	let calculateTotal = 0;
	switch (action.type) {
		case ActionTypes.Add:

			const foundItem = cartProducts.find(
				item =>	item.id === action.payload[0]
			);
			if (foundItem) {
				// item has been added before
				updatedCart = cartProducts.map(item => {
					if (
						item.id === action.payload[0] 
					) {
						return {
							...item,
							quantity: item.quantity + 1
						};
					}
					return item;
				});
			} else {
				updatedCart = [
					...cartProducts,
					{
						id: action.payload[0],
						src: action.payload[3],
						price: action.payload[4],
                        pricenumber: +action.payload[5],
                        name: action.payload[2],
						quantity: 1
					}
				];
			}
			calculateTotal = updatedCart.reduce(
				(sum:number, item) => sum + item.quantity,
				0
			);
			return {
				...state,
				total: (calculateTotal =
					calculateTotal < 0 ? 0 : calculateTotal),
				cartProducts: updatedCart
			};

		case ActionTypes.Remove:

			updatedCart = cartProducts.filter(item => {
				return !(
					item.id === action.payload.id
				);
			});

			calculateTotal = updatedCart.reduce(
				(sum:number, item) => sum + item.quantity,
				0
			);
			return {
				...state,
				total: (calculateTotal =
					calculateTotal < 0 ? 0 : calculateTotal),
				cartProducts: updatedCart
            };
            
		case ActionTypes.UpQuantity:

			updatedCart = cartProducts.map(item => {
				if (
					item.id === action.payload.id
				) {
					return {
						...item,
						quantity: item.quantity + 1
					};
				}
				return item;
			});
			calculateTotal = updatedCart.reduce(
				(sum:number, item) => sum + item.quantity,
				0
			);
			return {
				...state,
				total: (calculateTotal =
					calculateTotal < 0 ? 0 : calculateTotal),
				cartProducts: updatedCart
			};
		case ActionTypes.DownQuantity:
			updatedCart = cartProducts.map(item => {
				if (
					item.id === action.payload.id &&
					item.quantity > 1
				) {
					return {
						...item,
						quantity: item.quantity - 1
					};
				}
				return item;
			});
			calculateTotal = updatedCart.reduce(
				(sum:number, item) => sum + item.quantity,
				0
			);
			return {
				...state,
				total: (calculateTotal =
					calculateTotal < 0 ? 0 : calculateTotal),
				cartProducts: updatedCart
			};
		default:
			return state;
	}
}