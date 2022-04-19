$(function () {
    const token = $('meta[name="csrf-token"]').attr("content");
    const ajax = new Ajax(token);
    const urlapKezeles = new UrlapKezeles();
    const bejegyzesek = new Bejegyzesek();
    let bejegyzesekVegpont = "/bejegyzesek";
    let tevekenysegekVegpont = "/tevekenysegek";
    ajax.getAjax(bejegyzesekVegpont, bejegyzesek.bejegyzesFeldolgoz);
    //ajax.getAjax(bejegyzesekVegpont, adatfeldolgoz);
    ajax.getAjax(tevekenysegekVegpont, urlapKezeles.optionTevekenysegFeltolt);
    $(window).on("kuldKattintas", (event) => {
        let adat = event.detail;
        let bejegyzesVegpont = "/api/bejegyzes";
        ajax.postAjax(bejegyzesVegpont, adat);
        ajax.getAjax(bejegyzesekVegpont, bejegyzesek.bejegyzesFeldolgoz);
        //ajax.getAjax(bejegyzesekVegpont, adatfeldolgoz);
    });

});
