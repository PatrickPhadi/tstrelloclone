import React, { Component } from "react";
import {
  ListGroup,
  ListGroupItem,
  Card,
  CardHeader,
  CardBody,
  Input,
} from "reactstrap";
import { IBoard } from "../interfaces";

interface IBoardsState {
  boardname: string;
  boardScreen: boolean;
  msg: string;
}

interface IBoardsProps {
  board: Array<IBoard>;
  screenHeight: string;
  addBoard: Function;
  getList: Function;
}

class Boards extends Component<IBoardsProps, IBoardsState> {
  public state: IBoardsState = {
    msg: "",
    boardname: "",
    boardScreen: false,
  };

  public handleSubmit = () => {
    let { boardname, boardScreen } = this.state;

    if(boardname) {
      this.props.addBoard({ boardname })
    } else {
      this.setState({ msg: "provide board name" });
    }
    this.setState({ boardScreen: !boardScreen });
    this.setState({ boardname: "" });
  }

  public render() {
    const { board, screenHeight, getList } = this.props;

    return (
      <Card style={{ borderRadius: "0" }}>
        <CardHeader className="text-center boardbrand">Boards</CardHeader>
        <CardBody style={{ padding: "0.55rem" }}>
          <ListGroup
            flush={true}
            style={{ maxHeight: screenHeight, overflowY: "auto" }}
          >
            {board
              ? board.map((board, key) => {
                  return (
                    <ListGroupItem
                      tag="a"
                      href="#"
                      key={key}
                      onClick={() => {
                        getList({ boardId: board.boardId });
                      }}
                    >
                      {/* <Ionicon
                        icon="ios-list-box-outline"
                        className="customIcon"
                      /> */}
                      {board.boardname.length > 11
                        ? board.boardname.substr(0, 11) + " ..."
                        : board.boardname}
                    </ListGroupItem>
                  );
                })
              : "Something went wrong!!!"}
            {this.state.boardScreen ? (
              <div>
                <Card>
                  <CardBody>
                    <Input
                      type="text"
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        this.setState({ boardname: e.target.value });
                      }}
                      placeholder="e.g Board Name"
                    />
                    <span className="requiredmsg">{this.state.msg}</span>
                  </CardBody>
                </Card>
              </div>
            ) : (
              ""
            )}
          </ListGroup>
          <div className="btnAdd">
            <span
              onClick={this.handleSubmit}
            >
              {/* <Ionicon icon="ios-add" fontSize="30px" /> */}
              add board
            </span>
          </div>
        </CardBody>
      </Card>
    );
  }
}

export default Boards;
