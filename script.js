function hitung(operasi) {
    let Angka1 = parseFloat(document.getElementById/*mengambil elemen */('Angka1').value);//agar bisa menghitung desimal
    let Angka2 = parseFloat(document.getElementById('Angka2').value);//menunggu inputan dari user
    let Hasil;// menampung hasil oprasi
    
    if (isNaN(Angka1) || isNaN(Angka2)) {
        Hasil = 'Masukkan angka yang valid!';
    } else {
        switch (operasi) {
            case 'tambah':
                Hasil = Angka1 + Angka2;
                break;
            case 'kurang':
                Hasil = Angka1 - Angka2;
                break;
            case 'kali':
                Hasil = Angka1 * Angka2;
                break;
            case 'bagi':
                Hasil = Angka1 / Angka2;
                break;
            default:
                Hasil = 'Operasi tidak dikenali!';
        }
    }

    document.getElementById('Hasil').innerText = Hasil;
}