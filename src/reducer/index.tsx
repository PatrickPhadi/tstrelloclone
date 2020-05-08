import {
  ADD_BOARD,
  ADD_CARD,
  ADD_LIST,
  BoardActionTypes,
} from "../shared/types";
import { IBoard } from "../shared/interfaces";

const initialState: IBoard[] = [];

const boardReducer = (
  state = initialState,
  action: BoardActionTypes
): IBoard[] => {
  switch (action.type) {
    //Adding Board
    case ADD_BOARD:
      action.payload.boardId = state.length + 1;
      action.payload.list = [];
      state = [...state, action.payload];
      break;

    //Adding List
    case ADD_LIST:
      state = [
        ...state.slice(0, action.payload.boardId - 1),
        Object.assign(state[action.payload.boardId - 1], {
          ...state[action.payload.boardId - 1],
          list: [
            ...state[action.payload.boardId - 1].list,
            {
              listId: state[action.payload.boardId - 1].list.length + 1,
              listname: action.payload.listname,
              card: [],
            },
          ],
        }),
        ...state.slice(action.payload.boardId + 1),
      ];
      break;

    //Adding Card
    case ADD_CARD:
      state = [
        ...state.slice(0, action.payload.boardId - 1),
        Object.assign(state[action.payload.boardId - 1], {
          ...state[action.payload.boardId - 1],
          list: [
            ...state[action.payload.boardId - 1].list.slice(
              0,
              action.payload.listId - 1
            ),
            Object.assign(
              state[action.payload.boardId - 1].list[action.payload.listId - 1],
              {
                ...state[action.payload.boardId - 1].list[
                  action.payload.listId - 1
                ],
                card: [
                  ...state[action.payload.boardId - 1].list[
                    action.payload.listId - 1
                  ].card,
                  {
                    cardId:
                      state[action.payload.boardId - 1].list[
                        action.payload.listId - 1
                      ].card.length + 1,
                    cardDesc: action.payload.cardDesc,
                  },
                ],
              }
            ),
          ],
        }),
      ];
      break;
    default:
      break;
  }
  return state;
};

export { boardReducer };
