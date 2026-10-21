# Design System --- Website Souvenir Kantor

**Versi:** 1.0\
**Tanggal:** 20 Oktober 2026\
**Platform:** HTML5 + Bootstrap 5.3.x + CSS murni + JavaScript vanilla

## 1. Arah Visual

Desain harus terasa premium, rapi, terpercaya, dan cocok untuk pembelian
B2B. Produk adalah fokus visual utama: gunakan fotografi produk yang
konsisten, pencahayaan bersih, latar netral, detail branding yang nyata,
dan komposisi yang tidak terlalu ramai.

Hindari tampilan template generik dengan gradient berlebihan, terlalu
banyak efek blur, animasi berlebihan, badge palsu, angka statistik yang
tidak dapat diverifikasi, dan foto stok yang seolah-olah merupakan hasil
proyek nyata.

## 2. Color Palette

Palet utama menggabungkan navy sebagai warna kepercayaan, teal sebagai
aksen aksi, dan ivory sebagai latar hangat.

  -------------------------------------------------------------------------
  Token                     Hex                     Penggunaan
  ------------------------- ----------------------- -----------------------
  `--color-primary`         `#17324D`               Navbar, heading
                                                    tertentu, footer

  `--color-primary-dark`    `#102538`               Hover/active navy,
                                                    footer lebih gelap

  `--color-accent`          `#C58B55`               Aksen premium, garis
                                                    dekoratif, highlight
                                                    terbatas

  `--color-action`          `#087F8C`               CTA utama, link
                                                    interaktif

  `--color-action-hover`    `#066872`               Hover CTA

  `--color-bg`              `#FAF8F4`               Latar halaman ivory

  `--color-surface`         `#FFFFFF`               Card, form, navbar
                                                    terang

  `--color-surface-muted`   `#F0EEE8`               Section alternatif

  `--color-text`            `#24313D`               Teks utama

  `--color-text-muted`      `#64717D`               Deskripsi sekunder

  `--color-border`          `#E1E4E6`               Border, divider

  `--color-success`         `#247A55`               Status sukses yang
                                                    valid

  `--color-danger`          `#B42318`               Error form
  -------------------------------------------------------------------------

Aturan: - Gunakan putih/ivory untuk ruang kosong dan keterbacaan. -
Accent emas hanya sebagai detail, bukan warna seluruh tombol. - CTA
WhatsApp dapat memakai warna hijau yang familiar, tetapi tetap pastikan
kontras teks. Jangan menggunakan hijau untuk semua elemen interaktif. -
Jangan mengandalkan warna saja untuk menunjukkan status. - Uji kontras
teks normal minimal 4.5:1 dan teks besar minimal 3:1 sesuai WCAG AA.

## 3. Tipografi

-   Font utama: `Plus Jakarta Sans` atau system font stack jika font
    eksternal memperlambat situs.
-   Body: 16--18 px, line-height 1.6--1.75.
-   H1 desktop: clamp sekitar 2.5--4rem; mobile sekitar 2rem--2.7rem.
-   H2: clamp sekitar 1.8--2.7rem.
-   H3: 1.2--1.5rem.
-   Caption/metadata: 0.8--0.95rem, tetap terbaca.
-   Maksimum lebar teks artikel sekitar 68--75 karakter per baris.
-   Gunakan font weight 400 untuk body, 500--600 untuk label, 600--700
    untuk heading.
-   Hindari paragraf seluruhnya uppercase dan penggunaan terlalu banyak
    jenis font.

## 4. Layout dan Grid

-   Container utama Bootstrap: `.container` atau `.container-xl`, sesuai
    section.
-   Grid Bootstrap: `row g-4`, `col-12 col-md-6 col-lg-4`.
-   Spacing section desktop: sekitar 5--7rem vertikal; tablet 4--5rem;
    mobile 3--4rem.
-   Padding kartu: 1.25--1.75rem.
-   Radius kartu: 14--20px; tombol 8--12px; gambar sesuai bahasa visual
    kartu.
-   Border tipis dan shadow halus; jangan semua elemen diberi shadow.
-   Gunakan satu section background alternatif untuk membantu ritme
    halaman.
-   Lebar isi artikel sekitar 760--860px; jangan menyempitkan area
    artikel tanpa alasan.
-   Header sticky boleh digunakan bila tidak menghabiskan tinggi layar
    mobile.

