const kodeBarang = document.getElementById('kode-barang');
let modal = document.querySelector('.modal');
const close  = document.querySelector('.close');
const btnSubmit = document.querySelector('.btn-submit');

kodeBarang.addEventListener('keyup', function(event) {
    if(event.keyCode === 13) {
        modal.style.transform = 'scale(1)';
       
    } else if(event.keyCode === 27) {
        modal.style.transform = 'scale(0) rotate(360deg)';
    }
});


close.addEventListener('click', function() {
    modal.style.transform = 'scale(0)';
});

btnSubmit.addEventListener('click', function() {
    getFormModal();
    modal.style.transform = 'scale(0) rotate(360deg)';

    let kodeBarang = document.getElementById('kode-barang');
    kodeBarang.focus();
})

function getFormModal() {
    let kodeBarang = document.querySelector('.kode-barang');
    let namaBarang = document.querySelector('.nama-barang');
    let unit = document.querySelector('.unit');
    let harga = document.querySelector('.harga');
    let stock = document.querySelector('.stock');

    kodeBarang = kodeBarang.value;
    namaBarang = namaBarang.value;
    unit = unit.value;
    harga = harga.value;
    stock = stock.value;
    
    createElementTd(kodeBarang, namaBarang, unit, harga, stock);
    
    kodeBarang = '';
    namaBarang = '';
    unit = '';
    stock = '';
}

function createElementTd(kodeBarang, namaBarang, unit, harga, stock) {
    let mainTr = document.querySelector('.mainTr');
    
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');
    let td4 = document.createElement('td');
    let td5 = document.createElement('td');
    let td6 = document.createElement('td');

    let no = document.createTextNode(1);
    let k_Barang = document.createTextNode(kodeBarang);
    let n_Barang = document.createTextNode(namaBarang);
    let u_barang = document.createTextNode(unit);
    let h_barang = document.createTextNode(harga);
    let s_barang = document.createTextNode(stock);

    td1.appendChild(no);
    td2.appendChild(k_Barang);
    td3.appendChild(n_Barang);
    td4.appendChild(u_barang);
    td5.appendChild(h_barang);
    td6.appendChild(s_barang);

    let tr = document.createElement('tr');
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6);

    let tBody = document.querySelector('tBody');
    tBody.insertBefore(tr, mainTr);
}