/**
 * Looping
 * 1. Lakukan looping pada string, untuk melihat apakah
 *  - Terdapat karakter huruf A pada string tersebut dan berapa kali muncul.
 *  - Menghitung berapa banyak huruf vokal pada string tersebut kemunculannya.
 *  - Menghitung apakah string tersebut mengandung lebih dari 7 karakter huruf (membuat username / password)
 *
 *
 * 2. Looping pada range of number, lalu menentukan bilangan ganjil dan bilangan genap dari angka 1-30
 */
//? 1. String
const contohString = 'HelloaaaaWorldAA';
let lowerString = contohString.toLowerCase()
console.log(lowerString)
let amountA = '';
let amountVocal = '';
for(i=0;i<contohString.length;i++){
    if(lowerString[i] === 'a'){
        amountA++
        amountVocal = amountVocal+1
    }else if(lowerString[i] === 'i'){
        amountVocal++
    }else if(lowerString[i] === 'u'){
        amountVocal++
    }else if(lowerString[i] === 'e'){
        amountVocal++
    }else if(lowerString[i] === 'o'){
        amountVocal++
    }
}
console.log(`jumlah huruf a/A = ${amountA}`)
console.log(`jumlah Huruf Vocal = ${amountVocal}`)

console.log(`==========Create Username&Password=======`)

let username = 'ucupsurucupp'
let password = 'ganszz123'
let lenUser = username.length
let lenPass = password.length
let checkIdPass = '';
if(lenUser >= 7 && lenPass >= 7 ){
    checkIdPass = 'username dan password telah berhasil dibuat\n'
}else if(lenUser >= 7 && lenPass <=7){
    checkIdPass = 'tolong tambahkan character password'
}else if(lenUser <= 7 && lenPass >=7){
    checkIdPass = 'tolong tambahkan character Username'
}else{
    checkIdPass = 'error tidak dapat dibuat'
}

console.log(`username dan passowrd : ${checkIdPass}`)

// ! 2. Looping pada range of number, lalu menentukan bilangan ganjil dan bilangan genap dari angka 1-30
console.log(`------------>>>>> Menggunakan For Loop`)
for(let i = 1; i<=30; i++){
    const isNilaiGanjil = i % 2 !== 0
    if(isNilaiGanjil===true){
        console.log(`Number : ${i} merupakan bilangan ganjil`)
    }else{
        console.log(`Number : ${i} merupakan bilangan genap`)
    }
}

console.log(`------------->>>> Menggunakan While Loop`)
i = 0
while(i<30){
    i++
    if(i%2!==0){
        console.log(`number:${i} merupakan bilangan ganjil`)
    }else{
        console.log(`number:${i} merupakan bilangan genap`)
    }
}