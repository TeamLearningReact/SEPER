//import { format } from 'date-fns'
//import { SortingTable } from "./SortingTable"
import React, { useMemo } from "react";
import { SelectColumnFilter, NumberRangeColumnFilter } from "./filters";

export const COLUMNS = [
  {
    Header: "Id",
    Footer: "Id",
    accessor: "_id",
    disableFilters: true,
  },
  {
    Header: "Title",
    Footer: "Title",
    accessor: "title",
    disableFilters: true,
  },
  {
    Header: "Authors",
    Footer: "Authors",
    accessor: "gender",
    disableFilters: true,
  },
  {
    Header: "Source",
    Footer: "Source",
    accessor: "source",
    disableFilters: true,
  },
  {
    Header: "Pub.",
    Footer: "Pub",
    accessor: "pub",
    Filter: NumberRangeColumnFilter,
    filter: "between",
  },
  {
    Header: "DOI",
    Footer: "DOI",
    accessor: "doi",
    disableFilters: true,
  },
  {
    Header: "Claim",
    Footer: "Claim",
    accessor: "claim",
    disableFilters: true,
  },
  {
    Header: "Evidence Level",
    Footer: "Evidence_Level",
    accessor: "evidence_level",
    disableFilters: true,
  },
  {
    Header: "Practice",
    Footer: "Practice",
    accessor: "practice",
    Filter: SelectColumnFilter,
    filter: "equals",
    isVisible: false,
  },
];
