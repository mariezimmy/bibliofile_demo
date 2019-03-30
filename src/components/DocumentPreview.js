import React, { Component } from "react";
import "./DocumentPreview.css";
import Card from "react-bootstrap/Card";

class DocumentPreview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: null,
      author: null,
      date: null,
      url: null,
      image: null,
      onScreen: true,
      metadata: null
    };
  }
  render() {
    return (
      <Card style={{ width: "16rem" }} className="Zoom">
        <Card.Title className="Title">
          {this.props.title}
          <Card.Subtitle className="mb-2 Subtitle">
            {this.props.author}
          </Card.Subtitle>
        </Card.Title>
        <Card.Img variant="top" src="bibliofile.png" />
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}
export default DocumentPreview;