## 5. Navbar

Urutan item: 1. Logo/nama brand. 2. Beranda. 3. Tentang. 4. Paket dengan
dropdown. 5. Portofolio. 6. Blog. 7. CTA "Konsultasi WhatsApp".

Perilaku: - Desktop: navbar satu baris, dropdown dengan indikator
visual. - Mobile: tombol toggler memiliki `aria-controls`,
`aria-expanded`, dan accessible label. - Dropdown harus dapat diakses
dengan keyboard dan sentuhan; jangan bergantung hanya pada hover. - Area
klik minimal nyaman, sekitar 44×44 CSS px untuk kontrol utama. - Berikan
state hover, focus-visible, active, dan current page. - Jika sticky,
gunakan `scroll-margin-top` untuk anchor dan hindari menutupi heading.

## 6. Komponen UI

### Button

-   Primary: latar action teal, teks putih, hover lebih gelap.
-   Secondary: putih/transparent dengan border navy atau teal.
-   WhatsApp: ikon + teks yang jelas; gunakan nomor yang sama di semua
    halaman.
-   Ukuran minimum nyaman 44px tinggi.
-   State: hover, focus-visible, active, disabled.
-   Transisi 160--220ms; nonaktifkan/kurangi gerakan ketika
    `prefers-reduced-motion: reduce`.

### Card Paket

-   Foto rasio konsisten, idealnya 4:3 atau 1:1 sesuai produk.
-   Judul, manfaat singkat, tipe kebutuhan, dan tautan detail.
-   CTA tidak bersaing dengan CTA global.
-   Seluruh kartu tidak perlu dibuat clickable jika di dalamnya terdapat
    beberapa link.

### Portfolio Card

-   Foto hasil pekerjaan yang nyata.
-   Judul proyek/kategori dan konteks singkat.
-   Jangan menyebut klien tanpa izin.
-   Hindari efek overlay yang menghilangkan detail foto.

### Blog Card

-   Gambar 16:9, kategori, judul, ringkasan, tanggal/penulis yang valid.
-   Judul maksimal sekitar 2--3 baris pada grid.
-   Jangan menampilkan tanggal dummy atau penulis palsu.

### FAQ

-   Gunakan elemen `<details>`/`<summary>` atau Bootstrap accordion
    dengan atribut aksesibilitas yang benar.
-   Jawaban harus tampil bagi pengguna dan tidak mengandung klaim yang
    tidak dapat dibuktikan.

### Breadcrumb

-   Letakkan di bawah navbar atau di awal main content.
-   Teks sederhana, dapat dibaca, dan mencerminkan struktur navigasi.
-   Samakan breadcrumb visual dengan `BreadcrumbList` JSON-LD bila
    schema digunakan.

### Form Brief (opsional)

-   Label terlihat, bukan placeholder saja.
-   Field: nama, perusahaan, kategori, jumlah, deadline, kota
    pengiriman, dan catatan.
-   Tampilkan teks privasi singkat.
-   Jika hanya menyusun pesan WhatsApp, jelaskan bahwa tombol akan
    membuka WhatsApp dengan pesan yang telah disiapkan.
-   Validasi client-side bukan pengganti validasi server; website statis
    tidak boleh mengklaim data tersimpan.

## 7. Spesifikasi Halaman

### Beranda

1.  Navbar.
2.  Hero dua kolom pada desktop: copy dan CTA di satu sisi, foto produk
    premium di sisi lain. Mobile menjadi satu kolom dengan heading dan
    CTA lebih dulu.
3.  Trust/process strip berdasarkan fakta yang valid.
4.  Grid kategori paket.
5.  Value proposition.
6.  Proses pemesanan dalam 4--6 langkah.
7.  Portofolio pilihan.
8.  Segmen kebutuhan.
9.  Artikel terbaru.
10. FAQ.
11. CTA penutup.
12. Footer.

### Tentang

-   Hero ringkas dengan foto proses/produk yang autentik.
-   Cerita usaha dan pendekatan.
-   Kapabilitas dan proses kerja.
-   Standar kualitas aktual.
-   Area layanan yang benar.
-   CTA.

### Paket

-   Hero kategori dan filter/anchor kategori.
-   Grid paket dengan spesifikasi ringkas.
-   Panduan memilih berdasarkan tujuan, jumlah, dan budget.
-   FAQ kategori dan CTA.

