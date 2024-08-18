<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Ambil data dari formulir
    $nama = htmlspecialchars($_POST['nama']);
    $email_pengirim = htmlspecialchars($_POST['email']);
    $pesan = htmlspecialchars($_POST['pesan']);

    // Email tujuan
    $email_tujuan = "fadel.gans20@gmail.com"; // Ganti dengan email Anda sendiri

    // Subjek email
    $subjek = "Pesan dari $nama";

    // Format pesan email
    $pesan_email = "Nama: $nama\n";
    $pesan_email .= "Email: $email_pengirim\n";
    $pesan_email .= "Pesan:\n$pesan";

    // Header email
    $headers = "From: $email_pengirim";

    // Kirim email
    if (mail($email_tujuan, $subjek, $pesan_email, $headers)) {
        echo "Pesan berhasil dikirim.";
    } else {
        echo "Pesan gagal dikirim.";
    }
}
?>