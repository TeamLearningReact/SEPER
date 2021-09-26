//import { format } from 'date-fns'
//import { SortingTable } from "./SortingTable"
import React, { useMemo } from 'react'
import { SelectColumnFilter, NumberRangeColumnFilter } from './filters';


export const COLUMNS = [

    {
        Header: 'Id',
        Footer: 'Id',
        accessor: 'id',
        disableFilters: true
    },
    {
        Header: 'First Name',
        Footer: 'First Name',
        accessor: 'first_name',
        disableFilters: true
    },
    {
        Header: 'Last Name',
        Footer: 'Last Name',
        accessor: 'last_name',
        disableFilters: true
    },
    {
        Header: 'Email',
        Footer: 'Email',
        accessor: 'email',
        disableFilters: true
    },
    {
        Header: 'Gender',
        Footer: 'Gender',
        accessor: 'gender',
        Filter: SelectColumnFilter,
        filter: 'equals'
    },
    {
        Header: 'IPv4 Address',
        Footer: 'IPv4 Address',
        accessor: 'ip_address',
        Filter: NumberRangeColumnFilter,
        filter: 'between'
    }
    
]