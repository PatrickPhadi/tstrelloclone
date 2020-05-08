export interface ICard {
  boardId: number;
  cardDesc: string;
  cardId: number;
  listId: number;
}

export interface IBoard {
  boardId: number;
  boardname: string;
  list: IList[];
}

export interface IList {
  boardId: number;
  card: ICard[];
  listId: number;
  listname: string;
}

export interface IPayload {
  list: IList[];
  boardId: number;
  listId: number;
  listname: string;
  cardDesc: string;
}

export interface IAction {
  type: string;
  payload: IPayload;
}

export interface IAppState {
  boards: {
    board: IBoard[];
  };
}
