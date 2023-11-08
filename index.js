const { Web3 } = require('web3')

const web3 = new Web3('https://mainnet.infura.io/v3/f81ed51e9fb54a0b8b2635062f07d15a')

// list of wallet addres

// 0x95222290DD7278Aa3Ddd389Cc1E1d165CC4BAfe5
// 0xE94f1fa4F27D9d288FFeA234bB62E1fBC086CA0c
// 0xB9Ff27C08bE49cF82243380716d655741BE0f4d0
// 0x498E790dac9f8816f3d4d1E85c7f7560DD125f26
// 0xB9Ff27C08bE49cF82243380716d655741BE0f4d0

const ethereumAddress  = "0xE94f1fa4F27D9d288FFeA234bB62E1fBC086CA0c"

async function getWalletBalance(addres) {
    web3.eth.getBalance(addres, 'latest')
        .then(balance => {
            console.log("Balance:", balance, "Wei")
        })
}
  
getWalletBalance(ethereumAddress);