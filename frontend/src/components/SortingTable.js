import React, { useMemo } from 'react'
import { useTable, useSortBy, useGlobalFilter, useFilters} from 'react-table'
import MOCK_DATA from './MOCK_DATA.json'
import { COLUMNS } from './columns'
import './table.css'
import { Filter, SelectColumnFilter, NumberRangeColumnFilter} from './filters';
import { GlobalFilter } from './GlobalFilter'
import { Checkbox } from './Checkbox'
import { Input } from "reactstrap";


export const SortingTable = () => {

    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => MOCK_DATA, [])

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
        getToggleHideAllColumnsProps
    } = useTable({
        columns,
        data,
        selectColumn: { Filter: SelectColumnFilter },
    }, useGlobalFilter, useFilters,useSortBy)


    const generateSortingIndicator = column => {
        return column.isSorted ? (column.isSortedDesc ? " 🔽" : " 🔼") : ""
      }
    const { globalFilter } = state
    //<GlobalFilter filter={globalFilter} setFilter={setGlobalFilter}/>
    return (
        <>
        <div>
            {
                allColumns.map(column => (
                    <div key={column.id}>
                        <label>
                            <input type="checkbox" {...column.getToggleHiddenProps()}/>
                            {column.Header}
                        </label>
                    </div>
                ))
            }
        </div>
        <table {...getTableProps()}>
        <thead>
            {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>
                    <div {...column.getSortByToggleProps()}>
                    {column.render('Header')}
                    {generateSortingIndicator(column)}
                    </div>
                    <Filter column={column} />
                </th>
                ))}
            </tr>
        ))}
      </thead>
            <tbody {...getTableBodyProps()}>
                {
                    rows.map(row => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps}>
                                {
                                    row.cells.map((cell) => {
                                        return <td {...cell.getCellProps}>{cell.render('Cell')}</td>
                                    })
                                }
                            </tr>
                        )
                    })
                }
                
            </tbody>
            <tfoot>
                {
                    footerGroups.map(footerGroup => (
                        <tr {...footerGroup.getFooterGroupProps()}>
                            {
                                footerGroup.headers.map(column => (
                                    <td {...column.getFooterProps}>
                                        {
                                            column.render('Footer')
                                        }
                                    </td>
                                ))
                            }
                        </tr>
                    ))
                }
            </tfoot>
        </table>
        </>
    )
}
