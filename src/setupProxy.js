const proxy = require("http-proxy-middleware");


module.exports = (app)=>{
    app.use(proxy(
        "/api",{
        target:"https://webservice.juanpi.com",
        changeOrigin:true,
    })),
    app.use(proxy(
        "/cate",{
        target:"https://m.juanpi.com",
        changeOrigin:true,
    })),
    app.use(proxy(
        "/search",{
        target:"https://m.juanpi.com",
        changeOrigin:true,
    }))
}
