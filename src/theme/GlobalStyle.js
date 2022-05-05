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
      `}</style>
    )
}