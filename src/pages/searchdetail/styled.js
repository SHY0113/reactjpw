import styled from "styled-components";
export const Seekd = styled.div`
    .search-block{
        font-size:0.12rem;
        padding-left:0.1rem;
        padding-right:0.4rem;
        height:0.378rem;
        color: #999;
        position:relative;
        .search-input{
            width:3.03rem;
            height:0.28rem;
            margin-top:0.1rem;
            padding-left:0.31rem;
            background-color: #f2f2f2;
            border-radius: .04rem;
            display:flex;
            justify-content: flex-start;
            position:relative;
            .search-icon{
                height:0.16rem;
                width:0.16rem;
                position:absolute;
                top:18%;
                color: inherit;
                border:0 none;
                background:none;
                left:0;
                i{
                    height:100%;
                    width:100%;
                }
            }
            input{
                display: block;
                height: 100%;
                width: 100%;
                letter-spacing: normal;
                word-spacing: normal;
                text-transform: none;
                text-indent: 0;
                text-shadow: none;
                text-align: start;
                border: none;
                outline-style: none;
                word-break: normal;
                background-color: transparent;
                font-size: inherit;
                color: inherit;
            }
        }
        .cancel{
            font-size:0.15rem;
            height:0.2rem;
            width:0.3rem;
            color: #333;
            position:absolute;
            top:16%;
            right:3%;
        }
    }
`
export const Content = styled.div`
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
export const Failed = styled.div`
.false{
    display:none;
}
.true{
padding: 0.2rem 0 0.2rem;
line-height: 0.2rem;
color: #999;
text-align: center;
background: #fff;
font-size: 0.2rem;
img{
    border:0;
    width:1.4rem;
    height:1.4rem;
    margin: 0 auto;
} 
.b-title{
    font-size: 16px;
    margin-bottom: 0.1REM;
    color: #333;
}
.l-title{
    font-size: 12px;
    color: #666;
}
}  
}
`