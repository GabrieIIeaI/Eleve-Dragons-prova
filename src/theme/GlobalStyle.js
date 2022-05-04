import { theme } from './theme';

export default function GlobalStyle() {
    return (
        <style global jsx>{`
        * {
          box-sizing: border-box;
          padding: 0;
          margin: 0;
        }
        a {
          text-decoration: none;
        }
        body {
          font-family: ${theme.typography.fontFamily}, sans-serif;
        }
        img, video {
          max-width: 100%;
          height: auto;
        }
        audio, canvas, embed, iframe, img, object, svg, video {
          display: block;
          vertical-align: middle;
        }
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0,0,0,0);
          border: 0;
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