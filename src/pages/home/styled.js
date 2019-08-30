import styled from "styled-components"

export const Homes = styled.div`
        height:100%;
        overflow:auto;
        padding-bottom:0.49rem;
        .tabls{
        }
        *{
            margin:0;
            padding:0;
        }
        html,body{
            font-size:100px;
        }
        /*headers*/
        .headers{
            height:0.44rem;
            padding: 0 0.15rem;
            padding-right: 0;
            border-bottom: 1px solid #f2f2f2;
            box-sizing: border-box;
            background-color: #fff;
            overflow: hidden;
            display: flex;
            align-items: center;
            .seek{
                width:3.17rem;
                height:0.28rem;
                border-radius:.1rem;
                background-color: #f2f2f2;
                display: flex;
                align-items: center;
                i{
                    height:0.15rem;
                    width:0.15rem;
                    margin:0 0.05rem;
                }
                .did{
                    padding:0 0.05rem;
                    img{
                        height:0.15rem;
                        width:0.21rem;
                        display: block;
                    }
                }
                span{
                    font-size:0.12rem;
                    color:rgb(153, 153, 153);
                }
            }
            .jktfkc{
                height:0.44rem;
                width:0.44rem;
                img{
                    height:0.44rem;
                    width:0.44rem;
                    display: block;
                }
            }
        }
        /*lunbo*/
        .lunbo{  
            width:100%;
            height:1.51rem;
            img{
                display: block;
                width:100%;
                height:1.51rem;
            }
            .swiper-container {
                width:100%;
                height:1.51rem;
            }  
            .swiper-pagination-fraction,
             .swiper-pagination-custom,
              .swiper-container-horizontal > .swiper-pagination-bullets 
              {
                bottom: -16px;
                }
            .swiper-wrapper{
                width:100%;
                height:1.51rem;
                .swiper-slide{
                    height:100%;
                    width:100%;
                    img{
                        height:100%;
                        width:100%;
                    }
                }
            }
        }
        .irbamj{
            height:0.83rem;
            display: flex;
            justify-content: space-between;
            .purchase{
                width:100%;
                height:100%;
                img{
                    height:100%;
                    width:100%;
                    display: block;
                }
            }
            div:nth-child(1){
                background:#4cd96f;
            }
        }
        /*seckill*/
        .seckill{
            height:2.27rem;
            display: flex;
            justify-content: space-between;
            display: flex;
            .onseck {
                img{
                    height:100%;
                    width:100%;
                    display: block;
                }    
            }
            .clearance{
                display: flex;
                flex-direction: column;
                .clearanceName{
                    width:100%;
                    height:100%;
                    img{
                        height:100%;
                        width:100%;
                    }
                }
            }
        }
        .gipzik{
            height:1.04rem;
            width:100%;
            img{
                height:100%;
                width:100%;
            }
        }
        .eqwgtt{
            height:0.48rem;
            img{
                height:100%;
            }
        }
        .bQiGsQ{
            height:0.44rem;
            display:flex;
            ul{
                display:flex;
                font-size:0.16rem;
                li{
                        display:flex;
                        align-items: center;
                        // color: #ff464e; 
                        margin:0 0.1rem;
                    }
                }
                .qq{
                    border-bottom: 4px solid #ff464e;
                    color:#ff464e;
                }
            }
        }
        .godos{
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
                .kDoQxf{
                    font-size:0.1rem;
                    position:absolute;
                    bottom:0.12rem;
                    right:0;
                    color:#bbb;
                }
            }
        }
`