import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    :root {
        
    }


    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        
       
    }

    html{
        font-size: 62.5%;
        
  scroll-behavior: smooth;

    }

    body{
        font-family: 'Josefin Sans', sans-serif;
        font-size: 1.6rem;
        line-height: 1.5;
        text-rendering: optimizeSpeed;
    }
    a{
        text-decoration: none;
        :visited {
            color: none;
        }

        
        :active{
            color: none;
        }
    }


    button:hover{
        opacity: 0.9;
        cursor: pointer;
    }
    
    input{
      background-color: transparent;

    }
    input:focus{
        outline: none;

    }
    input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus, 
input:-webkit-autofill:active{
    transition: background-color 5000s ease-in-out 0s;
    -webkit-text-fill-color: #fff important;
}
`;

export default GlobalStyle;
