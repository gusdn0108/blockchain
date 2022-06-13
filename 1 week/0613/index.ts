import { BlockChain } from '@core/index'
import {P2PServer} from './src/serve/p2p'
import express from 'express'

const app = express()
const bc = new BlockChain()
const ws = new P2PServer()




app.use(express.json())

app.get('/',(req,res)=>{
    res.send('jongscoin')
})


// 1. 블록내용 

app.get('/chains',(req,res)=>{
    res.json(bc.chain.getChain())
})

// 2. 블록채굴 api -> 배열을 반드시 받아와야함 
app.post('/mineBlock',(req,res)=>{
    const {data} = req.body
    const newBlock = bc.chain.addBlcok(data)
    if(newBlock.isError) return res.status(500).send(newBlock.error)

    res.json(newBlock.value)
})


app.post('/addToPeer', (req, res) => {
    const { peer } = req.body;
    ws.connectToPeer(peer);
});




app.listen(3000,()=>{
    console.log('jongscoin on')
    ws.listen()
})



