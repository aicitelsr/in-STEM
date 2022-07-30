const Admin = require('../models/adminModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const SECRET = `${process.env.SECRET}`

const create = (req, res) => {
    const encryptedPassword = bcrypt.hashSync(req.body.senha, 10)

    req.body.senha = encryptedPassword

    const admin = new Admin(req.body)
    admin.save(function (err) {
        if (err) {
            res.status(500).send({ message: err.message })
        }
        res.status(201).send(admin)
    })
}

const login = (req, res) => {
    Admin.findOne({ email: req.body.email }, function (error, admin) {
        if (error) {
            return res.status(500).send({ message: error.message})
        }
        if (!admin) {
            return res.status(404).send(`Não existe admin com o e-mail ${req.body.email}`)
        }

        const validPassword = bcrypt.compareSync(req.body.senha, admin.senha)

        if (!validPassword) {
            return res.status(403).send('Incorrect password!')
        }

        const token = jwt.sign({ email: req.body.email}, SECRET)
        return res.status(200).send(token)
    });
}

const getAll = (req, res) => {
    Admin.find(function (err, admin) {
        if (err) {
            res.status(500).send({ message: err.message })
        }
        res.status(200).send(admin)
    })
}

const deleteById = async (req, res) => {
    try {
        const { id } = req.params
        await Admin.findByIdAndDelete(id)
        const message = `O admin com o id ${id} foi deletado com sucesso`
        res.status(200).json({ message })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message })
    }
}

module.exports = {
    create,
    login,
    getAll,
    deleteById
}
