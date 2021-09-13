import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

class SingleJob extends React.Component {
  render() {
    return (
      <>
        <Card
          className="m-2 jobCard"
          style={{
            height: "125px",
            border: "3px solid black",
          }}
        >
          <Card.Body className="d-flex">
            <Card.Title
              className="m-auto"
              style={{ color: "black", fontSize: "16px" }}
            >
              <p className="mb-2">{this.props.job.title}</p>
              <Link to={"company-detail/" + this.props.job.company_name}>
                <small style={{ fontSize: "15px" }} className="mt-0">
                  {this.props.job.company_name}
                </small>
              </Link>
            </Card.Title>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default SingleJob;
