import React, { useEffect } from 'react';
import { useDispatch, useSelector  } from 'react-redux';
import { getUser } from '../../store/actions/userAction';
import { UsersTable } from '../../components/Table';
import Header from '../../components/Header';

const HomeScreen = () => {

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
            <Header path={'/add-u'} pathName={"Adicionar novo usuário"}>
                Tabela de usuários
            </Header>
            { list.length > 0 ? <UsersTable _data={list} /> : <></>}
        </>
    )
}

export default HomeScreen