/**
//  * Grading seorang karyawan untuk promosi berdasarkan nilai selama satu tahun (4 kuartal)
//  * - Kuartal 1 2025 -> 3.45
//  * - Kuartal 2 2025 -> 3.575
//  * - Kuartal 3 2025 -> 2.30
//  * - Kuartal 4 2025 -> 3.75
//  *
//  * - Kuartal 1 2024 -> 3.45
//  * - Kuartal 2 2024 -> 3.575
//  * - Kuartal 3 2024 -> 2.30
//  * - Kuartal 4 2024 -> 3.75
//  *
//  * Buatlah grading karyawan tersebut untuk 2025, dimana rules sebagai berikut
//  * - A -> 3.45 - 4.00
//  * - B+ -> 3.00 - 3.45
//  * - B -> 2.80 - 3.00
//  * - C -> < 2.80
//  * - D (SP) -> < 2.00 
//  *
//  * Seorang karyawan hanya bisa promosi jika
//  * - Total masa waktu kerja minimal 2 tahun (8 kuartal) / 24 bulan dengan rata-rata nilai minimal B. "ATAU"
//  * - Total masa waktu kerja 1 tahun (4 kuartal pada 2025) dengan rata-rata nilai minimal A
//  *
//  * Buatlah kondisi untuk menentukan apakah karyawan tersebut dapat mendapatkan promosi atau tidak (Gunakan If Else)
//  */

//NOTE: Masing masing element pada array merepresentasikan nilai pada setiap kuartalnya

let masaKerjaMinimalA = 4
let masaKerjaMinimalB = 8

let nilaiKaryawan1 = [3.45,3.575,2.30,3.75]
let nilaiKaryawan2 = [3.45,3.575,2.30,3.75]
let gabunganNilai = nilaiKaryawan1.concat(nilaiKaryawan2)
// console.log(gabunganNilai.length)
let nilaiAwal = 0
let masaKerjaKaryawan = gabunganNilai.length
for(i=0;i<gabunganNilai.length;i++){
    nilaiAwal = nilaiAwal+gabunganNilai[i]
}

rataNilai = nilaiAwal/gabunganNilai.length
console.log(`nilai rata rata karyawan = ${rataNilai}`)

let gradeKaryawan = '';

if(rataNilai>=3.45 && rataNilai<=4.0){
    gradeKaryawan = 'A'
}else if(rataNilai>=3.0){
    gradeKaryawan = 'B+'
}else if(rataNilai>=2.8){
    gradeKaryawan = 'B'
}else if(rataNilai>=2.0){
    gradeKaryawan = 'C'
}
else{
    gradeKaryawan = 'D'
}

if(gradeKaryawan === 'A' && masaKerjaKaryawan>= masaKerjaMinimalA){
    console.log(`selamat karyawan Dipromosikan`)
}else if((gradeKaryawan==='B+' || gradeKaryawan ==='B')&&(masaKerjaKaryawan>=masaKerjaMinimalB)){
    console.log(`Selamat Karyawan Dipromosikan `)
}else{
    console.log(`Maap Anda Belum dapat dipromosikan`)
}


