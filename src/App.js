import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import DocumentPreview from "./components/DocumentPreview";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

class App extends Component {
  setDocumentPreviewState(title, author) {
    return <DocumentPreview title={title} author={author} />;
  }
  render() {
    return (
      <div>
        <Header />
        <div className="App">
          <br />
          <Container className="App-documents">
            <Row>
              <Col>
                {this.setDocumentPreviewState(
                  "John Donne Letter0",
                  "John Donne0"
                )}
              </Col>

              <Col>
                {this.setDocumentPreviewState(
                  "John Donne Letter1",
                  "John Donne1"
                )}
              </Col>

              <Col>
                {this.setDocumentPreviewState(
                  "John Donne Letter2",
                  "John Donne2"
                )}
              </Col>
            </Row>
            <br />
            <br />
            <Row>
              <Col>
                {this.setDocumentPreviewState(
                  "John Donne Letter3",
                  "John Donne3"
                )}
              </Col>

              <Col>
                {this.setDocumentPreviewState(
                  "John Donne Letter4",
                  "John Donne4"
                )}
              </Col>

              <Col>
                {this.setDocumentPreviewState(
                  "John Donne Letter5",
                  "John Donne5"
                )}
              </Col>
            </Row>
          </Container>
          <header className="App-body" />
        </div>
      </div>
    );
  }
}

export default App;
