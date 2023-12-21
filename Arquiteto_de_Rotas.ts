import express from 'express';
import bodyParser from 'body-parser';

const app =  express();
const porta = 3000;

let users: any[] = [{Id: 1, Name: "admin"}, {Id: 2, Name: "test"}];


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

app.get("/", (req, res) => {
    res.send("<h1> Bem vindo explorador </h1><br><h2> Esse é o meu web service</h2>")
});

app.get('/users', (req, res) => {
    try{
        res.send(users)
    }catch(err){
        res.send('erro: ' + err );
    }
})

app.post("/cadastrarUser", (req, res)=> {
    try{
        let nome = req.body.Name;
        let novoUsuario = {Id: users.length + 1, Name: nome};
        users.push(novoUsuario);

        res.status(201).json({resultado: `Cadastro realizado,  bem vindo ${novoUsuario}`});
    
    }catch(err){
        res.send(err);
    }
    
})

app.put('/editarUser/:id', (req, res) => {
    try{
        let Id = parseInt(req.params.id);
        let novoNome = req.body.Name;
        
        for (const usuario of users) {
            if(usuario.id  == Id){
                usuario.Name = novoNome;
                res.status(201).json({resultado:`Usuário alterado, nome: ${usuario.Name}`});
            }
        }
    }catch(err){
        res.status(404).json({resultado: "Usuário não encontrado."});
    }

});

app.listen(porta, () => {
    console.log("web service rodando...")
});