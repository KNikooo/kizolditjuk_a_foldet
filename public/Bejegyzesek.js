class Bejegyzesek {
    constructor() {}
    bejegyzesFeldolgoz(tomb) {
        tomb.forEach((elem) => {
            new Bejegyzes(elem);
        });
    }
}
