import { Dispatch } from "redux";
import { ADD_BOARD, ADD_CARD, ADD_LIST, AppActions } from "../shared/types";
import { IBoard, IList, ICard } from "../shared/interfaces";
import { AppState } from "../store/store";

export const _addBoard = (data: IBoard): AppActions => ({
  type: ADD_BOARD,
  payload: data,
});

export const _addList = (data: IList): AppActions => ({
  type: ADD_LIST,
  payload: data,
});

export const _addCard = (data: ICard): AppActions => ({
  type: ADD_CARD,
  payload: data,
});

export const addBoard = (data: IBoard) => {
  return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    dispatch(_addBoard(data));
  };
};

export const addList = (data: IList) => {
  return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    dispatch(_addList(data));
  };
};

export const addCard = (data: ICard) => {
  return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    dispatch(_addCard(data));
  };
};
