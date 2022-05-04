import React, { useEffect, useState, button } from 'react';
import Link from '../../components/Link'
import { useDispatch, useSelector  } from 'react-redux';
import { getUser, addUser } from '../../store/actions/userAction'
import { useGlobalFilter, useTable } from 'react-table';

const FilteringTable = () => {

    const dispatch = useDispatch()
    const { list, loading  } = useSelector((state) => state.userList)
    
    useEffect(() => {
        console.log(list);
        if(list.length > 0) {
            return
        }
        dispatch(getUser())
    }, [useDispatch])

    return (
        <>
            <div>
                <h1>Lista de usuarios</h1>
                <Link href={"/add-u"}>
                    Adicionar novo usuario
                </Link>
            </div>
            <table>
                <tr>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Gênero</th>
                    <th>Status</th>
                </tr>
                {list.map(({ id, name, email, gender, status }) => 
                <tr key={id}>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td>{gender}</td>
                    <td>{status}</td>
                </tr>
                )}
            </table>
        </>
    )
}

export default FilteringTable