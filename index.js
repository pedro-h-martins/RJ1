const personagemTemplate = {
    nome: 'Steve Rogers',
    codinome: 'Capitão America',
    armaPrimaria: 'Escudo',
    armaSecundaria: '',
    velocidade: 72,
    forca: 75,
    resistencia: 80,
    descricao: function() {
        return "Nome do Personagem: " + this.nome + '\n'
            + "Codinome do Personagem: " + this.codinome + '\n'
            + "Arma Primária do Personagem: " + this.armaPrimaria + '\n'
            + "Arma Secundária do Personagem: " + this.armaSecundaria + '\n'
            + "Nivel da Força do Personagem: " + this.forca + '\n'
            + "Nivel da Velocidade do Personagem: " + this.velocidade + '\n'
            + "Nivel da Resistência do Personagem: " + this.resistencia + '\n';
    }
}

//Para não criar diversas vezes a mesma estrutura, eu criei essa função
//no qual ela mantem as chaves, porém, pode ser mudado os valores.

function criarPersonagem(customizacao) {
    const personagem = Object.assign({}, personagemTemplate) //Graças ao método Object.assign é possivel 
                                                            // reutilizar a chave, porém, mudar o valor.
    Object.assign(personagem, customizacao);
    return personagem;
}

//Isso é o array dos herois, com a informação de cada um deles.
const herois = [
    criarPersonagem({ nome: 'Tony Stark', codinome: 'Homem de Ferro', armaPrimaria: 'Atirador laser do pulso', velocidade: 75, forca: 70, resistencia: 65 }),
    criarPersonagem({ nome: 'Bruce Banner', codinome: 'Hulk', armaPrimaria: 'Bater de palmas potente', armaSecundaria: 'Chute forte', velocidade: 70, forca: 90, resistencia: 85 }),
    criarPersonagem({ nome: 'Clint Barton', codinome: 'Gavião Arqueiro', armaPrimaria: 'Flechas comuns', armaSecundaria: 'Flechas explosivas', velocidade: 60, forca: 70, resistencia: 55 }),
    criarPersonagem({ nome: 'Thanos', codinome: 'Thanos', armaPrimaria: 'Manopla do infinito', velocidade: 80, forca: 90, resistencia: 85 }),
    criarPersonagem({ nome: 'Thor Odinson', codinome: 'Thor', armaPrimaria: 'Machado (StormBreaker)', velocidade: 78, forca: 85, resistencia: 70 }),
    criarPersonagem({ nome: 'Natasha Romanoff', codinome: 'Viuva Negra', armaPrimaria: 'Duas pistolas', velocidade: 70, forca: 60, resistencia: 60 }),
    criarPersonagem({ nome: 'James Rhodes', codinome: 'Máquina de Combate', armaPrimaria: 'Armas de fogo da armadura', velocidade: 70, forca: 70, resistencia: 60 })
];


//O primeiro for loop ele acesssa os registros da lista de herois.
for (const [i, p1] of herois.entries()) {

    for (const p2 of herois.slice(i + 1)) { //Isso é necessário para que ñ haja duplicatas nas 
                                            // comparações.
        console.log(`Comparação entre ${p1.codinome} e ${p2.codinome}:`);
        console.log(`\nDescrição de ${p1.codinome}:\n${p1.descricao()}`);
        console.log(`\nDescrição de ${p2.codinome}:\n${p2.descricao()}`);
        
        function compararAtributo(atributo) {
            if (p1[atributo] > p2[atributo]) {
                console.log(`${p1.codinome} vence em ${atributo} (${p1[atributo]} > ${p2[atributo]})`);
            } else if (p1[atributo] < p2[atributo]) {
                console.log(`${p2.codinome} vence em ${atributo} (${p2[atributo]} > ${p1[atributo]})`);
            } else {
                console.log(`Empate em ${atributo} (${p1[atributo]} = ${p2[atributo]})`);
            }
        }

        compararAtributo('forca');
        compararAtributo('velocidade');
        compararAtributo('resistencia');
        console.log('\n');
    }
}