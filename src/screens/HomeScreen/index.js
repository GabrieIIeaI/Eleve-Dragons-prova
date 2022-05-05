import React, { useEffect } from 'react';
import { useDispatch, useSelector  } from 'react-redux';
import { getUser } from '../../store/actions/userAction';
import { UsersTable } from '../../components/Table';
import { HomeStyle } from './homeStyle';
import Link from '../../components/Link';

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
            <HomeStyle />
            <Link href={"/add-u"}>Adicionar novo usuário</Link>
            { list.length > 0 ? <UsersTable _data={list} /> : <></>}
        </>
    )
}

export default HomeScreen