### Detail Paket

-   Breadcrumb.
-   Gallery gambar dengan `alt` yang spesifik.
-   H1 dan ringkasan.
-   Spesifikasi.
-   Opsi custom/branding.
-   Faktor penentu penawaran.
-   Produk terkait.
-   FAQ dan CTA WhatsApp.

### Portofolio

-   Grid gambar dengan rasio konsisten.
-   Filter yang usable tanpa mouse.
-   Detail proyek hanya berdasarkan informasi yang diizinkan.
-   CTA kebutuhan serupa.

### Blog

-   Artikel unggulan.
-   Kategori/topik.
-   Grid artikel dan pagination jika konten banyak.
-   Search/filter hanya jika benar-benar berfungsi.

### Detail Artikel

-   Breadcrumb.
-   Judul, ringkasan, author, tanggal yang valid.
-   Kolom artikel yang nyaman dibaca.
-   Daftar isi bila panjang.
-   Isi dengan heading, gambar, tabel, daftar, sumber.
-   Artikel terkait dan CTA kontekstual.

### Kontak

-   Pilihan kanal kontak yang valid.
-   CTA WhatsApp dominan.
-   Form brief opsional yang jujur soal cara pengiriman data.
-   Jam/alamat hanya jika terverifikasi.

### Footer

-   Kolom ringkasan brand.
-   Navigasi utama.
-   Kategori paket.
-   Kontak resmi.
-   Sosial media resmi.
-   Kebijakan privasi.
-   Copyright dinamis opsional melalui JavaScript sederhana.

## 8. Foto dan Art Direction

-   Prioritaskan foto produk milik bisnis atau foto yang memiliki izin.
-   Subjek: gift box, notebook, tumbler, tote bag, pen, desk
    accessories, welcome kit, hampers, dan kemasan.
-   Latar: ivory, abu hangat, navy, kayu netral, atau lingkungan kantor
    yang rapi.
-   Cahaya: lembut dan realistis; tekstur produk terlihat.
-   Komposisi: produk menjadi fokus, ruang negatif cukup untuk layout.
-   Logo contoh tidak boleh menyerupai brand klien nyata tanpa izin.
-   Jangan menggunakan manusia/figur jika tidak diperlukan; fokus pada
    produk dan detail.
-   Hindari memakai gambar yang sama untuk semua kategori.
-   Sediakan versi WebP/AVIF jika alur produksi memungkinkan; jangan
    mengorbankan kualitas visual.
-   Nama file deskriptif, misalnya
    `corporate-onboarding-kit-notebook-tumbler.webp`.
-   Alt text menjelaskan apa yang terlihat, bukan menjejalkan keyword.

## 9. Motion dan Interaksi

-   Transisi warna tombol/link: 160--220ms.
-   Reveal saat scroll hanya sebagai enhancement; konten harus tetap
    terlihat jika JavaScript gagal.
-   Hindari animasi yang menggeser layout, autoplay video bersuara,
    parallax berat, atau carousel otomatis.
-   Hormati `prefers-reduced-motion`.
-   Gunakan `:focus-visible` yang jelas.
-   Jangan memakai hover sebagai satu-satunya cara menampilkan
    informasi.

## 10. Responsive Rules

Breakpoints Bootstrap menjadi dasar, tetapi uji dengan viewport
aktual: - XS: \<576px - SM: ≥576px - MD: ≥768px - LG: ≥992px - XL:
≥1200px - XXL: ≥1400px

Aturan wajib: - Tidak ada horizontal scrolling pada viewport
320px--430px. - Gunakan `max-width: 100%`, `min-width: 0`, dan
`overflow-wrap: anywhere` untuk konten yang berisiko panjang. - Hindari
`width` tetap yang lebih besar daripada layar. - Pastikan gambar, tabel,
code, dan komponen embed tidak meluap. - Hero, tombol, dan kartu stack
pada mobile. - Font dan spacing menggunakan `clamp()` secara
hati-hati. - Uji menu mobile, dropdown, footer, dan form dengan konten
panjang. - Jangan menyembunyikan overflow global untuk menutupi bug;
perbaiki elemen penyebabnya.

## 11. Accessibility

-   Struktur `header`, `nav`, `main`, `section`, `article`, dan `footer`
    semantik.
