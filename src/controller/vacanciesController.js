const VacancyModel = require('../models/vacancyModel')
const jwt = require('jsonwebtoken')
const SECRET = `${process.env.SECRET}`

const createVacancy = async (req, res) => {
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

            const newVacancy = new VacancyModel({

                categoria,
                tituloVaga,
                autorPostagem,
                descriçãoVaga,
                requisitos,
                dataDepostagem,
                vagaDisponível
            })

            const savedVacancy = await newVacancy.save()

            res.status(201).json(savedVacancy)
        })

    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message })
    }
}


const getAllJobs = async (req, res) => {
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

            const allJobs = await VacancyModel.find()
            res.status(200).json(allJobs)
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message })
    }
}

const getVacancyById = async (req, res) => {
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

            findVacancy = await VacancyModel.findById(req.params.id)
            res.status(200).json(findVacancy)

        })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message })
    }
}

const getVacancyByCategory = async (req, res) => {
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

            const findVacancy = await VacancyModel.find({ categoria: categoria })
            res.status(200).json(findVacancy)
        })

    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message })
    }
}

const getvacancyAvailable = async (req, res) => {
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

            const findVacancy = await VacancyModel.find({ vagaDisponível: vagaDisponível })
            res.status(200).json(findVacancy)
        })

    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message })
    }
}

const updateVacancy = async (req, res) => {
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

            const updatingVaga = await VacancyModel
                .findByIdAndUpdate(req.params.id, {
                    categoria,
                    tituloVaga,
                    autorPostagem,
                    descriçãoVaga,
                    requisitos,
                    dataDepostagem,
                    vagaDisponível
                })

            const updatedVacancy = await VacancyModel.findById(req.params.id)
            res.status(200).json(updatedVacancy)
        })

    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message })
    }
}

const deleteVacancy = async (req, res) => {
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
            const deletedVacancy = await VacancyModel.findByIdAndDelete(id)
            const message = `A vaga ${deletedVacancy.tituloVaga}} foi deletada com sucesso`
            res.status(200).json({ message })
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = {
    getAllJobs,
    getVacancyById,
    getVacancyByCategory,
    createVacancy,
    getvacancyAvailable,
    updateVacancy,
    deleteVacancy
}



