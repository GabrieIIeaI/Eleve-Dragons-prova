import React from 'react';

export const HomeStyle = () => {
    return (
        <style jsx>
            {`
                div {
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    align-items: stretch;
                }
                td,  th {
                    border: 1px solid #ddd;
                    padding: 8px;
                }
                
                tr:nth-child(even){background-color: #f2f2f2;}
                
                tr:hover {background-color: #ddd;}
                
                th {
                    padding-top: 12px;
                    padding-bottom: 12px;
                    text-align: center;
                    background-color: #04AA6D;
                    color: white;
            `}
        </style>
    )
}