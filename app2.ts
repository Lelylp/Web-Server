import express, { Request, Response } from "express";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

const apostas = [

    { id: 1, jogo: "Sport x Fortaleza", valor: 100 },

    { id: 2, jogo: "Bahia x Ceará", valor: 200 }

];

app.get("/", (req: Request, res: Response) => {
    res.send(apostas);
});

app.get("/:id", (req: Request, res: Response) => {
    const aposta = apostas.find((l) => l.id === parseInt(req.params.id));

    if (!aposta) {

        return res.status(404).json({ mensagem: "Aposta não encontrado" });

    }

    res.send(aposta);
});

app.post('/bet', (req: Request, res: Response) => {
    const novaAposta = {
        id: apostas.length + 1,
        jogo: req.body.jogo,
        valor: req.body.valor,
    };
    apostas.push(novaAposta);
    res.status(201).json(novaAposta);
})

const porta: number = 3000;

app.listen(porta, () => {

    console.log(`Servidor rodando em http://localhost:${porta}`);

});