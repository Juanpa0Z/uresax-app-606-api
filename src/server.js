const {PrismaClient} = require('@prisma/client')

const prisma = new PrismaClient()

const express = require('express')

const app = express();

app.get('/',(req,res)=> res.send('Working URESAX 606 API...'))

app.get('/users',(req,res)=> res.status(200).json([]))

app.get('/purchases',(req,res)=> res.status(200).json([
     {
        id:1,
        rnc:'101675489',
        tax_payer_name:'URENA LORENZO & ASOCIADOS S.R.L.',
        ncfType:1,
        ncf:'B0100000001',
        ncfModifedType:null,
        ncfModifed:null,
        total:2500,
        tax:550.45,
        created_at:new Date()
     }
]))

app.listen(process.env.PORT || 3000,()=>{
    console.log('Server Running...');
})

