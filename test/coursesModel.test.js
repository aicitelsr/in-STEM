const Course = require('../src/models/cursosModel')

describe('Testing Model Courses', () => {
    const courses = new Course({
        tituloCurso: "Desenvolvimento Back-End",
        categoria: "Tecnologia",
        autorPostagem: "usuária x",
        descrição: "Descrição teste",
        inscriçõesAbertas: true,
        inscriçõesEncerradas: false,
        infosAdicionais: "Informações teste"
    });

    test('Must call the schema and return a course', () => {
        expect(courses.categoria).toBe('Tecnologia');
    });

    test('Must save a new course in the database', () => {
        courses.save().then((data) => {
            expect(data.autorPostagem).toBe('usuária x')
        });
    });

    test('Must delete a course', () => {
        courses.deleteOne().then((data) => {
            expect(data).toBe(null)
        });
    });
});
