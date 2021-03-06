import React, { useEffect, useState, useMemo } from "react";
import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { SelectColumnFilter } from "./filters";
import { SortingTable } from "./SortingTable";
import { COLUMNS } from "./columns";
import MOCK_DATA from "./MOCK_DATA.json";

const ArticleTable = () => {

  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

  return (
    <Container style={{ marginTop: 100 }}>
      <SortingTable columns={columns} data={data} />
    </Container>
  );
};

export default ArticleTable;
