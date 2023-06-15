const express = require('express');
const sendEmail = require('../utils/sendEmail');
const router = express.Router();

// colocar las rutas aquí
router.get('/', (req, res) => {
    res.send("Welcome to express");
});

router.post('/emails/contact', async(req,res)=>{

    const {name,email,phone,message}=req.body

    await sendEmail({
        to:"gabrielghioma@gmail.com",
        subject:"Alguine visito tu porfolio y te ha dejado un mensaje",
        html: `
        <h1>${name} te ha dejado esto: </h1>
        <ul>

            <li> <b> Nombre: </b> ${name}</li>
            <li> <b> Email: </b> ${email}</li>
            <li> <b> Teléfono: </b> ${phone}</li>
            <li> <b> Mensaje: </b> ${message}</li>

        </ul>  
        `
    })


    await sendEmail({
        to:`${email}`,
        subject:"Gracias por visitarlo",
        html: `
        <h2>${name} te ha dejado esto: </h2
        `
    })

    return res.json({message:"Email sent successfully"})
})


module.exports = router;
