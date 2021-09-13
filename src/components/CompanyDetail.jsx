import React from "react";
import { Card, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

function CompanyDetail() {
  const [jobsArray, setJobsArray] = useState([]);
  const { company_name } = useParams();

  const getArray = async () => {
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
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getArray();
  }, []);

  return (
    <div>
      <h1 className="mt-3">Jobs Search Engine</h1>
      <h3 className="mt-4">Company Details:</h3>
      <Card className="mx-auto" style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CompanyDetail;
