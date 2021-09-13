import React from "react";
import { Card, Col, Spinner } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

function CompanyDetail() {
  const [jobsArray, setJobsArray] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const { company_name } = useParams();

  const getArray = async () => {
    setisLoading(true);
    var myHeaders = new Headers();
    myHeaders.append(
      "Cookie",
      "frontend_lang=en_US; session_id=5d75b75446e5c72d6c95de28083b7079c90f8248"
    );

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    try {
      let response = await fetch(
        `https://remotive.io/api/remote-jobs?company_name=${company_name}`,
        requestOptions
      );
      let companyresponse = await response.json();
      setJobsArray(companyresponse.jobs);
      console.log(companyresponse.jobs);
      setisLoading(false);
    } catch (error) {
      console.log(error);
      setisLoading(false);
    }
  };

  useEffect(() => {
    getArray();
  }, []);

  return (
    <div>
      <h1 className="mt-3">Jobs Search Engine</h1>
      <h3 className="mt-4">Company Details:</h3>
      {(isLoading = true) ? (
        <Spinner animation="border" role="status"></Spinner>
      ) : (
        jobsArray.map((b) => (
          <Col xs={3} key={b.id}>
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
                  <p className="mb-2">{b.title}</p>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))
      )}
    </div>
  );
}

export default CompanyDetail;
