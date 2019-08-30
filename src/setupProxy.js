const proxy = require("http-proxy-middleware");


module.exports = (app)=>{
    app.use(proxy(
        "/api",{
        target:"https://webservice.juanpi.com",
        changeOrigin:true,
    }));
    app.use(proxy(
        "/act",{
            target:"https://m.juanpi.com",
            changeOrigin:true,
    }))
    app.use(proxy(
        "/timebuy",{
            target:"https://mapi.juanpi.com",
            changeOrigin:true,
    }))
    //https://mapi.juanpi.com/timebuy/getTable
}