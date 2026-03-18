const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

// 1. Mulinma thiyena form eka (GET)
app.get('/', (req, res) => {
    res.send(`
        <form action="/greet" method="POST">
            <input type="text" name="userName" placeholder="Enter your name" required>
            <button type="submit">Get Greeting</button>
        </form>
    `);
});

// 2. Form eka submit kalama POST request eka handle karana hati
app.post('/greet', (req, res) => {
    const name = req.body.userName;
    // Redirect karanava welcome page ekata name eka query parameter ekak vidiyata yaval
    res.redirect(`/welcome?name=${name}`);
});

// 3. Redirect una page eka (GET)
app.get('/welcome', (req, res) => {
    const name = req.query.name;
    res.send(`
        <h1>Hello, ${name}!</h1>
        <a href="/">Go Back</a>
    `);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
