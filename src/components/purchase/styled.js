import styled from "styled-components"
export const Purchases = styled.div`
    height:100%;
    .tabHeaders{
        height:0.44rem;
        display:flex;
        justify-content:space-between;
        align-items:center;
        padding:0 0.12rem;
        border-bottom: 1px solid #dedede;
        img{
            height:0.24rem;
            width:0.24rem;
        }
        span{
            font-size:0.18rem;
        }
    }
    .ovfow{
        height:100%;
        overflow:auto;
    }
    .godos{
        padding-bottom:0.5rem;
        width:100%;
        display:flex;
        flex-wrap: wrap;
        justify-content: space-between;
        .gCgGoL{
            flex-shrink:0;
            height:2.43rem;
            width:49%;
            display:flex;
            flex-direction: column;
            margin-right:0.02rem;
            position:relative;
            img{
                height:1.87rem;
            }
            .godosName{
                position:absolute;
                bottom:0.4rem;
                right:0.1rem;
                border: 1px solid #ebebeb;
                border-width: 1px;
                background-color: #fff;
                img{
                    height:.29rem;
                    width:.58rem;
                }
            }
            .cEQZgN{
                height:0.22rem;
                padding:0 0.05rem;
                font-size:0.12rem;
                margin-top:0.06rem;
                span:nth-child(1){
                    color: #ff464e;
                }
                span:nth-child(2){
                    text-decoration: line-through;
                    color:#bbb;
                }
            }
            .dFUsnh{
                width:1.8rem;
                font-size:0.12rem;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                padding-left:0.08rem;
                padding-right:0.62rem;
            }
            .sewak{
                font-size:0.1rem;
                position:absolute;
                bottom:0.12rem;
                right:0;
                color: #bbb;
            }
        }
    }
`