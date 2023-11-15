function criaPerguntas () {
    Perguntas = [
    "Qual das alternativas abaixo apresenta uma planta nativa do Brasil?",
    "Qual o tipo de solo é bom para o plantio de suculentas?",
    "Qual dessas plantas não é comestível?",
    "Qual a quantidade de sol que uma suculenta precisa?",
    "O que fazer quando sua planta está amarelada?",
    "O que é mais apropriado fazer quando uma folha/pétala cai no solo?",
    "O que é uma estaca?",
    "Verdade ou mentira: toda planta precisa ser regada todo dia para ficar bem hidratada",
    "Por que o solo humoso é muito utilizado na agricultura?",
    "O que é substrato?",
    "Qual dos tipos abaixo é considerado um tipo de reprodução assexuada para plantas?",
    "Qual a importância do polén?"
    ]
    Resposta1 = "Guaraná"
    AlternativasP1 = ["Cacto", "Pinheiros", Resposta1]
    Resposta2 = "Substrato"
    AlternativasP2 = [Resposta2, "Argiloso", "Arenoso"]
    Resposta3 = "lírio do vale"
    AlternativasP3 = ["Hortelã", "Peixinho", Resposta3]
    Resposta4 = "Bastante"
    AlternativasP4 = ["Medio", Resposta4, "Pouco"]
    Resposta5 = "Podar"
    AlternativasP5 = [Resposta5, "Fornecer bastante sol", "Fornecer bastante água"]
    Resposta6 = "Deixar ela no solo"
    AlternativasP6 = ["Retirar do solo", "Reconectá-la no caule de origem", Resposta6]
    Resposta7 = "Pedaço de graveto com vida"
    AlternativasP7 = ["Pedaço de graveto sem vida", Resposta7, "Pedaço de raiz sem vida"]
    Resposta8 = "Falso"
    AlternativasP8 = ["Verdadeiro", Resposta8, "Depende"]
    Reposta9 = "Devido à sua alta fertilidade"
    AlternativasP9 = ["Devido à sua alta umidade", "Devido à presença de agentes decompositores", Reposta9]
    Resposta10 = "Junção de Terra e areia "
    AlternativasP10 = ["A área que fica sob a terra", "É o mal trato dos elementos naturais", Resposta10]
    Resposta11 = "Brotamento"
    AlternativasP11 = ["Reprodução por pólen", "Divisão binária", Resposta11]
    Resposta12 = "Reprodução de plantas"
    AlternativasP12 = [Resposta12, "Ajudar a planta a crescer", "Disfarçar o aroma para predadores"]
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
let Resposta3 = ""
let AlternativasP2: string[] = []
let Resposta2 = ""
let AlternativasP1: string[] = []
let Resposta1 = ""
let Perguntas: string[] = []
scene.setBackgroundImage(assets.image`Fundo`)
let velocidade_fala = 250
info.setLife(3)
let bonequinho = sprites.create(assets.image`myImage`, SpriteKind.Player)
scaling.scaleByPixels(bonequinho, 35, ScaleDirection.Uniformly, ScaleAnchor.Middle)
story.spriteMoveToLocation(bonequinho, 80, 75, 50)
bonequinho.setPosition(80, 75)
let planta = sprites.create(assets.image`myImage0`, SpriteKind.Player)
planta.setPosition(35, 98)
scaling.scaleByPixels(planta, 35, ScaleDirection.Uniformly, ScaleAnchor.Middle)
animation.runImageAnimation(
bonequinho,
assets.animation`myAnim2`,
100,
false
)
story.spriteSayText(bonequinho, "Olá")
animation.runImageAnimation(
bonequinho,
assets.animation`boneco_falando`,
velocidade_fala,
true
)
story.spriteSayText(bonequinho, "Bem-vindo ao quiz do Projeto Florescer!")
story.spriteSayText(bonequinho, "Você irá responder algumas perguntas sobre jardinagem! Preparado?")
animation.stopAnimation(animation.AnimationTypes.All, bonequinho)
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
            animation.runImageAnimation(
            bonequinho,
            assets.animation`boneco_falando`,
            velocidade_fala,
            true
            )
            story.spriteSayText(bonequinho, "Sua pergunta é:")
            Pergunta = TEMA._pickRandom()
            NumeroPergunta = TEMA.indexOf(Pergunta)
            story.spriteSayText(bonequinho, Pergunta)
            animation.stopAnimation(animation.AnimationTypes.All, bonequinho)
            story.showPlayerChoices(Alternativas[numeroTema][NumeroPergunta][0], Alternativas[numeroTema][NumeroPergunta][1], Alternativas[numeroTema][NumeroPergunta][2])
            if (story.checkLastAnswer(Respostas[numeroTema][NumeroPergunta])) {
                music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
                story.spriteSayText(bonequinho, "Boa resposta!")
                info.changeScoreBy(10)
                if (info.score() == 10) {
                    animation.runImageAnimation(
                    planta,
                    [img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `],
                    500,
                    false
                    )
                } else if (info.score() == 20) {
                    animation.runImageAnimation(
                    planta,
                    [img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `],
                    500,
                    false
                    )
                } else if (info.score() == 30) {
                    animation.runImageAnimation(
                    planta,
                    [img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `],
                    500,
                    false
                    )
                } else if (info.score() == 40) {
                    animation.runImageAnimation(
                    planta,
                    [img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `],
                    500,
                    false
                    )
                } else if (info.score() == 50) {
                    animation.runImageAnimation(
                    planta,
                    [img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `],
                    500,
                    false
                    )
                } else {
                    animation.runImageAnimation(
                    bonequinho,
                    assets.animation`myAnim`,
                    150,
                    false
                    )
                    story.spriteSayText(bonequinho, "Parabéns! Você cultivou o seu conhecimento!")
                    game.gameOver(true)
                }
            } else {
                music.play(music.melodyPlayable(music.wawawawaa), music.PlaybackMode.InBackground)
                story.spriteSayText(bonequinho, "Eita! Resposta errada!")
                if (info.life() == 1) {
                    animation.runImageAnimation(
                    bonequinho,
                    assets.animation`myAnim3`,
                    200,
                    false
                    )
                    story.spriteSayText(bonequinho, "Você perdeu! Que pena! Sua planta morreu!")
                }
                info.changeLifeBy(-1)
            }
            TEMA.removeAt(NumeroPergunta)
            Alternativas[numeroTema].removeAt(NumeroPergunta)
            Respostas[numeroTema].removeAt(NumeroPergunta)
        }
    }
})
