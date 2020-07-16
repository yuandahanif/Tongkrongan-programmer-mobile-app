# Tongkrongan programmer

Aplikasi untuk show-off project dan skill para programmer di indonesia.

[Link disain UI di Figma](https://www.figma.com/file/ulLwQfXkM9mPSMdzwKIpdA/Tongkrongan-programmer-v3?node-id=0%3A1)

## Di buat menggunakan
- [Neact Native](https://reactnative.dev/)
- [redux-thunk](https://github.com/reduxjs/redux-thunk)
- [Redux](https://redux.js.org/)
- [React Redux](https://react-redux.js.org/)
-  [React Navigation](https://reactnavigation.org/)
-  [Firebase](https://firebase.google.com/)
- dan masih banyak lainnya
## Screenshot
| ![11 juli 2020](https://gitlab.com/yuandahanif/tongkrongan-programmer-mobile-app/-/raw/master/src/screenshot/ezgif.com-optimize.gif) | 
|--|
| Screenshot di ambil 11 juli 2020 |

# Rilis fitur

#### Alpha 
##### 11 juli 2020 :
- menggunakan API repository github sebagai sumber data (dummy).
- dapat melakukan registrasi.
- login dengan autentikasi user yang telah dibuat sebelumnya.
- ada 5 halaman untuk saat ini (Login, Register, Home, Detail, dan Profile).

##### 14 juli 2020 :
- Integrasi dengan Firebase.
- Registrasi dan Login menggunakan Firebase.
- Selesai membuat skema Database untuk User.
- Halaman AboutMe menampilkan informasi User yang sedang Login.

##### 16 juli 2020 :
- Persist Login Credentials (di branch redesign_AboutMeScreen).

## Kekurangan
#### Alpha

 - ~~data registrasi disimpan di penyimpanan lokal.~~
-  ~~hanya bisa menyimpan 1 data registrasi.~~
- tulisan "Selamat pagi, Yuanda Hanif" pada halaman Home masih bersifat statis.
- login dengan google belum berfungsi.
- belum ada error handling untuk gagal load gambar pada internet lambat.
- ~~login setelah logout langsung mengarah ke halaman AboutMe~~
- Data Skill dan Pengalaman pada halaman AbouteMe menampilkan data statis.


