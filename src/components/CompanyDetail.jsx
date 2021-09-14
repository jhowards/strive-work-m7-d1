import React from "react";
import { Card, Col, Spinner, Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

function CompanyDetail() {
  const [jobsArray, setJobsArray] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [isCompanyLogo, setisCompanyLogo] = useState(false);
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
        `https://strive-jobs-api.herokuapp.com/jobs?company=${company_name}`,
        requestOptions
      );
      let companyresponse = await response.json();
      setJobsArray(companyresponse.data);
      console.log(jobsArray);
      setisLoading(false);
    } catch (error) {
      console.log(error);
      setisLoading(false);
    }
  };

  useEffect(() => {
    getArray();
    // if (typeof jobsArray[0].company_logo_url !== "undefined") {
    //   setisCompanyLogo(true);
    // }
  }, []);

  return (
    <div>
      <h1 className="mt-3">Jobs Search Engine</h1>
      <h2 className="mt-4">{company_name}</h2>
      {isCompanyLogo ? <img src={jobsArray[0].company_logo_url} alt="" /> : ""}
      <h4 className="mt-5 mb-3">Jobs Available:</h4>
      {isLoading ? (
        <Spinner animation="border" role="status"></Spinner>
      ) : (
        <Container style={{ width: "35vw" }}>
          {jobsArray.map((b) => (
            <Col xs={12} key={b.id}>
              <Card
                className="m-2 jobCard"
                style={{
                  border: "3px solid black",
                }}
              >
                <Card.Body className="d-flex">
                  <Card.Title
                    className="m-auto"
                    style={{ color: "black", fontSize: "16px" }}
                  >
                    <h5 className="mb-0">{b.title}</h5>
                    <small className="mb-2 mt-0">{b.category}</small>
                    <p className="mt-2">{b.candidate_required_location}</p>
                    <p className="mt-2 mb-0">
                      Published: {b.publication_date.substring(0, 10)}
                    </p>
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Container>
      )}
    </div>
  );
}

export default CompanyDetail;
