import styled from "styled-components"

export const InfoWrapper = styled.div `
height:100%;
.infoInfo {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 16px;
    color: #666;
    padding:0 .15rem;
    border-bottom:1px solid #f4f4f8;
    height:.48rem;
    background: #fff;
}

.infoInfo p {
    color: #999;
    font-size: 14px;
}
.infoLogo{
    height:.68rem;
}
.logoImg{
    width:.5rem;
    height:.5rem;
   
}
.logoImg img{
    width:100%;
    height:100%;
    border-radius:.5rem;
}
.infoAddress{
    margin:.1rem 0;
}
`