/**
//  * Menghitung Harga dan Discount dari toko pakaian
//  * Sebuah toko pakaian akan memberikan discount pada beberapa stock barang mereka dengan aturan berikut
//  * - Kemeja, discount 20%
//  * - Kaos, discount 15%
//  * - Jeans, discount 12.75%
//  * - Sepatu, discount 12.5%
//  * - Jaket, discount 3.5%
//  *
//  * Discount akan diberikan tanpa ada minimum pembelian. Hitunglah harga barang yang dibeli oleh Ryan
//  * per masing-masing item nya sebelum dan setelah discount. Kemudian hitunglah total harga yang perlu dibayar
//  * Ryan untuk seluruh barangnya.
//  *
//  * NOTE: (Gunakan Switch Case)  ---> per masing masing barang saja
//  */

const kategoriBarangDibeliRyan = 'sepatu';
const hargaBarangDibeliRyan = 450000;
let hargaYgHarus_Dibayar = '';

switch(kategoriBarangDibeliRyan){
    case 'kemeja':
        hargaYgHarus_Dibayar = hargaBarangDibeliRyan-(hargaBarangDibeliRyan * 0.20);
        break;
    case 'jeans':
        hargaYgHarus_Dibayar = hargaBarangDibeliRyan - hargaBarangDibeliRyan * 0.1275;
            break;
          // Case jika kategorinya kaos, discount 15%
    case 'kaos':
        hargaYgHarus_Dibayar = hargaBarangDibeliRyan - hargaBarangDibeliRyan * 0.15;
            break;
          // Case jika kategorinya sepatu, discount 12.5%
    case 'sepatu':
        hargaYgHarus_Dibayar = hargaBarangDibeliRyan - hargaBarangDibeliRyan * 0.125;
            break;
          // Case jika kategorinya jaket, discount 3.5%
    case 'jaket':
        hargaYgHarus_Dibayar = hargaBarangDibeliRyan - hargaBarangDibeliRyan * 0.035;
            break;
          // Default: Jika kategorinya tidak termasuk kategori diatas, maka discountnya 0
    default:
        hargaYgHarus_Dibayar = hargaBarangDibeliRyan;
}


console.log(
    `Harga awal barang ryan untuk kategori ${kategoriBarangDibeliRyan} ---> Rp. ${hargaBarangDibeliRyan}`
  );
  console.log(
    `Harga akhir barang ryan untuk kategori ${kategoriBarangDibeliRyan} ---> Rp. ${hargaYgHarus_Dibayar}`
  );