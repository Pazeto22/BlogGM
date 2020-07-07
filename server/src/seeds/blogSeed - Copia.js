const seeder = require("mongoose-seed");

const categoriasIds = [
  "5ef2a733ed59a23e5cbcb161",
  "5ef2a733ed59a23e5cbcb162",
  "5ef2a733ed59a23e5cbcb163",
  "5ef2a733ed59a23e5cbcb164",
  "5ef2a733ed59a23e5cbcb165",
  "5ef2a733ed59a23e5cbcb166",
];

const tagIds = [
  "5ef8eb540504f628ccc2361d",
  "5ef8eb540504f628ccc2361e",
  "5ef8eb540504f628ccc2361f",
  "5ef8eb540504f628ccc23620",
  "5ef8eb540504f628ccc23621",
  "5ef8eb540504f628ccc23622",
  "5ef8eb540504f628ccc23623",
  "5ef8eb540504f628ccc23624",
  "5ef8eb540504f628ccc23625",
  "5ef8eb540504f628ccc23626",
  "5ef8eb540504f628ccc23627",
  "5ef8eb540504f628ccc23628",
  "5ef8eb540504f628ccc23629",
  "5ef8eb540504f628ccc2362a",
  "5ef8eb540504f628ccc2362b",
  "5ef8eb540504f628ccc2362c",
  "5ef8eb540504f628ccc2362d",
  "5ef8eb540504f628ccc2362e",
  "5ef8eb540504f628ccc2362f",
  "5ef8eb540504f628ccc23630",
  "5ef8eb540504f628ccc23631",
  "5ef8eb540504f628ccc23632",
];

const userIds = ["5ef8ec23cc1aae44a0f89adf", "5ef8ec73f1dd73416016d720"];

const postsIds = [
  "5ef8ec23cc1aae44a0f89adb",
  "5ef8ec23cc1aae44a0f89adc",
  "5ef8ec23cc1aae44a0f89add",
  "5ef8ec23cc1aae44a0f89ade",
];

// Connect to MongoDB via Mongoose
seeder.connect("mongodb://localhost:27017/BlogGMRelacional", () => {
  // Load Mongoose models
  seeder.loadModels([
    "src/models/Categoria.js",
    "src/models/SubCategoria.js",
    "src/models/Usuario.js",
    "src/models/Tag.js",
    "src/models/Post.js",
    "src/models/PostCategoria.js",
    "src/models/PostTag.js",
  ]);

  // Clear specified collections
  seeder.clearModels(
    [
      "Categoria",
      "SubCategoria",
      "Usuario",
      "Tag",
      "Post",
      "PostCategoria",
      "PostTag",
    ],
    () => {
      // Callback to populate DB once collections have been cleared
      seeder.populateModels(data, () => {
        seeder.disconnect();
      });
    }
  );
});

