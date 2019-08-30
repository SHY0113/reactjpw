import styled from "styled-components";
export const Seekd = styled.div`
    .search-block{
        font-size:0.12rem;
        padding-left:0.1rem;
        padding-right:0.4rem;
        height:0.378rem;
        color: #999;
        position:relative;
        .search-input{
            width:3.03rem;
            height:0.28rem;
            margin-top:0.1rem;
            padding-left:0.31rem;
            background-color: #f2f2f2;
            border-radius: .04rem;
            display:flex;
            justify-content: flex-start;
            position:relative;
            .search-icon{
                height:0.16rem;
                width:0.16rem;
                position:absolute;
                top:18%;
                color: inherit;
                border:0 none;
                background:none;
                left:0;
                i{
                    height:100%;
                    width:100%;
                }
            }
            input{
                display: block;
                height: 100%;
                width: 100%;
                letter-spacing: normal;
                word-spacing: normal;
                text-transform: none;
                text-indent: 0;
                text-shadow: none;
                text-align: start;
                border: none;
                outline-style: none;
                word-break: normal;
                background-color: transparent;
                font-size: inherit;
                color: inherit;
            }
        }
        .cancel{
            font-size:0.15rem;
            height:0.2rem;
            width:0.3rem;
            color: #333;
            position:absolute;
            top:16%;
            right:3%;
        }
    }
`