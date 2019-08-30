import styled from "styled-components"

export const CollectWrapper = styled.div`
            width:100%;
            height:100%;
            .collectC{
                height:100%;
            }
            .header {
                width: 100%;
                height: .44rem;
                position: relative;
                background:#fff;
                border-bottom:1px solid #ccc;
                position:fixed;
                top:0;
                z-index:110;
                display: flex;
            justify-content: center;
            align-items: center;
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
            i{
                color: #4a4a4a;
                font-size: 16px;
                position: absolute;
                left: .2rem;
            }
            .collectCon{
                height:100%;
                padding:.44rem .2rem;
                overflow:auto;
                
                li{
                    position: relative;
                    height:1.28rem;
                    padding:.12rem;
                    display:flex;
                    align-items:center;
                    font-size:15px;
                    border-bottom:1px solid #ccc;
                    input{
                        width:.18rem;
                        height:.18rem;
                        display:block;
                        margin-right:.2rem;


                    }
                    .collectImg{
                        width:1rem;
                        height:1rem;
                        margin-right:.15rem;
                        img{
                            width:100%;
                            height:100%;
                        }
                    }
                    .collectR{
                        position: relative;
                        width:1.8rem;
                        .price{
                            display:flex;
                            align-items:center;
                        }
                        .nowPrice{
                            font-size: 18px;
                            color: #ff464e;
                        }
                        .oldPrice{
                            font-size: 12px;
                            color: #999;
                            text-decoration: line-through;
                        }
                        .gshopcar{
                            position: absolute;
                            z-index: 5;
                            right: 0;
                            height: 30px;
                            line-height: 30px;
                            min-width: 76px;
                            padding-left: 8px;
                            padding-right: 8px;
                            font-size: 12px;
                            border: 1px solid #ff464e;
                            box-sizing: border-box;
                            text-align: center;
                            color: #ff464e;
                        }
                    }
                }
            }
            .collectBOX2{
                display:none
            }
            .collectBot{
                height:.5rem;
                position:fixed;
                bottom:0;
                width:100%;
                background:#fff;
                display:flex;
                align-items:center;
                .num{
                    font-size:12px;
                    color:#666;
                    span{
                        color:#ff464e
                    }
                }
                .collectDel{
                    width: 1.2rem;
                    height:100%;
                    line-height:.5rem;
                    font-size: 18px;
                    background-color: #ff464e;
                    color: #fff;
                    cursor: pointer;
                    text-align: center;
                    position:absolute;
                    right:0.2rem;
                    text-align:center;
                }
            }

`
