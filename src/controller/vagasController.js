const VagaModel = require('../models/vagasModel')
const jwt = require('jsonwebtoken')
const SECRET = `${process.env.SECRET}`

const createVaga = async (req, res) => {
    try {
        const authHeader = req.get('authorization')

        if (!authHeader) {
            return res.status(401).send('Pass the token')
        }

        const token = authHeader.split(' ')[1]

        await jwt.verify(token, SECRET, async function (err) {
            if (err) {
                return res.status(403).send('Enter a valid token')
            }

            const { categoria, tituloVaga, autorPostagem, descriçãoVaga, requisitos, dataDepostagem, vagaDisponível } = req.body

            const newVaga = new VagaModel({

                categoria,
                tituloVaga,
                autorPostagem,
                descriçãoVaga,
                requisitos,
                dataDepostagem,
                vagaDisponível
            })

            const savedVaga = await newVaga.save()

            res.status(201).json(savedVaga)
        })

    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message })
    }
}


const getAllVagas = async (req, res) => {
    try {
        const authHeader = req.get('authorization')

        if (!authHeader) {
            return res.status(401).send('Pass the token')
        }

        const token = authHeader.split(' ')[1]

        await jwt.verify(token, SECRET, async function (err) {

            if (err) {
                return res.status(403).send('Enter a valid token!')
            }

            const allVagas = await VagaModel.find()
            res.status(200).json(allVagas)
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message })
    }
}

//get vaga por {id} | vaga específica
const getVagaById = async (req, res) => {
    try {
        const authHeader = req.get('authorization')

        if (!authHeader) {
            return res.status(401).send('Pass the token')
        }

        const token = authHeader.split(' ')[1]

        await jwt.verify(token, SECRET, async function (err) {
            if (err) {
                return res.status(403).send('Enter a valid token!')
            }

            findVaga = await VagaModel.findById(req.params.id)
            res.status(200).json(findVaga)

        })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message })
    }
}

const getVagaByCategory = async (req, res) => {
    try {
        const authHeader = req.get('authorization')

        if (!authHeader) {
            return res.status(401).send('Pass the token')
        }

        const token = authHeader.split(' ')[1]

        await jwt.verify(token, SECRET, async function (err) {
            if (err) {
                return res.status(403).send('Enter a valid token!')
            }
            const { categoria } = req.query

            const findCurso = await VagaModel.find({ categoria: categoria })
            res.status(200).json(findCurso)
        })

    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message })
    }
}

const getVagaByDisponibilidade = async (req, res) => {
    try {
        const authHeader = req.get('authorization')

        if (!authHeader) {
            return res.status(401).send('Pass the token')
        }

        const token = authHeader.split(' ')[1]

        await jwt.verify(token, SECRET, async function (err) {
            if (err) {
                return res.status(403).send('Enter a valid token')
            }
            const { vagaDisponível } = req.query

            const findVaga = await VagaModel.find({ vagaDisponível: vagaDisponível })
            res.status(200).json(findVaga)
        })

    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message })
    }
}

const updateVaga = async (req, res) => {
    try {
        const authHeader = req.get('authorization')

        if (!authHeader) {
            return res.status(401).send('Pass the token')
        }

        const token = authHeader.split(' ')[1]

        await jwt.verify(token, SECRET, async function (err) {
            if (err) {
                return res.status(403).send('Enter a valid token')
            }
            const { categoria, tituloVaga, autorPostagem, descriçãoVaga, requisitos, dataDepostagem, vagaDisponível } = req.body

            const updatingVaga = await VagaModel
                .findByIdAndUpdate(req.params.id, {
                    categoria,
                    tituloVaga,
                    autorPostagem,
                    descriçãoVaga,
                    requisitos,
                    dataDepostagem,
                    vagaDisponível
                })

            const vagaUpdated = await VagaModel.findById(req.params.id)
            res.status(200).json(vagaUpdated)
        })

    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message })
    }
}

const deleteVaga = async (req, res) => {
    try {
        const authHeader = req.get('authorization')

        if (!authHeader) {
            res.status(401).send('Pass the token')
        }

        const token = authHeader.split(' ')[1]

        await jwt.verify(token, SECRET, async function (err) {
            if (err) {
                return res.status(403).send('Enter a valid token')
            }
            const { id } = req.params
            const deletedVaga = await VagaModel.findByIdAndDelete(id)
            const message = `A vaga ${deletedVaga.tituloVaga} foi deletada com sucesso`
            res.status(200).json({ message })
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = {
    getAllVagas,
    getVagaById,
    getVagaByCategory,
    createVaga,
    getVagaByDisponibilidade,
    updateVaga,
    deleteVaga
}



