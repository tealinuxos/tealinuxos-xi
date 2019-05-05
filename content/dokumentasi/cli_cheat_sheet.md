---
title: Cli Cheat Sheet
type: panduan
order: 114
---
CLI merupakan antarmuka tanpa menggunakan gambar, ia hanya menggunakan teks untuk menjalankan keseluruhan fungsinya, berikut adalah beberapa perintah dasar CLI.

## Pertolongan Pertama CLI
Sebagai seorang pemula yang ingin mempelajari CLI tentunya kita membutuhkan bantuan, linux sudah menyiapkan beberapa bantuan yang dapat anda gunakan ketika sedang kesulitan dalam menggunakan perintah baris salah satunya adalah

-  `man` (manual)

    mencetak deskripsi lengkap dari suatu perintah
    ```
    $ man [perintah]
    $ man pwd
    ```
-  `whatis`

    mencetak deskripsi singkat dari suatu perintah
    ```
    $ whatis [perintah]
    $ whatis pwd
    ```

## Bekerja Dengan Direktori

-  `pwd` (print working directory)

    mencetak posisi dimana kita sedang berada
    ```
    $ pwd
    ```
- `cd` (change directory)

    berpindah dari posisi saat ini menuju direktori tujuan
    ```
    $ cd [nama_directori]
    $ cd tugas/
    ```
- `.`

    merujuk kedalam direktori yang sedang disinggahi
    ```
    $ cd .
    ```
- `..`

    menuju satu direktori sebelumnya
    ```
    $ cd ..
    ```
- `ls` (list)

    menampilkan seluruh isi dalam sebuah folder
    ```
    $ ls
    ```
## Bekerja Dengan File
- `cp` (copy)

    menyalin suatu file ke-direktori tujuan
    ```
    $ cp [nama_file] [direktori_tujuan]
    $ cp file-1.txt tugas/
    ```
- `mv` (move)

    memindahkan suatu file ke-direktori tujuan dan mengubah nama file apabila dalam direktori yang sama
    ```
    $ mv [nama_file] [direktori_tujuan]
    $ mv file-1.txt file-2.txt
    ```
- `rm` (remove)

    menghapus suatu file atau direktori berdasarkan posisi saat ini
    ```
    $ rm [nama_file]
    $ rm file-2.txt
    ```
- `touch`

    membuat file baru dalam sebuah direktori
    ```
    $ touch [nama_file]
    $ touch file-1.txt
    ```
- `mkdir` (make direktory)

    membuat sebuah direktori baru atau file
    ```
    $ mkdir [nama_direktori]
    $ mkdir penting/
    ```
- `echo`

    mencetak sebuah baris, ia juga dapat menuliskannya kedalam sebuah file
    ```
    $ echo "[pesan_dicetak]"
    $ echo "Hello, World!"
    ```
- `more`

    menampilkan isi dari sebuah file
    ```
    $ more [nama_file]
    $ more file-2.txt
    ```
## Bekerja Dengan Perizinan

- `chown`

    mengubah kepemilikan pada sebuah file atau direktori
    ```
    $ chown [pemilik] [nama_file]
    $ chown root latian.txt
    ```
    <!--     selain mengubah kepemilikan, kita juga dapat membatasi apa saja yang dapat dilakukan oleh `user`, `group`, dan `root`. Perilaku yang dapat kita lakukan didalam linux dapat dipresentasikan oleh nomor ataupun huruf seperti `1 & x` untuk execute atau menjalankan file, `2 & w` untuk write atau mengedit file, serta `4 & r` untuk read atau membaca suatu file. Oleh karnanya kita tidak boleh sembarangan memberikan akses pada suatu file -->
- `chmod`

    mengubah perizinan pada sebuah file atau direktori
    ```
    $ chmod [pemilik] [operator] [perilaku] [nama_file]
    $ chmod u+x index.txt
    ```
- `whoami`

    mencetak user manakah yang sedang menggunakan sistem
    ```
    $ whoami
    $ [nama_user]
    ```
<!--
- find

    mencari suatu file dalam sebuah direktori
    ```
    $ mkdir [nama_direktori]
    ```
- grep

    mencetak daftar berdasarkan kata kunci yang dicari
    ```
    $ mkdir [nama_direktori]
    ```
- cat

    mengabungkan sebuah file dan mencetaknya secara default
    ```
    $ cat [nama_file]
    ```
    -->
<!---
clear

    memberisihkan layar konsol
    ```
    $ clear
    ```
-->
- df

    menampilkan ukuran dari suatu file atau direktori
    ```
    $ df [nama_file]
    ```
- du

    menampilkan ruang kosong dari seluruh paritisi penyimpan data
    ```
    $ du
    ```
- menampilkan tanggal pada saat itu
- menampilkan kalender pada bulan ini
- menampilkan segala proses yang sedang dijalankan oleh sistem
- merestart komputer secara langsung
- mematikan komputer
- menampilkan deskripsi singkat tentang suatu perintah
- menampilkan deskripsi lengkap tentang suatu perintah
- menampilkan bantuan yang ada didalam sebuah perintah


| No   | Perintah   | Keterangan                                                  |
| ---- | :--------- | ----------------------------------------------------------- |
| 1    | `pwd`      | Mencetak di-direktori mana anda berada                      |
| 2    | `ls`       | Menampilkan seluruh isi dari sebuah direktori               |
| 3    | `cd`       | Pindah ke-direktori yang dituju                             |
| 4    | `cp`       | Menyalin suatu file ke-direktori yang dituju                |
| 5    | `mv`       | Memindahkan suatu file ke-direktori yang dituju             |
| 6    | `rm`       | Menghapus file                                              |
| 7    | `mkdir`    | Membuat direktori atau folder                               |
| 8    | `touch`    | Membuat file                                                |
| 9    | `find`     | Mencari file dalam suatu direktori                          |
| 10   | `history`  | Mencetak segala perintah yang telah digunakan               |
| 11   | `cat`      | Mencetak isi file                                           |
| 12   | `chown`    | Mengganti kepemilikan dari suatu file atau direktori        |
| 13   | `chmod`    | Mengganti izin penggunaan pada suatu file atau direktori    |
| 14   | `whoami`   | Mencetak siapa pengguna saat ini                            |
| 15   | `whatis`   | Menampilkan deskripsi singkat tentang suatu perintah        |
| 16   | `man`      | Menampilkan deskripsi lengkap tentang suatu perintah        |
| 17   | `echo`     | Mencetak baris teks                                         |
| 18   | `du`       | Mencetak ukuran dari seluruh file yang ada dalam direktori  |
| 19   | `df`       | Melihat *free space* dari seluruh partisi                   |
| 20   | `reboot`   | Menghidupkan ulang sistem                                   |
| 21   | `poweroff` | Mematikan sistem                                            |
| 22   | `clear`    | Membersihkan jendela terminal                               |
| 23   | `top`      | Memonitor segala proses yang sedang berjalan didalam sistem |
| 24   | `uname`    | Mencetak versi kernel yang dipakai                          |
| 25   | `date`     | Menampilkan tanggal sekarang                                |
| 26   | `cal`      | Memunculkan kalender                                        |
