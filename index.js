require('dotenv').config();

const express = require('express');
const { Web3 } = require('web3');

const app = express();

const providerInfuraKey = process.env.API_KEY;
const providerUrl = `https://mainnet.infura.io/v3/${providerInfuraKey}`;
const web3 = new Web3(providerUrl)

app.use(express.json());

app.get('/', async (req, res) => {
    const messageHello = "Server is working..."
    res.json(messageHello)
    console.log(providerInfuraKey)
})

app.get('/balance/:address', async (req, res) => {
    const { address } = req.params;
    "0xE94f1fa4F27D9d288FFeA234bB62E1fBC086CA0c"

    try {
        const balance = await web3.eth.getBalance(address, "latest")
        const balanceString = balance.toString();
        res.json({ address, balance: balanceString + " Wei" });
    } catch (error) {
        console.error('Ошибка при запросе баланса:', error);
        res.status(500).json({error: "Error request of balance"});
    }
});

const port = process.env.PORT ||  3000;
app.listen(port, () => {
    console.log(`Server was runing on the port ${port}`)
})


// list of wallet addres
//
// 0x95222290DD7278Aa3Ddd389Cc1E1d165CC4BAfe5
// 0xE94f1fa4F27D9d288FFeA234bB62E1fBC086CA0c
// 0xB9Ff27C08bE49cF82243380716d655741BE0f4d0
// 0x498E790dac9f8816f3d4d1E85c7f7560DD125f26
// 0xB9Ff27C08bE49cF82243380716d655741BE0f4d0