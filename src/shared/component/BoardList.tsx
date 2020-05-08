import React, { Component } from "react";
import BoardCard from "./BoardCard";
import { Row, Col, Card, CardBody, Input } from "reactstrap";
import { IBoard } from "../interfaces";

interface IBoardListState {
  listScreen: boolean;
  listname: string;
}

interface IBoardListProps {
  selectedboard: any;
  addList: Function;
  board: Array<IBoard>;
  addCard: Function;
  screenHeight: string;
}

class BoardList extends Component<IBoardListProps, IBoardListState> {
  public state: IBoardListState = {
    listname: "",
    listScreen: false,
  };

  public handleAddList = () => {
    this.setState({
      listScreen: !this.state.listScreen,
    });

    if (this.state.listname) {
      this.props.addList({
        listname: this.state.listname,
        boardId: this.props.selectedboard.boardId,
      });
      this.setState({ listname: "" });
    }
  };

  render() {
    const { selectedboard, board, addCard } = this.props;
    return (
      <div>
        {selectedboard ? (
          <p className="boardHeading">{selectedboard.boardname}</p>
        ) : (
          ""
        )}

        <div className="list-container">
          {selectedboard ? (
            <Row
              className="list-content"
              style={{ minHeight: this.props.screenHeight }}
            >
              {board.map((data, key) => {
                if (data.boardId === selectedboard.boardId) {
                  return data.list.map((list, i) => {
                    return (
                      <Col md="3" key={i}>
                        <BoardCard
                          key={key}
                          list={list}
                          addCard={addCard}
                          selectedboard={selectedboard}
                        />
                      </Col>
                    );
                  });
                }
                return null;
              })}
              <Col md="3">
                <div>
                  <Card>
                    <CardBody>
                      {this.state.listScreen ? (
                        <Input
                          type="text"
                          onChange={(e) => {
                            this.setState({ listname: e.target.value });
                          }}
                          placeholder="e.g List Name"
                        />
                      ) : (
                        <CardBody
                          className="cardBody"
                          onClick={() => {
                            this.setState({
                              listScreen: !this.state.listScreen,
                            });
                          }}
                        >
                          <p className="placeHolderText">Add New List</p>
                        </CardBody>
                      )}
                      <div className="btnAdd">
                        <span onClick={this.handleAddList}>add list</span>
                      </div>
                    </CardBody>
                  </Card>
                </div>
              </Col>
            </Row>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

export default BoardList;
