/*let map_calculadora = [];

const linhas = document.querySelectorAll(".linha");
linhas.forEach((elementos, indice)=>{
    map_calculadora[indice] = elementos.querySelectorAll("td");
})

map_calculadora[0][0].addEventListener("click", blabla)
map_calculadora[0][1].addEventListener("click", blabla)
map_calculadora[0][2].addEventListener("click", blabla)
map_calculadora[0][3].addEventListener("click", blabla)

map_calculadora[1][0].addEventListener("click", blabla)
map_calculadora[1][1].addEventListener("click", blabla)
map_calculadora[1][2].addEventListener("click", blabla)
map_calculadora[1][3].addEventListener("click", blabla)

map_calculadora[2][0].addEventListener("click", blabla)
map_calculadora[2][1].addEventListener("click", blabla)
map_calculadora[2][2].addEventListener("click", blabla)
map_calculadora[2][3].addEventListener("click", blabla)

map_calculadora[3][0].addEventListener("click", blabla)
map_calculadora[3][1].addEventListener("click", blabla)
map_calculadora[3][2].addEventListener("click", blabla)
map_calculadora[3][3].addEventListener("click", blabla)

map_calculadora[4][0].addEventListener("click", blabla)
map_calculadora[4][1].addEventListener("click", blabla)
map_calculadora[4][2].addEventListener("click", blabla)
map_calculadora[4][3].addEventListener("click", blabla)*/

function clicar_digito_calc(event){
    const digito = event.srcElement.dataset.valor;
}

document.addEventListener("click", clicar_digito_calc)