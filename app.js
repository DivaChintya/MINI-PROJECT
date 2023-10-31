// app.js

const express = require('express'); //Express.js digunakan untuk membuat server
const bodyParser = require('body-parser'); //untuk mengurai data request dengan format JSON
const {db} = require('./model/db');
const app = express();
const port = 3000;

app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

// GET>>>>>>>>>>>>>>Endpoint untuk mendapatkan daftar negara beserta informasi tambahan<SELURUH DATA>
app.get('/api/readData', (req, res) => { //function req=
  const sqlQuery = "SELECT * FROM negara"; //query string

  db.query(sqlQuery, (err, result)=>{
    if (err) {
      console.log(err);
    }else {
      res.json(result);
      console.log(result);
    }
  });
});
// GET >>>>>>>>>>>>>> Berdasarkan indexnya
app.get('/api/readUser/:nama', (req, res) => {
  const namaNegara = req.params.nama;

  const sqlQuery = "SELECT *FROM negara WHERE nama = ?"; 
  // ? = nilainya kita ambil dari nilai yang dimasukan pada parameter URL nya
  db.query(sqlQuery, namaNegara, (err, result) => {
    if (err) {
      console.log(err);
    }else {
      res.json(result);
      console.log(result);
    }
  });
});



//CREATE
app.post('/api/createData', (req,res) => {
  const namaNegara = req.body.nama;
  const IBUKOTAApa = req.body.ibukota;
  const BENUAApa = req.body.benua;
  const MATAUANGapa = req.body.mata_uang;
  const BAHASAapa = req.body.bahasa;

  const sqlQuery = "INSERT INTO negara (nama, ibukota, benua, mata_uang, bahasa) VALUE (?, ?, ?, ?, ?)";
  db.query(sqlQuery, [namaNegara, IBUKOTAApa, BENUAApa, MATAUANGapa, BAHASAapa], (err, result) => {
    if (err) {
      console.log(err);
    }else {
      res.json(result);
      console.log(result);
    }
  });
});

//UPDATE
app.put('/api/updateData', (req, res) => {
  const namaNegara = req.body.nama;
  const IBUKOTAApa = req.body.ibukota;

  const sqlQuery = "UPDATE negara SET ibukota = ? WHERE nama = ?";
  db.query(sqlQuery, [IBUKOTAApa, namaNegara], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(result);
      console.log(result);
    }
  });
});

//DELETE
app.delete('/api/deleteData', (req,res) => {
const idNegara = req.body.id_negara;
const sqlQuery = "DELETE FROM negara WHERE id_negara = ?";
db.query(sqlQuery, idNegara, (err, result) => {
  if (err) {
    console.log(err);
  }else {
    res.json(result);
    console.log(result);
  }
});
});


app.listen(port, () => { //untukmenjalankan server Express; 'port' = nomor port server berjalan
console.log(`Server berjalan di http://localhost:${port}/api/negara`);
});
