import styled from "styled-components";
export const    Go = styled.div`
    height:100%;
    .gotop{
        position:fixed;
        right:0.1rem;
        bottom:0.1rem;
        width:0.4rem;
        height:0.4rem;
        z-index:12;
    }
`
export const Headers = styled.div`
    height:.44rem;
    border-bottom: 1px solid #ebebeb;
    width: 100%;
    overflow: inherit;
    z-index: 199;
    div{
        z-index: 999;
        height: 44px;
        width: 100%;
        background: #fff;
        position: absolute;
        #spanOne{
            float:left;
            font-size:16px;
            display: block;
            padding-top: .08rem;
            padding-left: .16rem;
            height: .28rem;
            width: .28rem;
            a{
                display:inline-block;
                width:.24rem;
                height:.24rem;
            }
        }
        #spanTwo{
            cursor: default;
            width: 100%;
            z-index: -1;
            padding: 0 0.44rem;
            height: 44px;
            line-height: 44px;
            font-size: 18px;
            box-sizing: border-box;
            text-overflow: ellipsis;
            white-space: nowrap;
            position: absolute;
            text-align: center;
            overflow: hidden;
            display:block;
        }
        .searchicon{
            position: absolute;
            top: 4px;
            right: 54px;
            color: #666;
            cursor: pointer;
            span{
                display: block;
                font-size:24px;
                i{
                    font-size:24px;
                }
            }
        }
        .menuicon{
            position: absolute;
            width: 30px;
            top: 5px;
            z-index: 2;
            right: 12px;
            margin:0;
            padding:0;
            height:32.8px;
            a{
                font-size: 22.8px;
                display: block;
                i{
                    font-size:30px;
                }
            }
        }
    }
`
export const Navbar = styled.div`
    width: 100%;
    background: #fff;
    height: 40px;
    div{
        width: 100%;
        overflow-x: auto;
        overflow-y: hidden;
        background: #fff;
        text-align: center;
        padding-top: 5px;
        padding-bottom: 5px;
        font-size: 14px;
        border-bottom: 1px solid #ebebeb;
        table{
            width: 100%;
            height: 30px;
            display: table;
            border-collapse: separate;
            border-spacing: 2px;
            border-color: grey;
            tbody{
                display: table-row-group;
                vertical-align: middle;
                border-color: inherit;
                tr{
                    font-size: 14px;
                    width: 100%;
                    .red{
                        color:red;
                    }
                    td{
                        width:20%;
                    }
                    .tdTwo{
                        .sorticon1{
                            background: url(https://jp.juancdn.com/jpwebapp_v1/images_v1/icon/sort_sprite.png) no-repeat;
                            background-size: 49px;
                            margin-left: 5px;
                            display: inline-block;
                            height: 15px;
                            width: 8px;
                            background-position-x: 0;
                        }
                    }
                    .tdThree{
                        .sorticon2{
                            height: 13px;
                            width: 11px;                          
                            background: url(https://jp.juancdn.com/jpwebapp_v1/images_v1/icon/sort_sprite.png) no-repeat;
                            background-position-y: 0;
                            background-position-x: -23px;
                            background-size: 49px;
                            margin-left: 5px;
                            display: inline-block;
                        }
                    }
                }
            }
        }
    }
`
export const Sections = styled.section`
    
    display: block;
    background-color: #f9f9f9;
    height: 100%;
    width: 100%;
    overflow: hidden;
    min-height: 17.06667rem;
    ul{
        display: flex;
        width:3.8rem;
        justify-content: space-between;
        flex-wrap: wrap;
        li{
            float: left;
            position: relative;
            background: #fff;
            width: 1.891rem;
            margin-top: .01rem;
            .aone{
                background: none;
                display: block;
                position: relative;
                height:1.891rem;
                img{
                    border:0;
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    transition: opacity .5s linear;
                    display: inherit;
                }
            }
            .atwo{
                div{
                    width: 92%;
                    position: relative;
                    bottom: 0;
                    margin-left: 8px;
                    margin-right: 8px;
                    margin-top: 0;
                    line-height: 24px;
                    height: 24px;
                    display:flex;
                    .pricenew{
                        font-size: 15px;
                        color: #ff464e;
                        margin-right: 4px;
                        i{
                            font-size: 15px;
                            font-style: normal;
                        }
                    }
                    del{
                        vertical-align: 2px;
                        font-size: 15px;
                        color: #bbb;
                    }
                }
                h3{
                    width: 96%;
                    margin-top: 2px;
                    margin-bottom: 2px;
                    font-size: 12px;
                    font-weight: 300;
                    color: #333;
                    background: hsla(0,0%,100%,.8);
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    margin-left: 8px;
                    height: 20px;
                    line-height: 20px;
                }
            }
            }
        }
    }
`