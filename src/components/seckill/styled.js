import styled from "styled-components";
export const Seckill = styled.div`
    height:100%;
    overflow:auto;
    .time_tabs{
        height:0.41rem;
        background: #30363c;
        display:flex;
        justify-content: space-between;
        align-items:center;
        position:relative;
        div{
            width:1.08rem;
            height:100%;
            line-height:0.2rem;
            text-align: center;
            color: #6b6b6b; 
            font-size:0.12rem;
        }
        div:nth-child(3){
            background:#ff464e;
            color:#fff;
        }
        span{
            content: "";
            position: absolute;
            bottom:-9px;
            left: 0;
            right: 0;
            z-index: 18;
            display: block;
            height: 0;
            width: 0;
            margin: auto;
            border-top: 10px solid #ff464e;
            border-left: 10px solid transparent;
            border-right: 10px solid transparent;
        }
    }
    .residue{
        font-size:0.14rem;
        height:0.4rem;
        text-align:center;
        line-height:0.4rem;
    }
    .outo{
        height:80%;
        overflow:auto;
    }
    .goods-list{
        margin-top: .1rem;
        .lists{
            padding:0.1rem 0;
            margin:0 0.13rem;
            height:1.20rem;
            border-bottom: 1px solid #e7e7e7;
            display:flex;
            .img_box{
                height:0.95rem;
                width:0.95rem;
                img{
                    height:100%;
                    width:100%;
                }
            }
            .img_box_info{
                width:2.56rem;
                padding-left:0.12rem;
                font-size:0.14rem;
                position:relative;
                .goods_price{
                    position:absolute;
                    bottom:0.16rem;
                    left:0.12rem;
                    color: #ff464e;
                    span:nth-child(3){
                        font-size:0.2rem;
                    }
                    span:nth-child(4){
                        margin-left:0.06rem;
                        font-size:0.12rem;
                        color: #bbb;
                        text-decoration: line-through;
                        font-style: normal;
                    }
                }
                .progress{
                    position:absolute;
                    bottom:0;
                    left:0.12rem;
                }
                .buy_btn{
                    height:0.3rem;
                    width:0.7rem;
                    position:absolute;
                    bottom:0;
                    right:0;
                    background: #ff464e;
                    color: #fff;
                    line-height: 0.3rem;
                    text-align:center;
                }
            }
        }
    }
    .fotter{
        width:100%;
        height:0.5rem;
        background:#fff;
        position:relative;
        bottom:0;
        left: 0;
        display:flex;
        justify-content: space-around;
        align-items:center;
        img{
            height:0.5rem;
            width:0.5rem;
        }
    }
`