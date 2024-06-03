const arrayCaes = [
    {
        imagem: "img src= imagens/RAUL.png",
        titulo: "Ramiro",
        descricao1: "Raça: Pit Bull",
        descricao2: "Idade: Adulto",
        descricao3: "Gênero: Macho",
        descricao4: "Porte: Grande",
        descricao5: "Castrado:SIM",
        descricao6: "Temperamento: Brincalhão",
        linkAdotar: "<a href='entre.html'>Quero adotar</a>"

    },
    {
        imagem: "img src= imagens/LUIZ.png",
        titulo: "Luiz Saurez",
        descricao1: "Raça: SRD",
        descricao2:"Idade: 2 anos",
        descricao3: "Gênero: Macho",
        descricao4:"Porte: Médio",
        descricao5: "Castrado:Sim",
        descricao6:"Temperamento: Dócil",
        linkAdotar: "<a href='entre.html'>Quero adotar</a>"
    },


    {
        imagem: "imagens/NHOQUE.png",
        titulo: "Nhoque",
        descricao1: "Raça: SRD",
        descricao2: "Idade: 7 anos",
        descricao3: "Gênero: Macho",
        descricao4: "Porte: Grande",
        descricao5: "Castrado:Sim",
        descricao6: "Temperamento: Dócil",
        linkAdotar: "<a href='entre.html'>Quero adotar</a>"
    },

    {
        imagem: "imagens/CORONEL.png",
        titulo: "Coronel",
        descricao1: "Raça: SRD",
        descricao2: "Idade: 7 anos",
        descricao3: "Gênero: Macho",
        descricao4: "Porte: Grande",
        descricao5: "Castrado:Sim",
        descricao6: "Temperamento: Bravo",
        linkAdotar: "<a href='entre.html'>Quero adotar</a>"

    },

    {
        imagem: "imagens/AISHA.png",
        titulo: "Aisha",
        descricao1: "Raça: SRD",
        descricao2: "Idade: 7 anos",
        descricao3: "Gênero: Fêmea",
        descricao4: "Porte: Médio",
        descricao5: "Castrado:Sim",
        descricao6: "Temperamento: Dócil",
        linkAdotar: "<a href='entre.html'>Quero adotar</a>"

    },

    {
        imagem: "imagens/JUBILEU.png",
        titulo: "Jubileu",
        descricao1: "Raça: SRD",
        descricao2: "Idade: 5 anos",
        descricao3: "Gênero: Macho",
        descricao4: "Porte: Médio",
        descricao5: "Castrado:Sim",
        descricao6: "Temperamento: Medroso",
        linkAdotar: "<a href='entre.html'>Quero adotar</a>"

    },

    {
        imagem: "imagens/RAUL.png",
        titulo: "Raul Gil",
        descricao1: "Raça: SRD",
        descricao2: "Idade: Adulto",
        descricao3: "Gênero: Macho",
        descricao4: "Porte: Médio",
        descricao5: "Castrado:Sim",
        descricao6: "Temperamento: Bravo",
        linkAdotar: "<a href='entre.html'>Quero adotar</a>"

    },
        
    {
        imagem: "imagens/TUCA.png",
        titulo: "Tuca",
        descricao1: "Raça: SRD",
        descricao2: "Idade: 4 anos",
        descricao3: "Gênero: Fêmea",
        descricao4: "Porte: Médio",
        descricao5: "Castrado:Sim",
        descricao6: "Temperamento: Dócil",
        linkAdotar: "<a href='entre.html'>Quero adotar</a>"

    }
]

for (let i = 0; i < arrayCaes.length; i++) {
    const divCaes = document.createElement('div')    

    divCaes.classList.add('caes-card')
    //falta adicionar a img
    
divCaes.innerHTML = `

<h2>${arrayCaes[i].titulo}</h2>
<ul>  
<li> ${arrayCaes[i].descricao1}</li>
<li> ${arrayCaes[i].descricao2}</li>
<li> ${arrayCaes[i].descricao3}</li>
<li> ${arrayCaes[i].descricao4}</li>
<li> ${arrayCaes[i].descricao5}</li>
<li> ${arrayCaes[i].descricao6}</li>
</ul>
<div class ="linkAdotar"
<p> ${arrayCaes[i].linkAdotar}</p>
</div>`

const main = document.querySelector('main')
main.appendChild(divCaes)
}