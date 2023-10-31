const mysql = require('mysql'); //panggil library mysql

const db = mysql.createPool({ //keperluan untuk koneksi db
    host: 'localhost', //KONFIGURASI nya
    user: 'root', 
    password: '',
    database: 'negara_asia' //nama db
});   

exports.db = db; //

//UNTUK FILE db.js SAYA MASUKAN DI FOLDER MODEL >>>>>>>>>>>>>>>>>>>>
