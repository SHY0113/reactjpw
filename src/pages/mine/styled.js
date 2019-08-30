import styled from "styled-components"

export const MineWrapper = styled.div`
        .mine_head {
            height: 1.44rem;
            background: url("https://jp.juancdn.com/jpwebapp_v1/images_v1/user/user_center_bg.png");
            background-position: bottom;
            background-repeat: no-repeat;
            background-size: 100% auto;
        }



        .mine_headRL {
            height: 1rem;
            display: flex;
            justify-content: space-around;
            align-items: center;
        }

        .mine_headRL span {
            color: #fff;
            font-size: 20px;
        }


        .mine_headTo {
        
            height: 1.44rem;
            background: url("https://jp.juancdn.com/jpwebapp_v1/images_v1/user/user_center_bg.png");
            background-position: bottom;
            background-repeat: no-repeat;
            background-size: 100% auto;
        }


        .mine_headInfo {
            height: 1rem;
            display: flex;
            align-items: center;
            font-size: 12px;
        }

        .infoImg {
            width: .54rem;
            height: .54rem;
            border-radius: 50%;
            float: left;
            margin-left: .3rem;
            border: 2px solid #fff;
            overflow: hidden;
        }

        .mineInfo {
            margin-top:.1rem;
            display:flex;
            font-size: 12px;
            height: .2rem;
            line-height: .2rem;
            background: #f3414a;
            border: 1px solid #ff8282;
            border-radius: .2rem;
            padding-left: .1rem;
            width:.8rem;
            color: #fff;
        }

        .infoImg img {
            width: 100%;
            height: 100%;
        }

        .infoR {
            margin-left: .2rem;
        }

        .infoName {
            font-family: PingFangSC-Regular;
            font-size: 16px;
            color: #fff;
            height: .22rem;
            line-height: .22rem;
        }

        /* 订单 */
        .mine_order {
            height: .48rem;
            margin: 0 .25rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid #f4f4f8;
        }

        .mine_order span {
            font-size: 15px;
            color: #333
        }

        .mine_order .all_order {
            font-size: 14px;
            color: #999;
        }

        .mine_tab {
            height: .76rem;
            display: flex;
            justify-content: space-around;
            align-items: center;
            padding: .12rem 0;
        }

        .mine_tab .mine_tablist {
            display: flex;
            flex-direction: column;
            font-size: 12px;
            color: #666;
            align-items: center;
        }

        .mine_tab .mine_tablist i {
            font-size: 28px;
        }

        .mine_con {
            border-top: .1rem solid #f4f4f8;
            border-bottom: .06rem solid #f4f4f8;
            height: 2.56rem;
            display: flex;
            flex-direction: column;
            font-size: 15px;

        }

        .mine_con div {
            height: .48rem;
            border-bottom: 1px solid #f4f4f8;
            line-height: .48rem;
            margin: 0 .14rem;
            display: flex;
            justify-content: space-between
        }

        .mine_con div p {
            color: #999;
            font-size: 14px;
        }

        .mine_bottom {
            display: flex;
            flex-direction: column;
            font-size: 15px;
        }

        .mine_bottom div {
            height: .48rem;
            line-height: .48rem;
            margin: 0 .14rem;
            border-bottom: 1px solid #f4f4f8;
        }

`