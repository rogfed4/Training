 const fs= require('fs');

 const requestHandler=(req,res)=>{

    const url=req.url;
    const method=req.method;

    if(url==='/'){
        res.setHeader('contextType','text/html');
        res.write('<html>');
        res.write('<head><title> My Zero Page</title></head>');
        res.write('<body><form action="/next" method="POST"><input type="text" name="message"><button type="submit">send </button> </form></body>');
        res.write('</html>');    
        return res.end();
    }

    if(url==='/next'&& method==="POST"){
        const info=[];
        req.on('data',(chunk)=>{
            info.push(chunk);
            console.log(info);
        });

        return req.on('end', ()=> {
            const finalinfo=Buffer.concat(info).toString();
            console.log(finalinfo);
            const ans=finalinfo.split('=')[1];
            console.log(ans);
            fs.writeFileSync('new.txt',ans);
            res.statusCode=302;
            res.setHeader('Location','/');
            return res.end();
        });  
        //fs.writeFileSync('new.txt','newone is here');
        // res.statusCode=302;
        // res.setHeader('Location','/');
        // return res.end();
    }
    res.setHeader('context-Type','text/html');
    res.write('<html>');
    res.write('<head><title> My First Page</title></head>');
    res.write('<body><h1> Hello there </h1></body>');
    res.write('</html>');
    res.end();
    //process.exit();
 }

 module.exports={
    handler: requestHandler,
    relatedText: '123'
 }