import express from 'express';

const app = express();
const port = 8080;

app.get('/', (req, res) => {
    res.send([
        {
            id: 1,
            nome: 'João',
        },
        {
            id: 2,
            nome: 'Maria',
        },
        {
            id: 3,
            nome: 'José',
        },
        {
            id: 4,
            nome: 'Pedro',
        },
    ]);
});

app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});
