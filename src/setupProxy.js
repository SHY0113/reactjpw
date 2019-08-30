const proxy = require("http-proxy-middleware");


module.exports = (app)=>{
    app.use(proxy(
        "/api",{
        target:"https://webservice.juanpi.com",
        changeOrigin:true,
    })),
    app.use(proxy(
        "/shopcart",{
        target:"https://m.juanpi.com",
        changeOrigin:true,
    })),
    app.use(proxy(
        "/users",{
        target:"http://127.0.0.1:3001/",
        changeOrigin:true,
    })),
    app.use(proxy(
        "/goods",{
        target:"http://127.0.0.1:3001/",
        changeOrigin:true,
    }))
}

