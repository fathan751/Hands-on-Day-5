/**
 * Looping pada array
 * - Terdapat sebuah array yang berisikan element sebanyak 6 yang merpresentasikan hasil penjualan
 * selama 6 bulan terakhir. Hitunglah total dari seluruh hasil penjualan tersebut dengan aturan sebagai berikut.
 *  1. setiap bulan, pendapatan kotor akan dikurangi dengan 10% untuk gaji karyawan
 *  2. setiap 3 bulan sekali, pendapatan kotor akan dikurangi dengan 10% gaji karyawan dan 10% biaya maintenance
 * (lampu, listrik, air, AC dsb).
 *
 * Hitunglah total pendapatan bersih dan rata-ratanya selama 6 bulan terakhir.
 *
 */
const hasilPenjualanToko = [25000000, 37500000, 50000000, 75000000, 100000000, 45750000,];
let  copyPenjualanToko = [...hasilPenjualanToko]
let totalPendapatanBersih = 0;
console.log(copyPenjualanToko)
for(let i=0; i<hasilPenjualanToko.length;i++){
    let hasilPendapatan1 = copyPenjualanToko[i] - (hasilPenjualanToko[i]*0.1)
    if(i % 3 === 0){hasilPendapatan1*0.1
    } 
    totalPendapatanBersih+=hasilPendapatan1
}
console.log(`jadi total pendapatan bersih toko adalah = ${totalPendapatanBersih}`)

