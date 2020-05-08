import * as React from "react";
import { connect } from "react-redux";
import { IBoard, IList, ICard } from "./shared/interfaces";
import { Row, Col } from "reactstrap";
import Header from "./layout/Header";
import * as actions from "./action";
import Boards from "./shared/component/Boards";
import BoardList from "./shared/component/BoardList";
import { bindActionCreators } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { AppState } from "./store/store";
import { AppActions } from "./shared/types";

interface IAppDispatchProps {
  addBoard: (data: IBoard) => void;
  addList: (data: IList) => void;
  addCard: (data: ICard) => void;
}

interface IAppStateProps {
  board: IBoard[];
}

interface IState {
  selectedboard: any;
}

type Props = IAppDispatchProps & IAppStateProps;

class App extends React.Component<Props, IState> {
  public state: IState = {
    selectedboard: {},
  };

  public getList = (data: IBoard): void => {
    const { board } = this.props;
    const boardList = board.find((x) => x.boardId === data.boardId);
    this.setState({ selectedboard: boardList });
  };

  public render(): JSX.Element {
    const screenHeight = window.innerHeight * 0.8 + "px";
    const { addBoard, addCard, addList, board } = this.props;

    return (
      <div className="content">
        <Row noGutters={true}>
          <Col md="2">
            <Boards
              board={board}
              addBoard={addBoard}
              getList={this.getList}
              screenHeight={screenHeight}
            />
          </Col>
          <Col md="10">
            <Header />
            <BoardList
              board={board}
              {...this.props}
              addCard={addCard}
              addList={addList}
              selectedboard={this.state.selectedboard}
              screenHeight={screenHeight}
            />
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state: AppState): IAppStateProps => ({
  board: state.boards,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActions>
): IAppDispatchProps => ({
  ...bindActionCreators(
    {
      ...actions,
    },
    dispatch
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
