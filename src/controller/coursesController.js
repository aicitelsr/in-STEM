const CourseModel = require('../models/CoursesModel')
const jwt = require('jsonwebtoken')
const SECRET = `${process.env.SECRET}`

const getAllCourses = async (req, res) => {
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

            const allCourses = await CourseModel.find()
            res.status(200).json(allCourses)
        })

    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message })
    }
}

const getCourseById = async (req, res) => {
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
            const findCourse = await CourseModel.findById(id)
            res.status(200).json(findCourse)
        })

    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message })
    }
}

const getCourseByCategory = async (req, res) => {
    try {
        const authHeader = req.get('authorization')

        if (!authHeader) {
            return res.status(401).send('Pass the token.')
        }
        const token = authHeader.split(' ')[1]

        await jwt.verify(token, SECRET, async function (err) {
            if (err) {
                return res.status(403).send('Enter a valid token.')
            }
            const { categoria } = req.query;

            const findCourse = await CourseModel.find({ categoria: categoria });
            res.status(200).json(findCourse)
        })

    } catch (error) {
        console.error(error);;
        res.status(500).json({ message: error.message });
    }
}

const createCourse = async (req, res) => {
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

            const newCourse = new CourseModel({
                tituloCurso, categoria, autorPostagem, descrição, inscriçõesAbertas, inscriçõesEncerradas, infosAdicionais
            })
    
            const savedCurso = await newCourse.save()
    
            res.status(201).json(savedCurso)
        })

    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message })
    }
}

const updateCourse = async (req, res) => {
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

        const updatingCurso = await CourseModel.
            findByIdAndUpdate(req.params.id, {
                tituloCurso,
                categoria,
                autorPostagem,
                descrição,
                inscriçõesAbertas,
                inscriçõesEncerradas,
                infosAdicionais
            })

        const courseUpdated = await CourseModel.findById(req.params.id)
        res.status(200).json(courseUpdated)
})
        
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message })
    }
}

const deleteCourse = async (req, res) => {
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
    const deletedCurso = await CourseModel.findByIdAndDelete(id)
    const message = `O curso com o nome ${deletedCurso.tituloCurso} foi deletado com sucesso`
    res.status(200).json({ message })
})
       
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message })
    }
}

const openCourses = async (req, res) => {

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

            const findCourse = await CourseModel.find({ inscriçõesAbertas: inscriçõesAbertas });
            res.status(200).json(findCourse)
        })

    } catch (error) {
        console.error(error);;
        res.status(500).json({ message: error.message });
    }
}


module.exports =
{
    getAllCourses,
    getCourseById,
    getCourseByCategory,
    createCourse,
    updateCourse,
    deleteCourse,
    openCourses
}