import React, { useState } from 'react';
import Link from '../../components/Link';
import { addUser } from '../../store/actions/userAction'
import { useDispatch, useSelector  } from 'react-redux';
import { submitValidation } from '../../utils/validations';
import { CustomForm } from './formStyle';

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
    const [userCreated, setUserCreated] = useState(false);

    const dispatch = useDispatch()
    const { list  } = useSelector((state) => state.userList)

    return(
        <>
            
            <Link href={"/"}>Lista de usuários</Link>
            <CustomForm/>
            <form>
                <h1>Adicionar novo usuário</h1>
                <label>
                    <input placeholder='Nome' type={'text'} maxLength={20} value={name} onChange={(e) => setName(e.target.value)} />
                    <span style={{color: 'red'}}>{errorName}</span>
                </label>
                <label>
                    <input placeholder='Email' type={'text'} value={email} onChange={(e) => setEmail(e.target.value)} />
                    <span style={{color: 'red'}}>{errorEmail}</span>
                </label>
                <section>
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
                </section>

                <button title='Adicionar' onClick={(event) => {
                    event.preventDefault();
                    const submitValid = submitValidation(name, email);
                    setErroName(submitValid.name.errorText);
                    setErrorEmail(submitValid.email.errorText);
                    setUserCreated(submitValid.isValid);

                    if(submitValid.isValid) {
                        dispatch(addUser(createMockDefaultValue(name, email, status, gender), list));
                        return;
                    }
                }}> 
                    Adicionar usuario
                </button>
                
                <span style={{color: '#04AA6D'}}>{userCreated ? "Usuario criado com sucesso" : " " }</span>
            </form>

           
        </>
    )
}

export default AddUserScreen;