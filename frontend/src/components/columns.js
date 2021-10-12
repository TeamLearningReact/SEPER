//import { format } from 'date-fns'
//import { SortingTable } from "./SortingTable"
import React, { useMemo } from "react";
import { SelectColumnFilter, NumberRangeColumnFilter, YearRangeColumnFilter } from "./filters";

export const COLUMNS = [
  {
    Header: "Id",
    Footer: "Id",
    accessor: "id",
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
    accessor: "authors",
    disableFilters: true,
  },
  {
    Header: "Source",
    Footer: "Source",
    accessor: "source",
    disableFilters: true,
  },
  {
    Header: "Journal Name",
    Footer: "Journal Name",
    accessor: "journal",
    disableFilters: true,
  },
  {
    Header: "Volume",
    Footer: "Volume",
    accessor: "volume",
    disableFilters: true,
  },
  {
    Header: "Number",
    Footer: "Number",
    accessor: "number",
    disableFilters: true,
  },
  {
    Header: "Pages",
    Footer: "Pages",
    accessor: "pages",
    disableFilters: true,
  },
  {
    Header: "Pub.",
    Footer: "Pub",
    accessor: "pub",
    Filter: YearRangeColumnFilter,
    //Filter: NumberRangeColumnFilter,
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
