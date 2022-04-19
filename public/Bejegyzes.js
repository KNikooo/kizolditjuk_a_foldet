class Bejegyzes {
	constructor(adat) {
		this.adat = adat;
		const szuloelem = $('#adatok tbody');
		let allapot = adat.allapot === 0 ? 'jóváhagyásra vár' : '';
		const elem = `<tr>
                    <td class="osztaly">${osztalyokTmb[adat.osztaly_id]}</td>
                    <td class="tevekenyseg">${adat.tevekenyseg.tevekenyseg_nev}</td>
                    <td class="pontszam">${adat.tevekenyseg.pontszam}</td>
                    <td class="allapot">${adat.allapot === 0 ? 'jóváhagyásra vár' : 'elfogadva'}</td>
                    </tr>`;
		szuloelem.append(elem);
		this.node = szuloelem.children('.bejegyzes:last-child');
	}
}
