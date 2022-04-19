const osztalyokTmb = [
    "Válassz osztályt!",
    "nSZF1A",
    "nSZF1B",
    "nSZF2A",
    "nIRU1A",
    "nIRU1B",
    "nIRU2A",
];

class UrlapKezeles {
    constructor() {
        this.osztalyokSelect = $("#osztalyok");
        this.tevekenysegekSelect = $("#tevekenysegek");
        console.log(this.tevekenysegekSelect);
        this.optionOsztalyokFeltolt(osztalyokTmb);
        $("#kuld").on("click", () => {
            const adat = {
                osztaly_id: $("#osztalyok").val(),
                tevekenyseg_id: $("#tevekenysegek").val(),
            };
            console.log(adat);
            this.kattintasTrigger(adat);
        });
    }
    kattintasTrigger(adat) {
        let event = new CustomEvent("kuldKattintas", {
            detail: adat, //ezzel adatokat tudok átadni
        });
        window.dispatchEvent(event);
    }

    //tevékenységek feltöltése
    optionTevekenysegFeltolt(tomb) {
        console.log(tomb);
        $("#tevekenysegek").append(`<option>Válassz tevékenységet</option>`);
        tomb.forEach((element) => {
            $("#tevekenysegek").append(
                `<option value='${element.id}'>${element.tevekenyseg_nev}</option>`
            );
        });
    }
    optionOsztalyokFeltolt(tomb) {
        console.log(tomb);
        tomb.forEach((element, index) => {
            this.osztalyokSelect.append(
                `<option value='${index}'>${element}</option>`
            );
        });
    }
}
