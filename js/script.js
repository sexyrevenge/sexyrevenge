var pokemon = 
{
    bulbasaur: { pokeball: 450, greatball: 300, superball: 108, ultraball: 50, janguruball:35},
    ivysaur: { greatball: 800, superball: 290, ultraball: 140, janguruball:100},
    venusaur: {ultraball: 300, janguruball:210, heavyball: 210},
    charmander: {pokeball: 450, greatball: 300, superball: 108, ultraball: 300, maguball: 35},
    charmeleon: {greatball: 800, superball: 290, ultraball: 140, maguball: 100},
    charizard: {ultraball: 300, maguball: 210, soraball: 210},
    squirtle: { pokeball: 450, greatball: 300, superball: 108, ultraball: 50, netball:35},
    wartortle: { greatball: 800, superball: 290, ultraball: 140, netball:100},
    blastoise: {ultraball: 300, netball: 210, heavyball: 210},
    caterpie: { pokeball: 1, greatball: 1, superball: 1, ultraball: 1, netball: 1},
    metapod: { pokeball: 38, greatball: 25, superball: 9, ultraball: 5, netball: 3},
    butterfree: { pokeball: 300, greatball: 200, superball: 72, ultraball: 34, netball: 24, soraball: 24, fastball: 24},
    pidgey: { pokeball: 1, greatball: 1, superball: 1, ultraball: 1, soraball: 1, fastball: 1, yumeball: 1},
    pidgeotto: { pokeball: 450, greatball: 300, superball: 108, ultraball: 50, soraball: 35, fastball: 35, yumeball: 35},
    pidgeot: { ultraball: 200, soraball: 140, fastball: 140, yumeball: 140},
    rattata: { pokeball: 1, greatball: 1, superball: 1, ultraball: 1, yumeball: 1},
    raticate: { pokeball: 300, greatball: 200, superball: 72, ultraball: 34, yumeball: 24},
    spearow: { pokeball: 15, greatball: 10, superball: 4, ultraball: 2, yumeball: 2, soraball: 2, fastball: 2},
    fearow: { greatball: 510, superball: 190, ultraball: 90, yumeball: 60, soraball: 60, fastball: 60},
    ekans: { pokeball:45, greatball: 30, superball: 11, ultraball: 5, janguruball: 4, fastball: 4},
    arbok: { greatball: 300, superball: 108, ultraball: 50, janguruball: 35},
    pikachu: { greatball: 800, superball: 290, ultraball: 140, tinkerball: 100, fastball: 100},
    raichu: { ultraball: 300, tinkerball: 210, fastball: 210},
    sandshrew: { pokeball: 150, greatball: 100, superball: 36, ultraball: 17, maguball: 12},
    sandslash: { superball: 400, ultraball: 190, maguball: 130},
    nidoranfe: { pokeball: 19, greatball: 13, superball: 5, ultraball: 3, janguruball: 2},
    nidorina: { pokeball: 338, greatball: 225, superball: 81, ultraball: 38, janguruball: 27},
    nidoqueen: { saffariball: 600},
    nidoranma: { pokeball: 19, greatball: 13, superball: 5, ultraball: 3, janguruball: 2},
    nidorino: { pokeball: 338, greatball: 225, superball: 81, ultraball: 38, janguruball: 27},
    nidoking: { saffariball: 600},
    clefairy: { greatball: 800, superball: 290, ultraball: 140, taleball: 100},
    clefable: { ultraball: 300, taleball: 210},
    vuplix: { pokeball: 150, greatball: 100, superball: 36, ultraball: 17, maguball: 12},
    ninetales: {ultraball: 190, maguball: 130, fastball: 130},
    jigglypuff: {greatball: 800, superball: 290, ultraball: 140, taleball: 100, yumeball: 100},
    wigglytuff: { ultraball: 300, taleball: 210, yumeball: 210},
    zubat: {pokeball: 18, greatball: 12, superball: 5, ultraball: 2, janguruball: 2, soraball: 2},
    golbat: { greatball: 300, superball: 108, ultraball: 50, janguruball: 35, soraball: 35, fastball: 35},
    oddish: {pokeball: 1, greatball: 1, superball: 1, ultraball: 1, janguruball: 1},
    gloom: {pokeball: 338, greatball: 225, superball: 81, ultraball: 38, janguruball: 27},
    vileplume: {superball: 430, ultraball: 200, janguruball: 140},
    paras: {pokeball: 9, greatball: 6, superball: 3, ultraball: 1, netball: 1, janguruball: 1},
    parasect: {greatball: 730, superball: 260, ultraball: 130, netball: 90, janguruball: 90},
    venonat: {pokeball: 225, greatball: 150, superball: 54, ultraball: 25, netball: 18, janguruball: 18},
    venomoth: {greatball: 730, superball: 260, ultraball: 130, netball: 90, janguruball: 90},
    diglett: {pokeball: 30, greatball: 20, superball: 8, ultraball: 4, maguball: 3, fastball: 3},
    dugtrio: {greatball: 300, superball: 108, ultraball: 50, maguball: 35, fastball: 35},
    meowth: {pokeball: 45, greatball: 30, superball: 11, ultraball: 5, yumeball: 4},
    persian: {greatball: 300, superball: 108, ultraball: 50, yumeball: 35, fastball: 35},
    psyduck: {pokeball: 225, greatball: 150, superball: 54, ultraball: 25, janguruball: 18}, 
    golduck: {superball: 420, ultraball: 200, netball: 140},
    mankey: {pokeball: 45, greatball: 30, superball: 11, ultraball: 5, duskball: 4},
    primeape: {greatball: 730, superball: 260, ultraball: 130, duskball: 90},
    growlithe: {pokeball: 530, greatball: 350, superball: 130, ultraball: 60, maguball: 50, fastball: 50},
    arcanine: {ultraball: 980, maguball: 690, heavyball: 690, fastball: 690},
    poliwag: {pokeball: 12, greatball: 8, superball: 3, ultraball: 2, netball: 1},
    poliwhirl: {pokeball: 450, greatball: 300, superball: 108, ultraball: 50, netball: 35},
    poliwrath: {superball: 470, ultraball: 220, netball: 160, duskball: 160},
    abra: {pokeball: 120, greatball: 80, superball: 29, ultraball: 14, yumeball: 10},
    kadabra:{greatball: 580, superball: 210, ultraball: 100, yumeball: 70},
    alakazam: {ultraball: 270, yumeball: 190},
    machop: {pokeball: 300, greatball: 200, superball: 72, ultraball: 34, duskball: 24},
    machoke: {greatball: 700, superball: 250, ultraball: 120, duskball: 90},
    machamp: {ultraball: 350, duskball: 250, heavyball: 250, fastball: 250},
    bellsprout: {pokeball: 12, greatball: 8, superball: 3, ultraball: 3, janguruball: 1},
    weepinbell: {pokeball: 338, greatball: 225, superball: 81, ultraball: 38, janguruball: 27},
    victreebell: {superball: 430, ultraball: 200, janguruball: 140},
    tentacool: {pokeball: 45, greatball: 30, superball: 11, ultraball: 5, netball: 4, janguruball: 4},
    tentacruel: {ultraball: 250, netball: 180, janguruball: 180},
    geodude: {pokeball: 45, greatball: 30, superball: 11, ultraball: 5, duskball: 4, maguball: 4},
    graveler: {greatball: 500, superball: 180, ultraball: 90, duskball: 60, maguball: 60, heavyball: 60},
    golem: {ultraball: 250, duskball: 180, maguball: 180, heavyball: 180},
    ponyta: {pokeball: 225, greatball: 150, superball: 45, ultraball: 25, maguball: 18, fastball: 18},
    rapidash: {ultraball: 210, maguball: 150, fastball: 150},
    slowpoke: {pokeball: 60, greatball: 40, superball: 15, ultraball: 7, netball: 5, yumeball: 5},
    slowbro: {greatball: 800, superball: 290, ultraball: 140, netball: 100, yumeball: 100},
    magnemite: {pokeball: 60, greatball: 40, superball: 14, ultraball: 7, tinkerball: 5},
    magneton: {ultraball: 90, tinkerball: 70},
    farfetchd: {greatball: 800, superball: 290, ultraball: 140, soraball: 100, yumeball: 100, fastball: 100},
    doduo: {pokeball: 90, greatball: 60, superball: 22, ultraball: 10, soraball: 7, yumeball: 7, fastball: 7},
    dodrio: {greatball: 560, superball: 200, ultraball: 100, soraball: 70, yumeball: 70, fastball: 70},
    seel: {pokeball: 309, greatball: 200, superball: 72, ultraball: 34, soraball: 24, netball: 24},
    dewgong: {superball: 430, ultraball: 200, netball: 140, soraball: 140, heavyball: 140},
    grimer: {pokeball: 45, greatball: 30, superball: 11, ultraball: 5, janguruball: 4},
    muk: {ultraball: 190, janguruball: 130},
    shellder: {pokeball: 30, greatball: 20, superball: 8, ultraball: 4, netball: 3, soraball: 3},
    cloyster: {superball: 370, ultraball: 170, netball: 120, soraball: 120, heavyball: 120},
    gastly: {pokeball: 450, greatball: 300, superball: 108, ultraball: 35, moonball: 35, janguruball: 35},
    haunter: {greatball: 800, superball: 290, ultraball: 140, moonball: 100, janguruball: 100},
    gengar: {ultraball: 300, moonball: 210, janguruball: 210},
    onix: {greatball: 600, superball: 220, ultraball: 100, duskball: 70, maguball: 70, heavyball: 70},
    drowzee: {pokeball: 150, greatball: 100, superball: 36, ultraball: 17, yumeball: 12},
    hypno: {greatball: 600, superball: 220, ultraball: 100, yumeball: 70},
    krabby: {pokeball: 30, greatball: 20, superball: 8, ultraball: 4, netball: 3},
    kingler: {greatball: 520, superball: 190, ultraball: 90, netball: 70},
    voltorb: {pokeball: 38, greatball: 25, superball: 9, ultraball: 5, tinkerball: 3},
    electrode: {greatball: 300, superball: 108, ultraball: 50, tinkerball: 35},
    exeggcute: {pokeball: 30, greatball: 20, superball: 8, ultraball: 4, janguruball: 3, yumeball: 3},
    exeggutor: {ultraball: 250, net
    : 180, yumeball: 180, heavyball: 180},
    cubone: {pokeball: 150, greatball: 100, superball: 36, ultraball: 17, maguball: 12},
    marowak: {superball: 400, ultraball: 190, maguball: 100},
    lickitung: {saffariball: 1000},
    koffing: {pokeball: 45, greatball: 30, superball: 11, ultraball: 5, janguruball: 4},
    weezing: {greatball: 300, superball: 108, ultraball: 50, janguruball: 35},
    rhyhorn: {pokeball: 450, greatball: 300, superball: 108, ultraball: 50, maguball: 35, duskball: 35, heavyball: 35, fastball: 35},
    rhydon: {ultraball: 220, maguball: 160, duskball: 160, heavyball: 160},
    tangela: {greatball: 1000, superball: 360, ultraball: 170, janguruball: 120},
    horsea: {pokeball: 30, greatball: 20, superball: 8, ultraball: 4, netball: 3},
    seadra: {greatball: 550, superball: 200, ultraball: 100,
    netball: 70},
    goldeen: {pokeball: 30, greatball: 20, superball: 8, ultraball: 4, netball: 3},
    seaking: {greatball: 300, superball: 108, ultraball: 50, netball: 35},
    staruy: {pokeball: 60, greatball: 40, superball: 15, ultraball: 7, netball: 5, yumeball: 5},
    starmie: {ultraball: 50, netball: 35, yumeball: 35, fastball: 35},
    jynx: {ultraball: 2000, soraball: 1400, yumeball: 1400},
    electabuzz: {ultraball: 2000, tinkerball: 1400},
    magmar: {ultraball: 2000, maguball: 1400},
    pinsir: {ultraball: 2000, netball: 1400, fastball: 1400},
    tauros: {greatball: 500, superball: 180, ultraball: 90, yumeball: 60, fastball: 60},
    magikarp: {pokeball: 1, greatball: 1, superball: 1, ultraball: 1, netball: 1},
    gyarados: {ultraball: 920, netball: 650, soraball: 650},
    lapras: {ultraball: 2000, netball: 1400, soraball: 1400, heavyball: 1400},
    snorlax: {ultraball: 3340, yumeball: 2340, heavyball: 2340},
    dratini: {ultraball: 250, taleball: 180},
    dragonair: {ultraball: 1090, taleball: 760},
    dragonite: {ultraball: 2090, taleball: 1460, soraball: 1460, heavyball: 1460}
}

function getPokemon()
{
    var text = document.getElementById('pokemonName').value.toLowerCase();
    if(text == "farfetch'd")
    {
        text = 'farfetchd';
    }
    else if(text == 'mr mime')
    {
        text = 'mr.mime';
    }
    /*if(!pokemon[text])
    {
        alert("pokemon not found");
    }*/

    var submitText = "";
    elements = document.getElementById("pokemonInfo");
    submitText = '<img src="images/' + text + '.png">'
    submitText = submitText + '<br>';
    for(key in pokemon[text])
    {
        submitText = submitText + '<span>' + pokemon[text][key] + '<img src="images/' + key + '.png"> </span>';
    }

    document.getElementById("pokemonStats").innerHTML = submitText;
}