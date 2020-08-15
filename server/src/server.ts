import express from 'express';

const app = express();

app.use(express.json()); //para o app entender o arquivo json

app.get('/users', (request, response) => {
    console.log(request.query);

    const users = [
        { name: 'Diego', age: 25 },
        { name: 'Vini', age: 21 },
    ];
    return response.json(users);
});

app.listen(3333); //ouvir requisições HTTP