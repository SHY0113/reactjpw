import styled from "styled-components"

export const ShopcarWrapper = styled.div `

            width:100%;
            height:100%;
            .shopcarbox2{
                display:none;
            }
            .header {
                width: 100%;
                height: .44rem;
                position: relative;
                background:#fff;
                border-bottom:1px solid #ccc;
                position:fixed;
                top:0;
                z-index:110
            }

            .header_c {
                position: absolute;
                left: 1.536rem;
                height: .44rem;
                line-height: .44rem;
                font-size: 18px;
                color: #333;
            }
            .header_r {
                font-size: 15px;
                color: #4a4a4a;
                position: absolute;
                right: .15rem;
                width: .6rem;
                height: .44rem;
                text-align: center;
                line-height: .44rem;
            }
            .shopcar{
                height: 100%;
                font-size: 15px;
                display: flex;
                flex-direction: column;
                .shopcarCon{
                    display:flex;
                    flex-direction: column;
                    padding:0 0.2rem;
                    padding-bottom:1rem;
                    padding-top:.5rem;
                }
            }
            
            .shoptop{
                height:.45rem;
                display: flex;
                align-items: center;
                border-bottom:1px solid #ccc;
                input{
                    width:.18rem;
                    height:.18rem;
                    margin-right:.15rem;
                }
                h3{
                    font-size: 16px;
                    color:#333;
                    margin-right:.05rem;
                }
                i{
                    font-size: 20px;
                    color:#333;
                    font-weight: 600;
                }
            }
            ul{
                display: flex;
                flex-direction: column;
                
                li{
                    height:1.22rem;
                    display: flex;
                    align-items: center;
                    input{
                        width:.18rem;
                        height:.18rem;
                    }
                    .goodsImg{
                        width:.9rem;
                        height:.9rem;
                        margin:0 .15rem;
                        img{
                            width:100%;
                            height:100%;
                        }
                    }
                    .goodsR{
                        width: 2rem;
                        position:relative;
                        .goodsTitle{
                            width: 2rem;
                            text-overflow: ellipsis;
                            overflow: hidden;
                            display: -webkit-box;
                            -webkit-line-clamp: 2;
                        }
                        .goodsSku{
                            display:flex;
                            align-items:center;
                            color: #bbb;
                            font-size:14px;
                            margin:.2rem 0;
                            .goodsColor{
                                margin-right:.1rem
                            }
                        }
                        .goodsSkuChange{
                            width:1.1rem;
                            display:flex;
                            justify-content: space-around;
                            align-items:center;
                            color: #3d993d;
                            font-size:14px;
                            margin:.2rem 0;
                            border:1px solid #3d993d;
                            border-radius:.1rem;
                            .goodsColor{
                                margin-right:.1rem
                            }
                        }
                        .goodsPrice{
                            display:flex;
                            align-items:center;
                            .nowPrice{
                                color:#FF464E;
                                font-size:13px;
                            }
                            .oldPrice{
                                text-decoration: line-through;
                                color: #999999;
                                font-size:13px;
                            }
                        }
                        .num{
                            position: absolute;
                            right:.15rem;
                            top:.2rem;
                            font-size:16px;
                            font-weight:700;
                        }
                        .nums{
                            position: absolute;
                            right:.05rem;
                            bottom:.05rem;
                            font-size:16px;
                            font-weight:700;
                            display:flex;
                            input{
                                width:.35rem;
                                height:.23rem;
                                border:none;
                                text-align: center;
                            }
                            .numsx{
                                width:.23rem;
                                height:.23rem;
                                color:#ccc;
                                background:#f4f4f8;
                                text-align:center;
                                line-height:.23rem;
                            }
                        }
                        
                    }
                    
                }
            }
            .shocparbot{
                height:.5rem;
                display:flex;
                align-items:center;
                position:fixed;
                bottom:.5rem;
                width:100%;
                padding: 0 0 0 0.2rem;
                background:#fff;
                input{
                    width:.18rem;
                    height:.18rem;
                    margin-right:.1rem;
                }
                .allPrice{
                    position:absolute;
                    right:1.3rem;
                    span{
                        color:#ff464e;
                    }
                }
                .pay{
                    width:1.12rem;
                    height:.5rem;
                    background:#ff464e;
                    text-align:center;
                    line-height:.5rem;
                    color:#fff;
                    font-weight:700;
                    position:absolute;
                    right:0
                }
                .likes{
                    width:1.12rem;
                    height:.5rem;
                    line-height:.5rem;
                    font-weight:700;
                    text-align:center;
                    color:#fff;
                    background:#f6a623;
                    position:absolute;
                    right:1.12rem;
                }
                .del{
                    width:1.12rem;
                    height:.5rem;
                    background:#ff464e;
                    text-align:center;
                    line-height:.5rem;
                    color:#fff;
                    font-weight:700;
                    position:absolute;
                    right:0
                }
            }
            .shopcarbody{
                height:100%;
            }
            .shopcarbox{
                height:100%;
                overflow:auto;
                
            }
            .shopcarbox2{
                height:100%;
                overflow:auto;
                
            }

           
            
`