const CursoModel = require('../models/cursosModel')
const jwt = require('jsonwebtoken')
const SECRET = `${process.env.SECRET}`

const getAllCursos = async (req, res) => {
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

            const allCursos = await CursoModel.find()
            res.status(200).json(allCursos)
        })

    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message })
    }
}

const getCursoById = async (req, res) => {
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

            const { id } = req.params
            const findCurso = await CursoModel.findById(id)
            res.status(200).json(findCurso)
        })

    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message })
    }
}

const getCursoByCategory = async (req, res) => {
    try {
        const authHeader = req.get('authorization')

        if (!authHeader) {
            return res.status(401).send('Informe um token.')
        }
        const token = authHeader.split(' ')[1]

        await jwt.verify(token, SECRET, async function (err) {
            if (err) {
                return res.status(403).send('Informe um token váilido.')
            }
            const { categoria } = req.query;

            const findCurso = await CursoModel.find({ categoria: categoria });
            res.status(200).json(findCurso)
        })

    } catch (error) {
        console.error(error);;
        res.status(500).json({ message: error.message });
    }
}

const createCurso = async (req, res) => {
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

            const { tituloCurso, categoria, autorPostagem, descrição, inscriçõesAbertas, inscriçõesEncerradas, infosAdicionais } = req.body

            const newCurso = new CursoModel({
                tituloCurso, categoria, autorPostagem, descrição, inscriçõesAbertas, inscriçõesEncerradas, infosAdicionais
            })
    
            const savedCurso = await newCurso.save()
    
            res.status(201).json(savedCurso)
        })

    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message })
    }
}

const updateCurso = async (req, res) => {
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

    const { tituloCurso, categoria, autorPostagem, descrição, inscriçõesAbertas, inscriçõesEncerradas, infosAdicionais } = req.body

        const updatingCurso = await CursoModel.
            findByIdAndUpdate(req.params.id, {
                tituloCurso,
                categoria,
                autorPostagem,
                descrição,
                inscriçõesAbertas,
                inscriçõesEncerradas,
                infosAdicionais
            })

        const cursoUpdated = await CursoModel.findById(req.params.id)
        res.status(200).json(cursoUpdated)
})
        
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message })
    }
}

const deleteCurso = async (req, res) => {
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

    const { id } = req.params
    const deletedCurso = await CursoModel.findByIdAndDelete(id)
    const message = `O curso com o nome ${deletedCurso.tituloCurso} foi deletado com sucesso`
    res.status(200).json({ message })
})
       
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message })
    }
}

const getCursosAbertos = async (req, res) => {

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
            
            const { inscriçõesAbertas } = req.query

            const findCurso = await CursoModel.find({ inscriçõesAbertas: inscriçõesAbertas });
            res.status(200).json(findCurso)
        })

    } catch (error) {
        console.error(error);;
        res.status(500).json({ message: error.message });
    }
}


module.exports =
{
    getAllCursos,
    getCursoById,
    getCursoByCategory,
    createCurso,
    updateCurso,
    deleteCurso,
    getCursosAbertos
}