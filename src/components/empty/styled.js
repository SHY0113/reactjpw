import styled from "styled-components"

export const EmptyWrapper = styled.div `
width:100%;
height:100%;
background:#f4f4f8
.empty_img {
    width: 1.4rem;
    height: 1.9rem;
    margin: auto;
    padding-top: .5rem;
    img {
        width: 100%;
        height: 100%;
    }
}

.empty_like {
    font-size: 16px;
    color: #333;
    margin-bottom: .3rem;
    text-align: center;
}
.empty_more {
    width: 1.38rem;
    height: .4rem;
    line-height: .4rem;
    font-size: 15px;
    color: #ff464e;
    margin-left: 1.2rem;
    border: 1px solid currentColor;
    text-align: center;
}
`