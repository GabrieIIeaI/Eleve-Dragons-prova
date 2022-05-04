import { NameFilter, StatusFilter } from "./columnFilter"

//Titulos das colunas da tabela do react-table
export const COLUMNS = [
    {
        Header: "name",
        accessor: "name",
        Filter: NameFilter
    },
    {
        Header: "email",
        accessor: "email",
    },
    {
        Header: "gender",
        accessor: "gender",
    },
    {
        Header: "status",
        accessor: "status",
        Filter: StatusFilter
    }
]