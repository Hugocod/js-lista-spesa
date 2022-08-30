/* creo la lista della spesa */
const lista = ["mandarini", "cipolla", "pane", "lattuga", "pomodori", "salsiccie", "vodka"];

/* selezione dell'elemento html in cui appendere gli elementi della lista */
const root = document.getElementById("root");

/* inserisco gli elementi in pagina */

let i = 0; /*--------------------------------------------- inizializzo indice */

while (i < lista.length) {
    root.innerHTML += `
    <div>
        <div class='hole'></div>
        <h1>${lista[i]}</h1>
    </div>
    
    `;
    i++; /*--------------------------------------------- incremento indice */
}
