import React from 'react'

//Filtro da lista por nome
export const NameFilter = ({ column  }) => {

    const { filterValue, setFilter } = column;

    return (
        <>
            <span> 
                <input 
                    value={filterValue || ''} 
                    onChange={(e) => setFilter(e.target.value)} 
                />
            </span>
        </>
    )
}

//Filtro da por status
//A busca do filtro é feita por string então para diferenciar o active do inactive eu acrescentei um " " no final para poder buscar apenas os usuarios ativos
export const StatusFilter = ({ column  }) => {

    const { filterValue, setFilter } = column;
    return (
        <>
            <select
                value={filterValue}
                onChange={(e) => setFilter(e.target.value || undefined)}
            >
                <option value={'active'}>All</option>
                <option value={'active '}>active</option>
                <option value={'inactive'}>inactive</option>
            </select>
        </>
    )
}