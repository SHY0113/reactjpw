import React, { Component } from 'react'
import { Redirect } from "react-router-dom"
import {getCookie} from "@static/cookie.js"
export default (PageWrapper) => {
    return class extends Component {

        render() {
           
            let { path, meta } = this.props
            if (meta.auth && path !== "/login") {
                let token = getCookie("token")
            
                if (!token) {
                    return <Redirect to="/login" />
                } else {
                    return <PageWrapper {...this.props} />
                }
            }

            return <PageWrapper {...this.props} />
        }
    }
}
