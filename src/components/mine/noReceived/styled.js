import styled from "styled-components"

export const ReceivedWrapper = styled.div `
    height:100%;
    font-size:15px;
    ul{
        display:flex;
        flex-direction:column;
        overflow: auto;
        height: 100%;
        padding-bottom:1rem;
        li{
            position: relative;
            height: 1.28rem;
            padding: .12rem;

            display: flex;
          
            align-items: center;
            font-size: 15px;
            border-bottom: 1px solid #ccc;
            .orderImg{
                width: 1rem;
                height: 1rem;
                margin-right: .15rem;
                img{
                    width:100%;
                    height:100%;
                }
            }
            .orderR{
                position: relative;
                width: 2rem;
                .nowPrice{
                    font-size:18px;
                    color:#ccc;
                    margin-top:.1rem;
                }
                .goodsNum{
                    font-size: 18px;
                    right: 0;
                    top: .3rem;
                    position: absolute;
                }
                .finsh{
                    font-size:14px;
                    color:#c33;
                    margin-top:.1rem;
                }
            }
            .confirm{
                position: absolute;
                border:1px solid #ff434e;
                padding:.03rem;
                border-radius:.1rem;
                bottom:.1rem;
                right:.1rem;
                color:#ff434e;
                font-size:13px;
            }
        }
    }

`