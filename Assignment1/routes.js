const requestHandeler = (req, res) => {
    const url = req.url

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