import { IBoard, ICard, IList } from "../interfaces";

//action strings
export const ADD_BOARD = "ADD_BOARD";
export const ADD_LIST = "ADD_LIST";
export const ADD_CARD = "ADD_CARD";

export interface addBoardAction {
  type: typeof ADD_BOARD;
  payload: IBoard;
}

export interface addCardAction {
  type: typeof ADD_CARD;
  payload: ICard;
}

export interface addListAction {
  type: typeof ADD_LIST;
  payload: IList;
}

// Aggregate all board action types
export type BoardActionTypes = addBoardAction | addCardAction | addListAction;

// aggregate all action types through out application
export type AppActions = BoardActionTypes;
