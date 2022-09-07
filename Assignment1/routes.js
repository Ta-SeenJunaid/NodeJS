const requestHandeler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/'){
        res.write('<html>');
        res.write('<head><title>Username</title></head>');
        res.write('<body>');
        res.write('<h1>User name</h1>');
        res.write('<form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Submit</button></form>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    };

    if (url === '/create-user' && method === 'POST'){
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });

        return req.on('end', () => {
            const parseBody = Buffer.concat(body).toString();
            const username = parseBody.split('=')[1];
            console.log(username);
            return res.end();
        });
    };

    if (url === '/users'){
        res.write('<html>');
        res.write('<head><title>User</title></head>');
        res.write('<body>');
        res.write('<ul>');
        res.write('<li>User 1</li>');
        res.write('<li>User 2</li>');
        res.write('<li>User 3</li>');
        res.write('</ul>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Assignment 1</title></head>');
    res.write('<body><h1>Hello from assignment 1!!!!!!!!!!!!!!!!</h1></body>');
    res.write('</html>');
    res.end();
};

module.exports = {
    handler : requestHandeler
};