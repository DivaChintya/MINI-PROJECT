const mysql = require('mysql'); //panggil library mysql

const db = mysql.createPool({ //keperluan untuk koneksi db
    host: 'localhost', //KONFIGURASI nya
    user: 'root', //tergantung user konfigurasi 
    password: '',
    database: 'negara_asia' //nama db
});   

exports.db = db; //