const http = require('http')

const fs = require('fs')

const server = http.createServer((request, response) => {
	const path = request.url

    console.log(path)

    if (path === '/' || path === '/index.html') {
        fs.readFile('index.html',(err,html)=> {
            if(err) throw err
            response.statusCode = 200
            response.setHeader('Content-Type','text/html')
            response.end(html)
        })
            
    }else if(path === '/css/styles.css'){
        fs.readFile('css/styles.css',(err,css)=> {
            if(err) throw err
            response.statusCode = 200
            response.setHeader('Content-Type','text/css')
            response.end(css)
        })
    }else if(path === '/html/about.html'){
        fs.readFile('html/about.html',(err,html)=> {
            if(err) throw err
            response.statusCode = 200
            response.setHeader('Content-Type','text/html')
            response.end(html)
        })
    }else if(path === '/html/contact.html'){
        fs.readFile('html/contact.html',(err,html)=> {
            if(err) throw err
            response.statusCode = 200
            response.setHeader('Content-Type','text/html')
            response.end(html)
        })
    }else {
		fs.readFile('html/404.html',(err,html)=> {
            if(err) throw err
            response.statusCode = 404
            response.setHeader('Content-Type','text/html')
            response.end(html)
        })
	}
})

server.listen(4001, () => console.log('Server on...'))