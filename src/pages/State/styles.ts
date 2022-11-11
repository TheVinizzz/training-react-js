import styled from "styled-components";

export const Container = styled.div`
    padding: 40px;
    border-radius: 20px;
    background-color: #808080;
    width: 450px;

    .inputContainer {
        width: 100%;
        display: flex;
        justify-content: space-between;

        input {
            padding: 10px 20px;
            color: #000;
        }
    }

    ul li {
        margin: 30px 0;
        
        span {
            cursor: pointer;
            color: #cc0000;
            font-weight: bold;
        }
    }
`