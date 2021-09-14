import React from "react";
import { Container } from "react-bootstrap";
import JobCards from "./JobCards";

function SearchPage() {
  return (
    <div>
      <h1 className="mt-3">Jobs Search Engine</h1>
      <h3 className="mt-4">Search for a job:</h3>
      <Container className="d-flex">
        <JobCards></JobCards>
        <a style={{ color: "white" }} href=" https://remotive.io/api">
          Using Remotive API
        </a>
      </Container>
    </div>
  );
}

export default SearchPage;
