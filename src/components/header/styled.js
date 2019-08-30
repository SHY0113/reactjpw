import styled from "styled-components"

export const HeaderWrapper = styled.div`
            width:100%;
            height:.44rem;
            background: url("https://jp.juancdn.com/jpwebapp_v1/images_v1/user/user_center_bg.png");
            background-position: bottom;
            background-repeat: no-repeat;
            background-size: 100% auto;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;    
            i{
                color: #fff;
                font-size: 16px;
                position: absolute;
                left: .2rem;
            }
            span{
                color: #fff;
                font-size: 18px;
            }
            p{
                font-size: 14px;
                color: #fff;
                position: absolute;
                right: .2rem;
            }

`