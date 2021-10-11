import React, { useMemo, useEffect, useState } from "react";
import { useTable, useSortBy, useGlobalFilter, useFilters } from "react-table";
import MOCK_DATA from "./MOCK_DATA.json";
import { COLUMNS } from "./columns";
import "./table.css";
import { Filter, SelectColumnFilter, NumberRangeColumnFilter } from "./filters";
import { GlobalFilter } from "./GlobalFilter";
import { Checkbox } from "./Checkbox";
import { Input } from "reactstrap";

export const SortingTable = ({ columns, data }) => {
  
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   const doFetch = async () => {
  //     const response = await fetch("/");
  //     const body = await response.json();
  //     const contacts = body.results;
  //     console.log(contacts);
  //     setData(contacts);
  //   };
  //   doFetch();
  // }, []);

  //const columns = useMemo(() => COLUMNS, []);
  //const data = useMemo(() => MOCK_DATA, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
    allColumns,
    getToggleHideAllColumnsProps,
    setFilter,
  } = useTable(
    {
      columns,
      data,
      selectColumn: { Filter: SelectColumnFilter },
      initialState: { hiddenColumns: ["practice", "id"] },
    },
    useGlobalFilter,
    useFilters,
    useSortBy
  );

  const generateSortingIndicator = (column) => {
    return column.isSorted ? (column.isSortedDesc ? " 🔽" : " 🔼") : "";
  };
  const { globalFilter } = state;

  //<GlobalFilter filter={globalFilter} setFilter={setGlobalFilter}/>
  return (
    <>
      <div>
        {allColumns.map((column) => (
          <div key={column.id} style={{display: "inline-flex", flexDirection: "row", margin:5}}>
            <Filter column={column} />
          </div>
        ))}
      </div>
      <div>
        {allColumns.map((column) => (
          <div
            id="checkboxes"
            style={{
              display: "inline-flex",
              flexDirection: "row",
              padding: 15,
            }}
            key={column.id}
          >
            <label>
              <input type="checkbox" {...column.getToggleHiddenProps()} />
              <span>    {column.Header}</span>
            </label>
            {/*<Filter column={column} />*/}
          </div>
        ))}
      </div>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>
                  <div {...column.getSortByToggleProps()}>
                    {column.render("Header")}
                    {generateSortingIndicator(column)}
                  </div>
                  {/*<Filter column={column} />*/}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
