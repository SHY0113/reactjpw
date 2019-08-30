import styled from "styled-components"


export const RegisterWrapper = styled.div `
    height:100%;
    
    .regcon{
        height:100%;
        display:flex;
        flex-direction:column;
        margin:.4rem .2rem;
        input{
            height:.48rem;
            border:none;
            border-bottom:1px solid #ccc;
            font-size:16px;
        }
        .regBtn{
            margin-top:.4rem;
            display:block;
            border:none;
            height:.48rem;
            font-size:18px;
            font-weight:900;
            color:#fff;
            background: url(https://jp.juancdn.com/jpwebapp_v1/images_v1/user/user_center_bg.png);
            background-position: top;
            background-repeat: no-repeat;
            background-size: 100% auto;
        }
    }
    
`