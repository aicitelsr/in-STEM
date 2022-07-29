const Vagas = require('../src/models/vagasModel')

describe('Teste do model de vagas', () => {
    const vaga = new Vagas({
        categoria: "Tecnologia",
        tituloVaga: "Estágio em desenvolvimento de software",
        autorPostagem: "Empresa leadtech",
        descriçãoVaga: "Vaga de estágio no planejamento, modelagem e desenvolvimento de sistemas",
        requisitos: "Estar cursando graduação em engenharia da computação, ciência da computação, análise e desenvolvimento de sistemas e afins",
        dataDePostagem: "2022-07-30",
        vagaDisponível: true,
    });
    test('deve chamar o schema e retornar uma vaga', () => {
        expect(vaga.categoria).toBe("Tecnologia")
    });
    test('Deve salvar no banco de dados a nova vaga', () => {
        vaga.save().then((dados) => {
            expect(dados.tituloVaga).toBe("Empresa leadtech")
        });
    })
    test('Deve deletar a vaga do banco querida', () => {
        vaga.deleteOne().then((dados) => {
            expect(dados).toBe(null)
        });
    });
});

// const vagas = require('../src/models/vagasModel')
//     -
//     describe('Vacancy model test', () => {

//         const jobOpportunity = new vagas({
//             categoria: "Tecnologia",
//             tituloVaga: "Estágio em desenvolvimento de software",
//             autorPostagem: "Empresa leadtech",
//             descriçãoVaga: "Vaga de estágio no planejamento, modelagem e desenvolvimento de sistemas",
//             requisitos: "Estar cursando graduação em engenharia da computação, ciência da computação, análise e desenvolvimento de sistemas e afins",
//             dataDePostagem: "29-07-2022"
//         });
//         test('must call the schema and return a vacancy', () => {
//             expect(jobOpportunity.categoria).toBe("Tecnologia")
//         });

//         // it('Deve salvar no banco de dados a vaga - POST', () => {
//         //     jobOpportunity.save().then((dados) => {
//         //         expect(dados.tituloVaga).toBe("Estágio em desenvolvimento de software");
//         //     });
//         });
//     // });