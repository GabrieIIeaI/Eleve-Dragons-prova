import React from 'react';

export const CustomForm = () => {
    return (
        <style jsx>
            {`
                div {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    align-items: stretch;
                }
                form {
                    display: flex;
                    flex-direction: column;
                    width: 30%;
                    align-items: center;
                    align-self: center;
                    background-color: white;
                    border-radius: 20px;
                    border: none;
                    padding: 0px 0px 20px 0px;
                    box-shadow: 0px 10px 8px #888888;
                }
                h1 {
                    width: 100%;
                    text-align: center;
                    background-color: #04AA6D;
                    margin-top: 0;
                    padding: 10px 0px 0px 0px;
                    color: white;
                    border-radius: 20px 20px 0px 0px;
                }
                label {
                    display: flex;
                    flex-direction: column;
                    margin-top: 10px;
                    width: 90%;
                    align-items: center;
                    color: #04AA6D;
                    font-family: Arial;
                    font-weight: bold;
                }
                input {
                    width: 99%;
                    height: 20px;
                    border-radius: 20px;
                    padding: 10px;
                    border-style: solid;
                    border-color: #04AA6D;
                    border-width: 1px;
                }
                section {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    width: 100%;
                }
                select {
                    width: 90%;
                    height: 40px;
                    padding: 5px;
                    border-style: solid;
                    border-color: #04AA6D;
                    border-radius: 20px;
                }
                button {
                    margin-top: 30px;
                    width: 50%;
                    height: 40px;
                    border-style: none;
                    border-radius: 30px;
                    background-color: #04AA6D;
                    color: white;
                    font-family: Arial;
                    font-size: 16px;
                }
            `}
        </style>
    )
}