// Data array containing seed data - documents organized by Model
var data = [
  {
    model: "Categoria",
    documents: [
      {
        _id: categoriasIds[0],
        titulo: "Análises",
      },
      {
        _id: categoriasIds[1],
        titulo: "Notícias",
      },
      // Subcategorias de notícias
      {
        _id: categoriasIds[2],
        titulo: "Games",
        isSub: true,
      },
      {
        _id: categoriasIds[3],
        titulo: "Smartphones",
        isSub: true,
      },
      {
        _id: categoriasIds[4],
        titulo: "Tecnologia",
        isSub: true,
      },
      {
        _id: categoriasIds[5],
        titulo: "Entretenimento",
        isSub: true,
      },
    ],
  },
  {
    model: "SubCategoria",
    documents: [
      {
        catPai: categoriasIds[1],
        catFilha: categoriasIds[2],
      },
      {
        catPai: categoriasIds[1],
        catFilha: categoriasIds[3],
      },
      {
        catPai: categoriasIds[1],
        catFilha: categoriasIds[4],
      },
      {
        catPai: categoriasIds[1],
        catFilha: categoriasIds[5],
      },
    ],
  },
  {
    model: "Usuario",
    documents: [
      {
        _id: userIds[0],
        nome: "Matheus Ferreira",
        username: "MatheusFerreira71",
        email: "matheus.ferreira48@fatec.sp.gov.br",
        bio:
          "Administrador, analista de games, criador de conteúdo, influenciador...",
        avatar:
          "https://avatars0.githubusercontent.com/u/44984801?s=460&u=93d692bc3440e7773b20c01c31d9a0e09c21a9e4&v=4",
      },
      {
        _id: userIds[1],
        nome: "Gustavo Pazeto",
        username: "Pazeto22",
        email: "gustavo.ferreira@fatec.sp.gov.br",
        bio:
          "Administrador, analista de games, criador de conteúdo, influenciador...",
        avatar:
          "https://avatars2.githubusercontent.com/u/50267466?s=460&u=39392abeca1a060f0773acbdbfd18bfb54f48bc1&v=4",
      },
    ],
  },
  {
    model: "Tag",
    documents: [
      {
        _id: tagIds[0],
        titulo: "RPG",
      },
      {
        _id: tagIds[1],
        titulo: "JRPG",
      },
      {
        _id: tagIds[2],
        titulo: "Atlus",
      },
      {
        _id: tagIds[3],
        titulo: "P Studio",
      },
      {
        _id: tagIds[4],
        titulo: "Persona",
      },
      {
        _id: tagIds[5],
        titulo: "Persona 5",
      },
      {
        _id: tagIds[6],
        titulo: "Ação",
      },
      {
        _id: tagIds[7],
        titulo: "Aventura",
      },
      {
        _id: tagIds[8],
        titulo: "Terror",
      },
      {
        _id: tagIds[9],
        titulo: "Resident Evil",
      },
      {
        _id: tagIds[10],
        titulo: "Resident Evil 3",
      },
      {
        _id: tagIds[11],
        titulo: "Capcom",
      },
      {
        _id: tagIds[12],
        titulo: "Activision",
      },
      {
        _id: tagIds[13],
        titulo: "Crash Bandicoot",
      },
      {
        _id: tagIds[14],
        titulo: "Crash Bandicoot 4",
      },
      {
        _id: tagIds[15],
        titulo: "Marvel",
      },
      {
        _id: tagIds[16],
        titulo: "Vingadores",
      },
      {
        _id: tagIds[17],
        titulo: "Marvel's Avengers",
      },
      {
        _id: tagIds[18],
        titulo: "Square Enix",
      },
      {
        _id: tagIds[19],
        titulo: "Crystal Dynamics",
      },
      {
        _id: tagIds[20],
        titulo: "Crystal Northwest",
      },
      {
        _id: tagIds[21],
        titulo: "Eidos Montréal",
      },
    ],
  },
  {
    model: "Post",
    documents: [
      {
        _id: postsIds[0],
        titulo: "Review - Persona 5 Royal",
        tituloLower: "review - persona 5 royal",
        descricao:
          "O passado e o futuro rei dos JRPGs rouba nossos corações novamente",
        corpo:
          "Persona 5 já era um forte candidato à liderança de melhor JRPG de todos os tempos, e Royal realmente me faz pensar em quem mais poderia competir. A excelente história e seus adoráveis ​​personagens multidimensionais, juntamente com o desafiante combate tático, estão ainda mais refinados e voltam para outra rodada com novas surpresas e novos amigos. Existem novas áreas para explorar e novas reviravoltas para te deixar de queixo caído. Muito pouco foi deixado intocado, e quase tudo o que foi tocado mudou para melhor. Os Phantom Thieves roubaram meu coração mais uma vez -- e eu realmente não o quero de volta.",
        banner: "https://kg-portal.ru/img/78667/main.jpg",
        usuario: userIds[1],
      },
      {
        _id: postsIds[1],
        titulo: "Review - Resident Evil 3 Remake",
        tituloLower: "review - resident evil 3 remake",
        descricao:
          "Jill Valentine e Nemesis continuam sendo a melhor dupla de Raccoon City",
        corpo:
          "É óbvio que se você gosta de jogos do gênero, Resident Evil 3 (2020) precisa estar na sua lista do que jogar ainda este ano. Nemesis voltou para nos lembrar da razão pela qual é lembrado com tanto carinho pelos fãs e Jill Valentine, mais determinada e habilidosa do que em qualquer outro game, mostrou que continua sendo uma das, senão a melhor personagens da franquia. Com uma ambientação fenomenal, história devidamente atualizada, ritmo mais dinâmico e personagens mais humanos, a nova versão do clássico de 1999 conclui a recriação da trilogia clássica com excelência, ainda que peque em alguns aspectos de mecânica e, principalmente, pela ausência de mais enigmas, marca registrada de Resident Evil.",
        banner: "https://img.ibxk.com.br/2020/03/30/30023105944032.jpg",
        usuario: userIds[0],
      },
      {
        _id: postsIds[2],
        titulo: "Crash Bandicoot 4 vai honrar os clássicos, promete estúdio",
        tituloLower:
          "crash bandicoot 4 vai honrar os clássicos, promete estúdio",
        descricao:
          "'Maior, melhor e mais épico' do que tudo visto na série, disse Paul Yan",
        corpo:
          "Crash Bandicoot 4: It's About Time é o tão esperado jogo inédito da série, que voltou com tudo após as remasterizações da trilogia clássica e dos jogos de corrida.",
        banner:
          "https://sm.ign.com/ign_br/screenshot/default/cb4-screenshot-reveal-11_nhcd.jpg",
        usuario: userIds[0],
      },
      {
        _id: postsIds[3],
        titulo: "Marvel's Avengers nos fará questionar quem são os 'heróis'",
        tituloLower:
          "marvel's avengers nos fará questionar quem são os 'heróis'",
        descricao:
          "Jogo dos Vingadores será uma história de origem da Kamala Khan",
        corpo:
          "Marvel's Avengers, o jogo dos Vingadores, não vai contar apenas mais uma história na qual os heróis salvam o mundo de um vilão que quer dominá-lo. Aparentemente, os jogadores serão levados a questionar os heróis com frequência. Aliás, refletir sobre o próprio conceito de herói",
        banner: "https://img.ibxk.com.br/2020/06/24/24114107206409.jpg",
        usuario: userIds[1],
      },
    ],
  },
  {
    model: "PostCategoria",
    documents: [
      {
        catId: categoriasIds[0],
        postId: postsIds[0],
      },
      {
        catId: categoriasIds[0],
        postId: postsIds[1],
      },
      {
        catId: categoriasIds[1],
        postId: postsIds[2],
      },
      {
        catId: categoriasIds[2],
        postId: postsIds[2],
      },
      {
        catId: categoriasIds[1],
        postId: postsIds[3],
      },
      {
        catId: categoriasIds[2],
        postId: postsIds[3],
      },
    ],
  },
  {
    model: "PostTag",
    documents: [
      {
        tagId: tagIds[0],
        postId: postsIds[0],
      },
      {
        tagId: tagIds[1],
        postId: postsIds[0],
      },
      {
        tagId: tagIds[2],
        postId: postsIds[0],
      },
      {
        tagId: tagIds[3],
        postId: postsIds[0],
      },
      {
        tagId: tagIds[4],
        postId: postsIds[0],
      },
      {
        tagId: tagIds[5],
        postId: postsIds[0],
      },
      {
        tagId: tagIds[6],
        postId: postsIds[1],
      },
      {
        tagId: tagIds[7],
        postId: postsIds[1],
      },
      {
        tagId: tagIds[8],
        postId: postsIds[1],
      },
      {
        tagId: tagIds[9],
        postId: postsIds[1],
      },
      {
        tagId: tagIds[10],
        postId: postsIds[1],
      },
      {
        tagId: tagIds[11],
        postId: postsIds[1],
      },
      {
        tagId: tagIds[7],
        postId: postsIds[2],
      },
      {
        tagId: tagIds[12],
        postId: postsIds[2],
      },
      {
        tagId: tagIds[13],
        postId: postsIds[2],
      },
      {
        tagId: tagIds[14],
        postId: postsIds[2],
      },
      {
        tagId: tagIds[6],
        postId: postsIds[3],
      },
      {
        tagId: tagIds[7],
        postId: postsIds[3],
      },
      {
        tagId: tagIds[15],
        postId: postsIds[3],
      },
      {
        tagId: tagIds[16],
        postId: postsIds[3],
      },
      {
        tagId: tagIds[17],
        postId: postsIds[3],
      },
      {
        tagId: tagIds[18],
        postId: postsIds[3],
      },
      {
        tagId: tagIds[19],
        postId: postsIds[3],
      },
      {
        tagId: tagIds[20],
        postId: postsIds[3],
      },
      {
        tagId: tagIds[21],
        postId: postsIds[3],
      },
    ],
  },
];
