class Bejegyzesek {
    constructor() {}
    bejegyzesFeldolgoz(tomb) {
        $('#adatok tbody').empty();
        tomb.forEach((elem) => {
            new Bejegyzes(elem);
        });
    }
}
