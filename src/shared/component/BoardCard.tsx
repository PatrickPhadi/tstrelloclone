import React, { Component } from "react";
import { Card, CardBody, CardFooter, CardHeader, Input } from "reactstrap";
import { IList } from "../interfaces";

interface BoardCardProps {
  list: IList;
  addCard: Function;
  selectedboard: any
}

interface BoardCardState {
  cardScreen: boolean;
  cardDesc: string;
}

class BoardCard extends Component<BoardCardProps, BoardCardState> {
  public state: BoardCardState = {
    cardDesc: "",
    cardScreen: false,
  };

  public handleAddCard = () => {
    this.setState({
      cardScreen: !this.state.cardScreen,
    });

    if (this.state.cardDesc) {
      this.props.addCard({
        cardDesc: this.state.cardDesc,
        listId: this.props.list.listId,
        boardId: this.props.selectedboard.boardId,
      });

      this.setState({ cardDesc: "" });
    }
  };

  public render() {
    const { list } = this.props;
    return (
      <Card>
        <CardHeader className="noborder cardheader">
          <p className="subtitle">
            {list.listname.length > 30
              ? list.listname.substr(0, 30) + " ..."
              : list.listname}
          </p>
        </CardHeader>
        {list.card.map((data, key) => {
          return (
            <CardBody className="cardBody cardSpace" key={key}>
              <p>{data.cardDesc}</p>
            </CardBody>
          );
        })}

        {this.state.cardScreen ? (
          <div className="cardInput">
            <Input
              type="textarea"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                this.setState({ cardDesc: e.target.value });
              }}
              placeholder="e.g Card Description"
            />
          </div>
        ) : (
          <CardBody
            className="cardBody cardSpace"
            onClick={() => {
              this.setState({ cardScreen: !this.state.cardScreen });
            }}
          >
            <p className="placeHolderText">Add New Card</p>
          </CardBody>
        )}

        <CardFooter className="noborder cardfooter">
          <div className="btnAdd">
            <span onClick={this.handleAddCard}>add card</span>
          </div>
        </CardFooter>
      </Card>
    );
  }
}

export default BoardCard;
