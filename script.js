// Soal 1
let permenAna = 30;
let diberikanPermen = 10;
let updatePermenAna = permenAna - diberikanPermen;
let anaBeliPermen = updatePermenAna * 2;

console.log("Jumlah permen ana yang dimiliki Sekarang adalah " + anaBeliPermen);

console.log("Jumlah permen ana adalah " + anaBeliPermen ** 2);

// Soal 2
let kucingPertama = "ali";
let kucingKedua = "hasan";
let gabungNamaKucing = kucingPertama + kucingKedua;

console.log(
  "nama kucing pertama adalah " +
    kucingPertama +
    " dan nama kucing ke 2 adalah " +
    kucingKedua,
);

console.log(
  "penggabungan ke kucing pertama dan kucing ke dua adalah " + gabungNamaKucing,
);

// Soal 3

let belalang = "12";
let nyamuk = "11";
let angsa = 10;

let hasilBelalangNyamuk = +belalang + nyamuk;
let hasilNyamukAngsa = +nyamuk + angsa;

console.log("hasil pertama adalah " + hasilBelalangNyamuk);
console.log("hasil yang ke-2 adalah " + hasilNyamukAngsa);

console.log(
  "penjelasan hasil pertama adalah karena belalang dikonversi menjadi angka dengan unary +, " +
    "nyamuk masih string jadi digabung",
);

console.log(
  "penjelasan hasil ke dua adalah karena nyamuk dikonversi menjadi angka dengan unary + " +
    "angsa sudah number jadi di jumlah",
);

// Soal 4

let hargaBukuFiksi = 5000;
let jumlahBukuFiksi = 5;

let hargaBukuNonFiksi = 7000;
let jumlahBukuNonFiksi = 3;

let hargaPena = 2000;
let jumlahPena = 2;

let totalBukuFiksi = hargaBukuFiksi * jumlahBukuFiksi;
let totalBukuNonFiksi = hargaBukuNonFiksi * jumlahBukuNonFiksi;
let totalPena = hargaPena * jumlahPena;

let totalBiayaAisha = totalBukuFiksi + totalBukuNonFiksi + totalPena;

console.log(
  "Total semua biaya yang harus dibayar Aisha adalah " + totalBiayaAisha,
);

// Soal 5

let penjumlahan1 = 5 + 3 * 2;
let penjumlahan2 = (5 + 3) * 2;

console.log("Nilai penjumlahan yang pertama adalah " + penjumlahan1);
console.log("Nilai penjumlahan yang ke-2 adalah " + penjumlahan2);

console.log(
  "penjumlahan pertama karena operator perkalian " +
    "lebih utama dibanding penjumlahan, maka 3 dikali 2 diitung " +
    "pertama baru ditambahkan dengan 5",
);

console.log(
  "penjumlahan ke 2 karena tanda kurung membuat operasi " +
    "penjumlahan 5 dan 3 diitung pertama, abis itu dikalikan 2",
);

// Soal 6

let kresek = 4;
let kotak = 6;
let ember = 5 + (kresek = kotak);

console.log(kresek);
console.log(kotak);
console.log(ember);
("karena ember di tambah kotak = 11");

// Soal 7

let x, y, z;
z = 5 + 10 + 15;

console.log(
  "nilai x adalah " + x + ", nilai y adalah " + y + ", dan nilai z adalah " + z,
);

// Soal 8

let money = 4;

money *= 2;

money *= 2;

console.log("nilai variable money adalah " + money);

// Soal 9
let J = 5;
J++;
let K = 8;
K--;

console.log("Hasil variable J adalah " + J + " dan variable K adalah " + K);
console.log(
  "Hasil J karena  ++ menambahkan nilai 1  J, sedangkan variable K dikurangi 1 karena  --",
);

// Soal 10
let room = 'hafs';
let age = 18;
let shoesNumber = '42';
let married = false;

console.log(typeof room);
console.log(typeof age);
console.log(typeof shoesNumber);
console.log(typeof married);
