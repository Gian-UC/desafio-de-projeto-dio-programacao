// Matriz de objetos representando heróis
const herois = [
    { nome: "Capitã Marvel", xp: 800 },
    { nome: "Capitão America", xp: 1500 },
    { nome: "Homem de Ferro", xp: 3000 },
    { nome: "Thor", xp: 6500 },
    { nome: "Hulk", xp: 9000 },
    { nome: "Viuva Negra", xp: 12000 },
  ];
  
  // Função para determinar o nível do herói com base na XP
  function determinarNivel(xp) {
    let nivel;
  
    switch (true) {
      case xp < 1000:
        nivel = "Ferro";
        break;
      case xp >= 1001 && xp <= 2000:
        nivel = "Bronze";
        break;
      case xp >= 2001 && xp <= 5000:
        nivel = "Prata";
        break;
      case xp >= 6001 && xp <= 7000:
        nivel = "Ouro";
        break;
      case xp >= 7001 && xp <= 8000:
        nivel = "Platina";
        break;
      case xp >= 8001 && xp <= 9000:
        nivel = "Ascendente";
        break;
      case xp >= 9001 && xp <= 10000:
        nivel = "Imortal";
        break;
      case xp >= 10001:
        nivel = "Radiante";
        break;
      default:
        nivel = "Nível não determinado";
    }
  
    return nivel;
  }
  
  // Iterar sobre a matriz de heróis e exibir o nível de cada um
  for (let i = 0; i < herois.length; i++) {
    const heroi = herois[i];
    const nivelHeroi = determinarNivel(heroi.xp);
    console.log(`O Herói de nome ${heroi.nome} está no nível de ${nivelHeroi}`);
  }
  