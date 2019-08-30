const proxy = require("http-proxy-middleware");


module.exports = (app)=>{
    app.use(proxy(
        "/api",{
        target:"https://webservice.juanpi.com",
        changeOrigin:true,
    }));
    app.use(proxy(
        "/timebuy",{
            target:"https://mapi.juanpi.com",
            changeOrigin:true,
    }))
    //https://mapi.juanpi.com/timebuy/getTable
    app.use(proxy(
        "/shopcart",{
        target:"https://m.juanpi.com",
        changeOrigin:true,
        pathRewrite:{'^/shopcart':''}
    })),
    app.use(proxy(
        "/users",{
        target:"http://10.60.11.3:3001/",
        changeOrigin:true,
    })),
    app.use(proxy(
        "/goods",{
        target:"http://10.60.11.3:3001/",
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
