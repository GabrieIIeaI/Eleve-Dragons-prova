import React, { useState } from 'react';
import Link from '../../components/Link'
import { addUser } from '../../store/actions/userAction'
import { useDispatch, useSelector  } from 'react-redux';
import Header from '../../components/Header';
import { submitValidation } from '../../utils/validations';

const createMockDefaultValue = (name, email, status, gender) => {
    return {  
        name,
        email,
        status,
        gender,
        'id': '_' + Math.random().toString(36).substr(2, 9),
    }
}

const AddUserScreen = () => {
    const [name, setName] = useState("");
    const [errorName, setErroName] = useState("");
    const [email, setEmail] = useState("");
    const [errorEmail, setErrorEmail] = useState("");
    const [status, setStatus] = useState("active");
    const [gender, setGender] = useState("Male");

    const dispatch = useDispatch()
    const { list  } = useSelector((state) => state.userList)

    return(
        <>
            <Header path={"/"} pathName="Lista de usuários">
                Adicionar novo usuário
            </Header>
            
            
            <form>
                <label>
                    Nome:
                    <input type={'text'} maxLength={20} value={name} onChange={(e) => setName(e.target.value)} />
                    <span style={{color: 'red'}}>{errorName}</span>
                </label>
                <label>
                    Email:
                    <input type={'text'} value={email} onChange={(e) => setEmail(e.target.value)} />
                    <span style={{color: 'red'}}>{errorEmail}</span>
                </label>
                <label>
                    Sexo:
                    <select value={gender} onChange={(e) => setGender(e.target.value)}>
                        <option value={"Male"} >Male</option>
                        <option value={"Female"}>Female</option>
                    </select>
                </label>
                <label>
                    Status:
                    <select value={status} onChange={(e) => setStatus(e.target.value)}>
                        <option value={"active"} >Active</option>
                        <option value={"inactive"}>Inactive</option>
                    </select>
                </label>
            </form>

            <button title='Adicionar' onClick={() => {
                const submitValid = submitValidation(name, email);
                setErroName(submitValid.name.errorText);
                setErrorEmail(submitValid.email.errorText)

                if(submitValid.isValid) {
                    dispatch(addUser(createMockDefaultValue(name, email, status, gender), list));
                    return;
                }
            }}> 
                Adicionar usuario
            </button>
        </>
    )
}

export default AddUserScreen;