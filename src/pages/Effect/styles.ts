import styled from "styled-components";

export const Container = styled.div`
    padding: 40px;
    border-radius: 20px;
    background-color: #808080;
    width: 450px;

    .time {
        margin: 30px 0;
        span {
            font-size: 30px;
        }
    }

    .containerButtons {
        width: 100%;
        display: flex;
        justify-content: space-around;
    }
`