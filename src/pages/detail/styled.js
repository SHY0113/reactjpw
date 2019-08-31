import styled from "styled-components";
export const Selection = styled.div`
            .top{
                display: flex;
                height: 0.38rem;
                flex-direction: row;
                .topleft{
                    position: absolute;
                    top: -0.2rem;
                    left: 0.3rem;
                    img{
                        width:1rem;
                        height:1rem;
                    }
                }
                .topright{
                    margin-left: 1.5rem;
                    flex-grow: 1;
                    margin-top: 0.02rem;
                    .price{
                        color: #ff464e;
                        font-size: 0.15rem;
                        text-align: left;
                    }
                    .please{
                        color: #666;
                        font-size: 0.15rem;
                        text-align: left;
                    }
                    }
                }
            }
            .adddel{
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                margin-top: 0.2rem;
                margin-bottom: 0.2rem;
                span{
                    text-align: left;
                    color: #333;
                    font-size: 0.15rem;
                }
                .adnum{
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    .del{
                        width: 0.3rem;
                        height: 0.3rem;
                        line-height: 0.3rem;
                        background: #f7f7f7;
                        font-size: 0.15rem;
                        color: #ff464e;
                        text-align: center;
                    }
                    .num{
                        font-size: 0.15rem;
                        color: #333;
                        padding-left: 0.1rem;
                        padding-right: 0.1rem;
                    }
                    .add{
                        width: 0.3rem;
                        height: 0.3rem;
                        line-height: 0.3rem;
                        background: #f7f7f7;
                        font-size: 0.15rem;
                        color: #ff464e;
                        text-align: center;
                    }
                }
            }
            }
            .button{
                height: 0.48rem;
                line-height: 0.48rem;
                font-size: 0.2rem;
                color: #fff;
                text-align: center;
                background: #ff464e;  
            }
            .close{
                width:14px;
                height:14px;
                position:absolute;
                right:0;
                top:0;
            }
            max-height: 7rem;
            min-height: 1rem;
            width:100%;
            position:fixed;
            z-index:1;
            bottom:0;
            background:#fff;
            span{
                color: #333;
                font-size: 0.2rem;
                line-height: 0.15rem;
                text-align: left;
            }
            
            .large{
                display: flex;
                flex-wrap: wrap;
                flex-direction: row;
                justify-content: flex-start;
                div{
                    width: 1.2rem;
                    height: 0.34rem;
                    line-height: 0.34rem;
                    text-align: center;
                    font-size: 0.1rem;
                    margin-top: 0.01rem;
                    margin-bottom: 0.01rem;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    margin-left: 0.01rem;
                    margin-right: 0.01rem;
                    border: 1px solid #333;
                    color: #333;
                }
                
                .active{
                    color:red
                }

            }
            .larges{
                display: flex;
                flex-wrap: wrap;
                flex-direction: row;
                
                justify-content: flex-start;
                div{
                    width: 1.2rem;
                    height: 0.34rem;
                    line-height: 0.34rem;
                    text-align: center;
                    font-size: 0.1rem;
                    margin-top: 0.01rem;
                    margin-bottom: 0.01rem;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    margin-left: 0.01rem;
                    margin-right: 0.01rem;
                    border: 1px solid #333;
                    color: #333;
                   
            }
            .actives{
                color:red
            }
        
        }
    
`
export const Detailss = styled.div`
    
    background-color: rgb(244, 244, 248);
    .swiper-container{
        width: 3.75rem;
        height: 3.75rem;
    }  
    section{      
        div{          
            font-size: 0;
            background: #ffffff;
            .divc{
                margin-bottom: 0.1rem;
                margin-top: 0.1rem;
                margin-left:0.1rem;
                display: -webkit-box;
                display: -webkit-flex;
                display: -ms-flexbox;
                display: flex;
                -webkit-box-pack: justify;
                -webkit-justify-content: space-between;
                -ms-flex-pack: justify;
                justify-content: space-between;
                -webkit-align-items: flex-start;
                -webkit-box-align: flex-start;
                -ms-flex-align: flex-start;
                align-items: flex-start;
                p{
                    font-size: 0.19rem;
                    color: #333333;
                    -webkit-box-flex: 1;
                    -webkit-flex-grow: 1;
                    -ms-flex-positive: 1;
                    flex-grow: 1;
                }
            }
            .divp{
                display: -webkit-box;
                display: -webkit-flex;
                display: -ms-flexbox;
                display: flex;
                -webkit-align-items: center;
                -webkit-box-align: center;
                -ms-flex-align: center;
                align-items: center;
                -webkit-box-pack: justify;
                -webkit-justify-content: space-between;
                -ms-flex-pack: justify;
                justify-content: space-between;
                div{
                    margin-top:0.15rem;
                    margin-bottom:0.01rem;
                    display: -webkit-box;
                    display: -webkit-flex;
                    display: -ms-flexbox;
                    display: flex;
                    -webkit-align-items: center;
                    -webkit-box-align: center;
                    -ms-flex-align: center;
                    align-items: center;
                    .spans1{
                        margin-left:0.1rem;
                        .spans2{
                            font-size: 0.2rem;
                            line-height: 0.2rem;
                            color: #ff464e;                           
                            font-size:0.2rem;
                            .spans3{
                                font-size: 0.2rem;
                            }
                        }
                        del{
                            font-size: 0.1rem;
                            color: #bbbbbb;
                            margin-right: 0.4266666666666667rem;
                            text-decoration: line-through;
                        }
                    }
                }
                .spans4{
                    background-color: rgb(255, 70, 78);
                    border-color: rgb(255, 70, 78);
                    color: rgb(255, 255, 255);
                    font-size: 0.1rem;
                    line-height: 1;
                    padding: 0.042666666666666665rem 0.08533333333333333rem;
                    border: 1px solid;
                    margin-right: 0.3413333333333333rem;
                }
                }
                }
            }
        }
        span{
            font-size: 0.15rem;
            color: #999;
        }
    }
    .promise{
        height: 0.48rem;
        position: relative;
        padding: 0 0.01rem;
        p{
            font-size: 0.15rem;
            color: #666666;
            line-height: 0.48rem;
            background:#fff;
            .same{
                margin-right: 0.01rem;
                position: relative;
                padding-left: 0.2rem;
            }
            .same::before{
                margin-left:0.1rem;
                content: '';
                position: absolute;
                top: 50%;
                -webkit-transform: translateY(-50%);
                -ms-transform: translateY(-50%);
                transform: translateY(-50%);
                left: 0;
                width: 0.05rem;
                height: 0.05rem;
                background: #ff464e;
                opacity: 0.5;
                border-radius: 50%;
            }
        }
    }
    .selects{
        margin-top: 0.1rem;
        background: #ffffff;
        div{
            height: .483rem;
            position: relative;
            padding: 0 0.1;
            p{
                font-size: 0.16rem;
                color: #333333;
                line-height: .483rem;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                margin-left:0.1rem;
            }
            img{
                position: absolute;
                right: 0.02rem;
                top: 50%;
                -webkit-transform: translateY(-50%);
                -ms-transform: translateY(-50%);
                transform: translateY(-50%);
                width: 0.24rem;
                height: 0.24rem;
            }
        }
    }
`
export const Bottombar = styled.div`
    width:100%;
    height:0.48rem;
    position:fixed;
    left:0;
    bottom:0;
    display:flex;
    .bar{
        width:0.72rem;
        text-align:center;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        position: relative;
        background: #fff;
        img{
            width:0.24rem;
            height:0.24rem;
        }
        span{
            color: #6b6b6b;
            font-size: 0.1rem;
        }
    }
    .carbar{
        border-left:1px solid #ccc;
        border-right:1px solid #ccc;
    }
    .buybar{
        width:2.2113rem;
        display:flex;
        flex:1 1 auto;
        align-items: stretch;
        justify-content: center;
        .buynow{           
            align-items: stretch;
            justify-content: center;
            color: #333333;
            display: flex;
            flex-direction: column;  
            flex: 1 1 0.01rem;         
            p{
                font-size: 0.12rem;
                text-align:center;
            }
        }
        .addcar{
            flex: 1 1 auto;
            background: #ff464e;
            display: flex;
            color: #ffffff;
            align-items: stretch;
            justify-content: center;
            flex-direction: column;
            p{
                font-size: 0.12rem;
                text-align:center;
            }
        }
    }
`