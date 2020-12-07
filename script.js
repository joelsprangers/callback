

function huiswerkMaken(vak, callback) {
    console.log("Ok, ok, ik ga nu mijn " + vak + " huiswerk maken");
    setTimeout(() => callback(), 1000)
}

function klaarMetHuiswerk() {
    console.log("kijk, ik ben klaar met mijn huiswerk!");
}

huiswerkMaken("wiskunde", klaarMetHuiswerk);