-   Sediakan skip link ke main content.
-   Urutan heading logis.
-   Semua fungsi dapat dipakai keyboard.
-   Focus ring terlihat.
-   Form memiliki label eksplisit dan pesan error yang terbaca screen
    reader.
-   Kontras memenuhi WCAG AA.
-   Gambar dekoratif memakai alt kosong; gambar informatif memakai alt
    deskriptif.
-   Ikon tanpa teks memiliki accessible label.
-   Gunakan `aria-expanded`/`aria-controls` saat sesuai.
-   Jangan menonaktifkan zoom browser.

## 12. Design Tokens CSS

Tempatkan token di bagian awal `assets/css/style.css`:

``` css
:root {
  --color-primary: #17324D;
  --color-primary-dark: #102538;
  --color-accent: #C58B55;
  --color-action: #087F8C;
  --color-action-hover: #066872;
  --color-bg: #FAF8F4;
  --color-surface: #FFFFFF;
  --color-surface-muted: #F0EEE8;
  --color-text: #24313D;
  --color-text-muted: #64717D;
  --color-border: #E1E4E6;

  --font-body: "Plus Jakarta Sans", system-ui, -apple-system,
    "Segoe UI", sans-serif;

  --radius-sm: 8px;
  --radius-md: 14px;
  --radius-lg: 20px;

  --shadow-card: 0 10px 30px rgba(16, 37, 56, 0.07);
  --container-reading: 800px;

  --space-section: clamp(3rem, 6vw, 6rem);
  --transition-fast: 180ms ease;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-body);
  color: var(--color-text);
  background: var(--color-bg);
  line-height: 1.7;
}

img,
svg,
video {
  max-width: 100%;
}

:focus-visible {
  outline: 3px solid var(--color-action);
  outline-offset: 3px;
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

Token di atas merupakan fondasi, bukan stylesheet lengkap. Periksa
kontras aktual setelah warna diterapkan pada semua komponen.

## 13. WhatsApp CTA Pattern

Nomor tujuan tunggal: `6285999666888`.

Contoh pola HTML:

``` html
<a
  class="btn btn-primary"
  href="https://wa.me/6285999666888?text=Halo%2C%20saya%20ingin%20konsultasi%20souvenir%20kantor."
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Konsultasi souvenir kantor melalui WhatsApp"
>
  Konsultasi via WhatsApp
</a>
```

Untuk pesan dinamis, buat URL memakai `encodeURIComponent()` dan
validasi input. Jangan menyertakan data sensitif ke dalam query string.
Semua link harus diuji sebelum rilis.

## 14. SEO Visual dan Konten

-   Title, meta description, H1, OG, canonical, dan JSON-LD disesuaikan
    per halaman.
-   Hero tidak boleh hanya berupa teks dalam gambar.
-   Gambar harus punya dimensi untuk menghindari layout shift.
-   Lazy-load gambar di bawah fold, tetapi jangan lazy-load gambar LCP
    utama tanpa alasan.
-   Sediakan Open Graph image yang relevan dan URL absolut.
-   Artikel memakai metadata yang akurat dan menyertakan sumber bila ada
    klaim eksternal.
-   Jangan menambahkan rating/review palsu pada UI atau schema.
-   FAQ harus menjawab pertanyaan nyata, bukan sekadar mengulang
    keyword.

## 15. Checklist Visual QA

-   [ ] Navbar desktop dan mobile berjalan.
-   [ ] Dropdown Paket bisa dioperasikan dengan keyboard dan sentuhan.
-   [ ] Semua CTA menuju nomor WhatsApp yang benar.
-   [ ] Tidak ada horizontal overflow di 320, 360, 390, 430 px.
-   [ ] Layout diperiksa di 768, 1024, 1280, dan 1440 px.
-   [ ] Foto konsisten, tajam, memiliki alt, dan tidak melompat saat
    loading.
-   [ ] Kontras dan focus state diperiksa.
-   [ ] Reduced-motion dihormati.
-   [ ] Semua tombol dan filter bekerja.
-   [ ] Tidak ada placeholder, angka, logo, review, atau testimoni
    fiktif.
-   [ ] Semua halaman memiliki title, description, canonical, dan OG
    sesuai halaman.
-   [ ] Schema divalidasi dan sesuai konten terlihat.
-   [ ] Lighthouse/PageSpeed dan pengujian manual dilakukan sebelum
    deployment.
