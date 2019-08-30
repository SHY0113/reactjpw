import styled from "styled-components"


export const PayWrapper = styled.div`
height:100%;

.orderCon{
    margin-top:.6rem;
    font-size:16px;
    display:flex;
    padding:.15rem;
    .orderImg{
        width:1rem;
        height:1rem;
        margin-right:.2rem;
        img{
            width:100%;
            height:100%;
        }
    }
    .orderR{
        display:flex;
        position:relative;
        width:2rem;
        flex-direction:column;
        h3{
            font-size:18px;
        }
        .type{
            display:flex;
            font-size:14px;
            color:#ccc;
            margin-top:0.05rem;
            .orderColor{
                margin-right:.2rem;
            }
        }
        .nowPrice{
            margin-top:.1rem;
        }
        .num{
            position:absolute;
            right:.1rem;
            top:.5rem;
            color:#c33;
        }
    }
}
.allPrice{
    font-size:18px;
    padding:0 .2rem;
    display:flex;
    justify-content: space-between;
}
.paybot{
    position:fixed;
    width:100%;
    height:.5rem;
    bottom:0;
    background:#f5f5f5
    display:flex;
    align-items:center;
    font-size:15px;
    .paynow{
        width:1.2rem;
        line-height:.5rem;
        color:#fff;
        background:#ff464e;
        position:absolute;
        text-align:center;
        font-size:18px;
        font-weight:800;
        right:0;
    }
    .cancel{
        width:1.2rem;
        line-height:.5rem;
        color:#fff;
        background:#f6a623;
        position:absolute;
        right:1.2rem;
        font-size:18px;
        font-weight:800;
        text-align:center;
    }
    .pay{
        margin-left:.1rem;
        span{
            color:#ff464e;
        }
    }
}
`