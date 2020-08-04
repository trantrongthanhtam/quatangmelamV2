import { Action } from '@ngrx/store';
import {Product} from '../models/product.model';

export enum ActionTypes {
  Add = '[Product] Add to cart',
  Remove = '[Product] Remove from cart',
  UpQuantity = '[Product] Increase product quantity',
  DownQuantity = '[Product] Decrease product quantity',
  Reset ='[Product] Reset product quantity',
  LoadItems = '[Products] Load items from server',
  LoadSuccess = '[Products] Load success'
}

export class AddToCart implements Action {
  readonly type = ActionTypes.Add;

  constructor(public payload: Product) {}
}
export class UpQuantity implements Action {
  readonly type = ActionTypes.UpQuantity;

  constructor(public payload: Product) {}
}
export class DownQuantity implements Action {
  readonly type = ActionTypes.DownQuantity;

  constructor(public payload: Product) {}
}

export class GetItems implements Action {
  readonly type = ActionTypes.LoadItems;
}

export class RemoveFromCart implements Action {
  readonly type = ActionTypes.Remove;

  constructor(public payload: Product) {}
}

export class LoadItems implements Action {
  readonly type = ActionTypes.LoadSuccess;

  constructor(public payload: Product[]) {}
}
export class ResetCart implements Action {
  readonly type = ActionTypes.Reset;
}

export type ActionsUnion = AddToCart | RemoveFromCart | LoadItems | GetItems|UpQuantity|DownQuantity|ResetCart; 