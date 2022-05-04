import React, { useMemo } from 'react';
import { useTable, useGlobalFilter, useFilters } from 'react-table';
import { COLUMNS } from './columns';
import { FixFilter } from '../../utils/genericUtils';


//Gerar os filtros apenas para alguns campos
const RenderFilters = (column) => {
    if(column.Header == "status" || column.Header == "name")
        return column.render('Filter');
} 


export const UsersTable = (_data) => {

    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => FixFilter(_data), [])

    const { 
        getTableBodyProps, 
        getTableProps, 
        headerGroups, 
        rows, 
        prepareRow,
        state,
        setGlobalFilter
    } = useTable({ 
        columns,
        data
    }, useFilters, useGlobalFilter)
    
    const { globalFilter } = state;

    return (
        <>
        <table {...getTableProps()} >
            <thead>
                {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                            <th {...column.getHeaderProps()}>{column.render('Header')}
                                {RenderFilters(column)}
                                
                            </th>
                           ))}
                    </tr>
                ))}

            </thead>

            <tbody {...getTableBodyProps()}>
                {rows.map((row) => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                            })}
                        </tr>
                    )
                })}
            </tbody>

        </table>
        </>
    )
}