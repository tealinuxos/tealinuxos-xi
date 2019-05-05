---
title: Panduan Instalasi TeaLinuxOS X
type: panduan
order: 120
---
### Membuat Bootable USB
1. Unduh [TealinuxOS](https://tealinuxos.org/)
2. Siapkan Flashdisk yang sudah di- *backup* datanya, flashdisk tersebut akan kita gunakan untuk membuat bootable.
3. Untuk membuat bootable kita dapat menggunakan software pihak *ke-tiga*, salah satunya adalah [Unetbootin](https://unetbootin.github.io/), [Rufus](https://rufus.akeo.ie/), [Universal USB Installer](https://www.pendrivelinux.com/universal-usb-installer-easy-as-1-2-3/), [Etcher](https://etcher.io/)
4. Pada kali ini kami menggunakan etcher, unduh dan install etcher terlebih dahulu
5. Apabila anda sudah mengunduh dan memasangnya pada komputer maka jalankan program tersebut
6. Pilih `select image` dan arahkan ke tempat dimana anda menyimpan master TealinuxOS
7. Pilih `select drive` dan pilih flashdisk yang sudah anda backup tadi
8. Klik `flash` dan tunggu hingga proses selesai

### Proses Instalasi TealinuxOS
1. Ubah prioritas pada bootable yang sudah anda buat menjadi yang tertinggi kemudian hidupkan ulang sistem anda
2. Tunggu beberapa saat kemudian akan muncul tampilan seperti berikut
![ss_tealinuxos](../images/ss_panduan/ss/VirtualBox_ngoprek_20_05_2018_15_05_26.png "opt title")
Anda dapat memilih `Try TeaLinuxOS` atau menginstal langsung dengan memilih `Install TeaLinuxOS`
3. Pilih bahasa yang anda akan gunakan serta tipe keyboard
![pilih_bahasa](../images/ss_panduan/ss/VirtualBox_ngoprek_20_05_2018_15_05_57.png "opt title")
4. Pada kali ini anda akan diberi pilihan untuk memasang software pihak ketiga, apabila anda terhubung dengan internet disarankan untuk memilih *download update while install TealinuxOS*
![third_part_soft](../images/ss_panduan/ss/VirtualBox_ngoprek_20_05_2018_15_06_21.png "opt title")
5. Selanjutnya pemilihan tempat penyimpanan patisi, anda bisa pilih `something else` untuk pengaturan secara manual
![membuat partisi](../images/ss_panduan/ss/VirtualBox_ngoprek_20_05_2018_15_06_57.png "opt title")
6. Akan tampil seluruh partisi yang ada di-sistem anda
7. Pertama buatlah patisi untuk `root` atau sistem, partisi ini penting dikarnakan seluruh sistem akan kita simpan didalamnya. Untuk ukuran *minimal* bisa diberikan 20GB akan tetapi kami *merekomendasikan* 50GB.
8. Kemudian buatlah partisi untuk `linux swap`, partisi ini berfungsi sebagai ram virtual pada sistem anda. Ukuran dari linux swap kami *merekomendasikan* 2GB karena pada umumnya swap digunakan untuk mengukur kinerja ram yang overload.
9. Memilih zona waktu
![zona_waktu](../images/ss_panduan/ss/VirtualBox_ngoprek_20_05_2018_15_09_38.png "opt title")
10. Masukan data diri anda
![user_data](../images/ss_panduan/ss/VirtualBox_ngoprek_20_05_2018_15_10_08.png "opt title")
11. Tunggu hingga proses instalasi selesai
![loading](../images/ss_panduan/ss/VirtualBox_ngoprek_20_05_2018_15_10_40.png "opt title")
12. Setelah proses instalisasi selesai anda diminta untuk merestart PC
![finish](../images/ss_panduan/ss/VirtualBox_ngoprek_20_05_2018_15_32_36.png "opt title")
kemudian akan tampil jedela seperti dibawah, anda tinggal mingsi username dan password sesuai yang data yang anda input sebelumnya
![login](../images/ss_panduan/ss/VirtualBox_ngoprek_20_05_2018_15_36_32.png "opt title")
12. Selamat anda sudah berhasil menginstal TealinuxOS dan selamat menikmati
![finish](../images/ss_panduan/ss/VirtualBox_ngoprek_20_05_2018_15_38_03.png "opt title")

