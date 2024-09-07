let dados = [
    {
        estado: "Acre",
        descricao: "Acre é uma das 27 unidades federativas do Brasil. Localiza-se no sudoeste da Região Norte, fazendo divisa com duas unidades federativas: Amazonas ao norte e Rondônia a leste.",
        link: "https://pt.wikipedia.org/wiki/Acre",
        tags: "sudoeste",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Bandeira_do_Acre.svg"
    },
    {
        estado: "Alagoas",
        descricao: "Alagoas é uma das 27 unidades federativas do Brasil, localizada na Região Nordeste. Sua capital é Maceió.",
        link: "https://pt.wikipedia.org/wiki/Alagoas",
        tags: "nordeste",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/8/88/Bandeira_de_Alagoas.svg"
    },
    {
        estado: "Amapá",
        descricao: "Amapá é uma das 27 unidades federativas do Brasil, localizada na Região Norte. Sua capital é Macapá.",
        link: "https://pt.wikipedia.org/wiki/Amap%C3%A1",
        tags: "norte",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Bandeira_do_Amap%C3%A1.svg"
    },
    {
        estado: "Amazonas",
        descricao: "Amazonas é um estado brasileiro localizado na Região Norte, sendo o maior estado do Brasil em extensão territorial.",
        link: "https://pt.wikipedia.org/wiki/Amazonas",
        tags: "norte",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Bandeira_do_Amazonas.svg"
    },
    {
        estado: "Bahia",
        descricao: "Bahia é um estado localizado na Região Nordeste do Brasil, sendo o quarto maior estado em população.",
        link: "https://pt.wikipedia.org/wiki/Bahia",
        tags: "nordeste",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/2/28/Bandeira_da_Bahia.svg"
    },
    {
        estado: "Ceará",
        descricao: "Ceará é um estado brasileiro localizado na Região Nordeste, conhecido por suas praias e a capital, Fortaleza.",
        link: "https://pt.wikipedia.org/wiki/Cear%C3%A1",
        tags: "nordeste",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Bandeira_do_Cear%C3%A1.svg"
    },
    {
        estado: "Distrito Federal",
        descricao: "Distrito Federal é a unidade federativa onde se localiza Brasília, a capital do Brasil.",
        link: "https://pt.wikipedia.org/wiki/Distrito_Federal_(Brasil)",
        tags: "centro-oeste",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Bandeira_do_Distrito_Federal_%28Brasil%29.svg"
    },
    {
        estado: "Espírito Santo",
        descricao: "Espírito Santo é um estado localizado na Região Sudeste do Brasil. Sua capital é Vitória.",
        link: "https://pt.wikipedia.org/wiki/Esp%C3%ADrito_Santo",
        tags: "sudeste",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/4/43/Bandeira_do_Esp%C3%ADrito_Santo.svg"
    },
    {
        estado: "Goiás",
        descricao: "Goiás é um estado brasileiro localizado na Região Centro-Oeste, com sua capital em Goiânia.",
        link: "https://pt.wikipedia.org/wiki/Goi%C3%A1s",
        tags: "centro-oeste",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/b/be/Flag_of_Goi%C3%A1s.svg"
    },
    {
        estado: "Maranhão",
        descricao: "Maranhão é um estado localizado na Região Nordeste do Brasil, com capital em São Luís.",
        link: "https://pt.wikipedia.org/wiki/Maranh%C3%A3o",
        tags: "nordeste",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/4/45/Bandeira_do_Maranh%C3%A3o.svg"
    },
    {
        estado: "Mato Grosso",
        descricao: "Mato Grosso é um estado localizado na Região Centro-Oeste do Brasil, conhecido pelo Pantanal e sua capital é Cuiabá.",
        link: "https://pt.wikipedia.org/wiki/Mato_Grosso",
        tags: "centro-oeste",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Bandeira_de_Mato_Grosso.svg"
    },
    {
        estado: "Mato Grosso do Sul",
        descricao: "Mato Grosso do Sul é um estado da Região Centro-Oeste do Brasil, com capital em Campo Grande.",
        link: "https://pt.wikipedia.org/wiki/Mato_Grosso_do_Sul",
        tags: "centro-oeste",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/6/64/Bandeira_de_Mato_Grosso_do_Sul.svg"
    },
    {
        estado: "Minas Gerais",
        descricao: "Minas Gerais é um estado localizado na Região Sudeste do Brasil, conhecido por suas montanhas e história colonial.",
        link: "https://pt.wikipedia.org/wiki/Minas_Gerais",
        tags: "sudeste",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/f/f4/Bandeira_de_Minas_Gerais.svg"
    },
    {
        estado: "Pará",
        descricao: "Pará é um estado da Região Norte do Brasil, com capital em Belém, famoso por sua culinária e pelo Círio de Nazaré.",
        link: "https://pt.wikipedia.org/wiki/Par%C3%A1",
        tags: "norte",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/0/02/Bandeira_do_Par%C3%A1.svg"
    },
    {
        estado: "Paraíba",
        descricao: "Paraíba é um estado brasileiro localizado na Região Nordeste, conhecido pelas praias e pela capital, João Pessoa.",
        link: "https://pt.wikipedia.org/wiki/Para%C3%ADba",
        tags: "nordeste",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Bandeira_da_Para%C3%ADba.svg"
    },
    {
        estado: "Paraná",
        descricao: "Paraná é um estado da Região Sul do Brasil, com capital em Curitiba, conhecido pelas Cataratas do Iguaçu.",
        link: "https://pt.wikipedia.org/wiki/Paran%C3%A1",
        tags: "sul",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/9/93/Bandeira_do_Paran%C3%A1.svg"
    },
    {
        estado: "Pernambuco",
        descricao: "Pernambuco é um estado da Região Nordeste do Brasil, com capital em Recife, famoso pelo frevo e pelo Carnaval.",
        link: "https://pt.wikipedia.org/wiki/Pernambuco",
        tags: "nordeste",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/5/59/Bandeira_de_Pernambuco.svg"
    },
    {
        estado: "Piauí",
        descricao: "Piauí é um estado brasileiro localizado na Região Nordeste, conhecido por suas praias e por ser o estado mais estreito do Brasil em sua faixa costeira.",
        link: "https://pt.wikipedia.org/wiki/Piau%C3%AD",
        tags: "nordeste",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/3/33/Bandeira_do_Piau%C3%AD.svg"
    },
    {
        estado: "Rio de Janeiro",
        descricao: "Rio de Janeiro é um estado brasileiro localizado na Região Sudeste, famoso por suas praias, montanhas e pela cidade do Rio de Janeiro.",
        link: "https://pt.wikipedia.org/wiki/Rio_de_Janeiro_(estado)",
        tags: "sudeste",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/7/73/Bandeira_do_estado_do_Rio_de_Janeiro.svg"
    },
    {
        estado: "Rio Grande do Norte",
        descricao: "Rio Grande do Norte é um estado da Região Nordeste do Brasil, com capital em Natal, conhecido por suas praias e pelo turismo.",
        link: "https://pt.wikipedia.org/wiki/Rio_Grande_do_Norte",
        tags: "nordeste",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/3/30/Bandeira_do_Rio_Grande_do_Norte.svg"
    },
    {
        estado: "Rio Grande do Sul",
        descricao: "Rio Grande do Sul é um estado da Região Sul do Brasil, com capital em Porto Alegre, conhecido por sua cultura gaúcha.",
        link: "https://pt.wikipedia.org/wiki/Rio_Grande_do_Sul",
        tags: "sul",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/6/63/Bandeira_do_Rio_Grande_do_Sul.svg"
    },
    {
        estado: "Rondônia",
        descricao: "Rondônia é um estado localizado na Região Norte do Brasil, com capital em Porto Velho, conhecido por sua biodiversidade.",
        link: "https://pt.wikipedia.org/wiki/Rond%C3%B4nia",
        tags: "norte",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Bandeira_de_Rond%C3%B4nia.svg"
    },
    {
        estado: "Roraima",
        descricao: "Roraima é o estado menos populoso do Brasil, localizado na Região Norte, com capital em Boa Vista.",
        link: "https://pt.wikipedia.org/wiki/Roraima",
        tags: "norte",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/9/98/Bandeira_de_Roraima.svg"
    },
    {
        estado: "Santa Catarina",
        descricao: "Santa Catarina é um estado da Região Sul do Brasil, conhecido por suas praias e pela capital, Florianópolis.",
        link: "https://pt.wikipedia.org/wiki/Santa_Catarina",
        tags: "sul",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Bandeira_de_Santa_Catarina.svg"
    },
    {
        estado: "São Paulo",
        descricao: "São Paulo é o estado mais populoso do Brasil e sua capital, São Paulo, é a maior cidade do país.",
        link: "https://pt.wikipedia.org/wiki/S%C3%A3o_Paulo_(estado)",
        tags: "sudeste",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Bandeira_do_estado_de_S%C3%A3o_Paulo.svg"
    },
    {
        estado: "Sergipe",
        descricao: "Sergipe é o menor estado do Brasil em extensão territorial, localizado na Região Nordeste, com capital em Aracaju.",
        link: "https://pt.wikipedia.org/wiki/Sergipe",
        tags: "nordeste",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/b/be/Bandeira_de_Sergipe.svg"
    },
    {
        estado: "Tocantins",
        descricao: "Tocantins é o estado mais novo do Brasil, localizado na Região Norte, com capital em Palmas.",
        link: "https://pt.wikipedia.org/wiki/Tocantins",
        tags: "norte",
        imagem: "https://cdn.pixabay.com/photo/2019/09/28/11/21/flag-4510519_960_720.jpg"
    },
];
