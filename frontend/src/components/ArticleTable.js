import React, { useEffect, useState, useMemo } from "react";
import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { SelectColumnFilter } from "./filters";
import { SortingTable } from "./SortingTable";
import { COLUMNS } from "./columns";
import MOCK_DATA from "./MOCK_DATA.json";

const ArticleTable = () => {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   const doFetch = async () => {
  //     const response = await fetch('https://randomuser.me/api/?results=100');
  //     const body = await response.json();
  //     setData(body.articles);
  //   };
  //   doFetch();
  // }, []);

  // useEffect(() => {
  //   const doFetch = async () => {
  //     const response = await fetch('http://localhost:3001/api/');
  //     const body = await response.json();
  //     const contacts = body.results;
  //     console.log(contacts);
  //     setData(contacts);
  //   };
  //   doFetch();
  // }, []);

  // useEffect(() => {
  //   const doFetch = async() => {

  //     const response = await fetch('https://randomuser.me/api/?results=100').then(res => {
  //       if(res.ok) {
  //         return res.json()
  //       }
  //     const retrieveddata = res.json()
  //     setData(retrieveddata)
  //   })
  //   }
  //   doFetch()
  // }, [])


  // useEffect(() => {
  //   const doFetch = async () => {
  //     const response = await fetch('https://randomuser.me/api/?results=100');
  //     const body = await response.json();
  //     const contacts = body.results;
  //     console.log(contacts);
  //     setData(contacts);
  //   };
  //   doFetch();
  // }, []);

  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

  return (
    <Container style={{ marginTop: 100 }}>
      <SortingTable columns={columns} data={data} />
    </Container>
  );
};

export default ArticleTable;
