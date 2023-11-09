// Frases que podem aparecer
let cookiePhrases = [
  "Apressa-te a viver bem e pense que cada dia é, por si só, uma vida.",
  "Enquanto você viver, continue aprendendo a viver.",
  "Enquanto esperamos pela vida, a vida passa.",
  "Vocês agem como mortais em tudo o que temem e como imortais em tudo o que desejam.",
  "Como é um conto, assim também é a vida: não importa quanto tempo dura, mas quão boa é.",
  "Esperar é o maior obstáculo para viver. Esperando o amanhã, perdemos o hoje.",
  "Nenhuma pessoa tem o poder de ter tudo o que deseja. Mas está em seu poder não querer o que não tem, e fazer bom uso do que tem.",
  "Sofremos mais na imaginação do que na realidade.",
  "Sorte é o que acontece quando a preparação encontra a oportunidade.",
  "As dificuldades fortalecem a mente, assim como o trabalho fortalece o corpo.",
  "Aquele que é corajoso, é livre.",
  "Só o tempo pode curar aquilo que a razão não pode.",
  "Se um homem não sabe para que porto embarca, nenhum vento é favorável.",
  "O mais poderoso é aquele que tem a si mesmo em seu próprio poder.",
  "Desfrute dos prazeres presentes de forma a não prejudicar os futuros.",
  "Uma espada nunca matou ninguém; é apenas uma ferramenta nas mãos do assassino."
]

//Variaveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
let cookieLength = cookiePhrases.length-1
let randomNumber = Math.round(Math.random() * cookieLength)

//Eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)

//Funções
function handleTryClick(event){
  event.preventDefault() // Não faça o padrao
  toggleScreen()
  document.querySelector(".screen2 p").innerText = cookiePhrases[randomNumber]
}

function handleResetClick(event){
  event.preventDefault() // Não faça o padrao
  toggleScreen()
  randomNumber = Math.round(Math.random() * cookieLength)
}

function toggleScreen(){
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}





