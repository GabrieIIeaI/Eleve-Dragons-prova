import React from 'react';

export default function GlobalStyle() {
    return (
        <style global jsx>{`
        a {
          text-decoration: none;
        }
        body {
          font-family: sans-serif;
        }
        /* ================== */
        /* NextJS */
        /* ================== */
        html {
          height: 100%;
        }
        body,
        #__next {
          height: 100%;
        }
        #__next {
          display: flex;
          flex-direction: column;
        }
        #__next > * {
          flex: 1;
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
        }
      `}</style>
    )
}