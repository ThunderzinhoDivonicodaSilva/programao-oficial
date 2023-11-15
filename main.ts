function criaPerguntas () {
    Perguntas = [
    "Qual das alternativas abaixo apresenta uma planta nativa do Brasil?",
    "Qual o tipo de solo é bom para o plantio de suculentas?",
    "Qual dessas plantas não é comestível?",
    "Qual a quantidade de sol que uma suculenta precisa?",
    "O que fazer quando sua planta está amarelada?",
    "O que é mais apropriado fazer quando uma folha/pétala cai no solo?",
    "O que é uma estaca?",
    "Verdadeiro ou falso: toda planta precisa ser regada todo dia para ficar bem hidratada",
    "Por que o solo humoso é muito utilizado na agricultura?",
    "O que é substrato?",
    "Qual dos tipos abaixo é considerado um tipo de reprodução assexuada para plantas?",
    "Qual a importância do polén?"
    ]
    Resposta1 = "Guaraná"
    AlternativasP1 = ["Cacto", "Pinheiros", Resposta1]
    Resposta2 = "Substrato"
    AlternativasP2 = [Resposta2, "Argiloso", "Arenoso"]
    Resposta3 = 0
    AlternativasP3 = ["hortelã", "peixinho", Resposta3]
    Resposta4 = "Bastante"
    AlternativasP4 = ["médio", Resposta4, "pouco"]
    Resposta5 = "Podar"
    AlternativasP5 = [Resposta5, "Fornecer bastante sol", "Fornecer bastante água"]
    Resposta6 = "Deixar ela no solo"
    AlternativasP6 = ["Retirar do solo", "Reconectá-la no caule de origem", Resposta6]
    Resposta7 = "Pedaço de graveto com vida"
    AlternativasP7 = ["Pedaço de graveto sem vida", Resposta7, "Pedaço de raiz sem vida"]
    Resposta8 = "Falso"
    AlternativasP8 = ["Verdadeiro", Resposta8, "Depende"]
    Reposta9 = "Devido à sua alta fertilidade"
    AlternativasP9 = ["Devido à sua alta humidade", "Devido à presença de agentes decompositores", Reposta9]
    Resposta10 = "Junção de Terra e areia "
    AlternativasP10 = ["É a área que fica sob a terra", "É o mal trato dos elementos naturais", Resposta10]
    Resposta11 = "Brotamento"
    AlternativasP11 = ["Reprodução por pólen", "Divisão binária", Resposta11]
    Resposta12 = "Reprodução de plantas"
    AlternativasP12 = [Resposta12, "Ajudar o crescimento da planta", "Disfarçar o aroma para predadores"]
    AlternativasA = [
    AlternativasP1,
    AlternativasP2,
    AlternativasP3,
    AlternativasP4,
    AlternativasP5,
    AlternativasP6,
    AlternativasP7,
    AlternativasP8,
    AlternativasP9,
    AlternativasP10,
    AlternativasP11,
    AlternativasP12
    ]
    RespostasA = [
    Resposta1,
    Resposta2,
    Resposta3,
    Resposta4,
    Resposta5,
    Resposta6,
    Resposta7,
    Resposta8,
    Reposta9,
    Resposta10,
    Resposta11,
    Resposta12
    ]
}
function criaListas () {
    temas = [Perguntas]
    Respostas = [RespostasA]
    Alternativas = [AlternativasA]
}
let NumeroPergunta = 0
let Pergunta = ""
let numeroTema = 0
let TEMA: string[] = []
let Alternativas: string[][][] = []
let Respostas: string[][] = []
let temas: string[][] = []
let RespostasA: string[] = []
let AlternativasA: string[][] = []
let AlternativasP12: string[] = []
let Resposta12 = ""
let AlternativasP11: string[] = []
let Resposta11 = ""
let AlternativasP10: string[] = []
let Resposta10 = ""
let AlternativasP9: string[] = []
let Reposta9 = ""
let AlternativasP8: string[] = []
let Resposta8 = ""
let AlternativasP7: string[] = []
let Resposta7 = ""
let AlternativasP6: string[] = []
let Resposta6 = ""
let AlternativasP5: string[] = []
let Resposta5 = ""
let AlternativasP4: string[] = []
let Resposta4 = ""
let AlternativasP3: string[] = []
let Resposta3 = 0
let AlternativasP2: string[] = []
let Resposta2 = ""
let AlternativasP1: string[] = []
let Resposta1 = ""
let Perguntas: string[] = []
scene.setBackgroundImage(assets.image`Fundo`)
info.setLife(3)
let mySprite = sprites.create(assets.image`myImage`, SpriteKind.Player)
mySprite.setPosition(scene.screenWidth() / 2, 100)
story.spriteSayText(mySprite, "Olá")
story.spriteSayText(mySprite, "Bem vindo ao Jovens Verdes!")
story.spriteSayText(mySprite, "Você irá responder algumas perguntas sobre jardinagem! Preparado?")
criaPerguntas()
criaListas()
forever(function () {
    if (temas.length != 0) {
        TEMA = temas._pickRandom()
        numeroTema = temas.indexOf(TEMA)
        if (TEMA.length == 0) {
            temas.removeAt(numeroTema)
            Alternativas.removeAt(numeroTema)
            Respostas.removeAt(numeroTema)
        } else {
            story.spriteSayText(mySprite, "Sua pergunta é:")
            Pergunta = TEMA._pickRandom()
            NumeroPergunta = TEMA.indexOf(Pergunta)
            story.spriteSayText(mySprite, Pergunta)
            story.showPlayerChoices(Alternativas[numeroTema][NumeroPergunta][0], Alternativas[numeroTema][NumeroPergunta][1], Alternativas[numeroTema][NumeroPergunta][2])
            if (story.checkLastAnswer(Respostas[numeroTema][NumeroPergunta])) {
                music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
                story.spriteSayText(mySprite, "Boa resposta!")
                info.changeScoreBy(10)
                if (info.score() >= 60) {
                    story.spriteSayText(mySprite, "Parabéns! Você cultivou o seu conhecimento!")
                    game.gameOver(true)
                }
            } else {
                music.play(music.melodyPlayable(music.wawawawaa), music.PlaybackMode.InBackground)
                story.spriteSayText(mySprite, "Eita! Resposta errada!")
                if (info.life() == 1) {
                    story.spriteSayText(mySprite, "Você perdeu! Que pena! Sua planta morreu!")
                }
                info.changeLifeBy(-1)
            }
            TEMA.removeAt(NumeroPergunta)
            Alternativas[numeroTema].removeAt(NumeroPergunta)
            Respostas[numeroTema].removeAt(NumeroPergunta)
        }
    }
})
