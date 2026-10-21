# PRD --- Website Souvenir Kantor

**Versi:** 1.0\
**Tanggal:** 20 Oktober 2026\
**Status:** Dokumen kebutuhan produk untuk implementasi\
**Bahasa:** Indonesia\
**Jenis proyek:** Website statis B2B berbasis HTML5, Bootstrap 5.3.x,
CSS murni, dan JavaScript vanilla

## 1. Ringkasan Produk

Website katalog dan lead-generation untuk bisnis souvenir kantor,
merchandise perusahaan, corporate gift, onboarding kit, hampers
korporat, dan paket promosi. Tujuan utamanya adalah membantu calon
pelanggan memahami layanan, menilai kualitas melalui portofolio, memilih
kategori paket, lalu meminta penawaran melalui WhatsApp.

Website tidak boleh mengarang harga, klien, testimoni, jumlah pesanan,
sertifikasi, alamat, atau klaim layanan. Data yang belum diberikan harus
ditulis sebagai placeholder yang jelas dan mudah diganti sebelum
publikasi.

## 2. Tujuan dan KPI

### Tujuan bisnis

-   Menghasilkan permintaan penawaran B2B yang relevan.
-   Menampilkan produk dan hasil pekerjaan secara meyakinkan.
-   Meningkatkan visibilitas pencarian organik dan kemudahan pemahaman
    konten oleh mesin pencari serta sistem AI.
-   Menyediakan fondasi yang mudah dipelihara tanpa backend pada tahap
    pertama.

### KPI yang dapat dipantau

-   Klik tombol WhatsApp per halaman dan per CTA.
-   Jumlah sesi organik dan klik pencarian melalui Google Search
    Console.
-   Rasio klik dari halaman paket/portofolio ke WhatsApp.
-   Core Web Vitals dan performa mobile.
-   Jumlah halaman valid terindeks, kesalahan crawl, dan error
    structured data.
-   Kualitas lead: kebutuhan, kuantitas, deadline, lokasi, dan budget
    yang masuk.

Tidak ada janji peringkat Google atau kemunculan pasti di jawaban AI.
KPI dipakai untuk evaluasi, bukan jaminan.

## 3. Target Pengguna

1.  **HR/People & Culture:** onboarding kit, welcome kit, hadiah
    karyawan, apresiasi masa kerja.
2.  **Procurement/General Affairs:** pengadaan merchandise dengan
    spesifikasi, kuantitas, tenggat, dan invoice yang jelas.
3.  **Marketing/Brand:** merchandise promosi, event kit, hadiah
    pelanggan, produk berlogo.
4.  **Event organizer:** seminar kit, konferensi, gathering, dan
    kebutuhan acara.
5.  **Pemilik bisnis/UMKM:** paket hadiah klien, hampers, dan souvenir
    perusahaan.

## 4. Ruang Lingkup

### Termasuk pada rilis awal

-   Halaman Beranda, Tentang, Paket, detail kategori paket, Portofolio,
    Blog, detail artikel, Kontak, Kebijakan Privasi, dan 404.
-   Navbar responsif dan dropdown Paket.
-   CTA WhatsApp dengan pesan kontekstual.
-   Kartu paket/produk dan filter sederhana bila diperlukan.
-   Portofolio dengan gambar, tujuan proyek, jenis produk, dan detail
    yang benar-benar tersedia.
-   Artikel edukatif dengan struktur heading, daftar isi opsional,
    tanggal terbit/perbarui, dan penulis yang nyata.
-   Metadata SEO, Open Graph, canonical, sitemap.xml, robots.txt,
    favicon, dan JSON-LD sesuai konten.
-   Analitik berbasis persetujuan/kebijakan privasi bila dipasang.
-   Dokumentasi `PRD.md` dan `design.md`.

### Tidak termasuk pada rilis awal

-   Login/admin dashboard.
-   Keranjang dan checkout online.
-   Database atau CMS.
-   Payment gateway.
-   Kalkulator harga yang menjanjikan harga final tanpa proses
    quotation.
-   Klaim otomatis ketersediaan stok atau harga real-time.

## 5. Arsitektur dan Teknologi

-   HTML5 semantik dengan `lang="id"`.
-   Bootstrap 5.3.x stabil terbaru yang telah diverifikasi dari
    dokumentasi resmi saat implementasi. Hindari menyebut versi sebagai
    "terbaru" secara permanen; periksa release resmi sebelum upgrade.
-   CSS khusus di `assets/css/style.css`; Bootstrap tidak diganti dengan
    framework CSS lain.
-   JavaScript vanilla di `assets/js/main.js`.
-   Bootstrap Bundle untuk dropdown dan navbar collapse.
-   Ikon: Bootstrap Icons atau SVG lokal; hindari menambahkan banyak
    library.
-   Gambar WebP/AVIF jika didukung, fallback yang sesuai, dimensi
    eksplisit, dan `alt` deskriptif.
-   Website statis dapat di-host di layanan static hosting atau web
    server yang mendukung HTTPS dan header yang sesuai.

## 6. Struktur Navigasi

Navbar utama wajib berisi: - **Beranda** → `/index.html` atau `/` -
**Tentang** → `/tentang.html` - **Paket** → dropdown: - Corporate Gift
Set - Corporate Onboarding / Welcome Kit - Seminar Kit & Event
Merchandise - Custom Merchandise - Hampers Perusahaan - Semua Paket -
**Portofolio** → `/portofolio.html` - **Blog** → `/blog/` atau
`/blog.html` - CTA terpisah yang menonjol: **Konsultasi via WhatsApp**

Gunakan URL bersih bila server dapat mengatur rewrite; bila tidak,
konsisten gunakan `.html`. Jangan membuat tautan ke halaman yang belum
ada.

## 7. Isi Halaman secara Lengkap

### 7.1 Beranda

1.  **SEO head:** title unik, meta description, canonical, Open Graph,
    Twitter/X card, favicon, theme-color, dan metadata bahasa.
2.  **Header/navbar:** logo, lima item navigasi, dropdown Paket yang
    bisa dipakai keyboard/touch, tombol konsultasi.
3.  **Hero:** H1 yang menjelaskan layanan inti dan target B2B; ringkasan
    manfaat; CTA "Konsultasikan Kebutuhan" dan CTA sekunder "Lihat
    Portofolio"; foto produk asli.
4.  **Trust strip:** hanya logo klien, sertifikasi, atau angka yang
    dapat dibuktikan. Jika belum ada, ganti dengan proses layanan atau
    kategori yang dilayani.
5.  **Kategori paket unggulan:** kartu dengan foto, ringkasan, kegunaan,
    dan tautan detail.
6.  **Alasan memilih layanan:** kemampuan kustomisasi, opsi branding,
    dukungan pemilihan produk, dan alur quotation---hanya yang
    benar-benar ditawarkan.
7.  **Cara kerja:** konsultasi → brief dan spesifikasi → penawaran →
    persetujuan desain/sample bila tersedia → produksi → quality check →
    pengiriman. Sesuaikan proses aktual.
8.  **Portofolio pilihan:** proyek nyata, gambar, kebutuhan, solusi, dan
    hasil terukur jika datanya ada.
9.  **Segmen kebutuhan:** onboarding, event, apresiasi karyawan, hadiah
    klien, campaign marketing.
10. **Panduan memilih souvenir:** kuantitas, anggaran, penerima, tujuan,
    deadline, dan branding.
11. **FAQ ringkas:** minimum order, lead time, logo, pengiriman,
    pembayaran, dan permintaan penawaran. Jawab hanya sesuai kebijakan
    nyata.
12. **Artikel terbaru:** 3 artikel relevan.
13. **CTA akhir:** minta pengguna menyiapkan jenis barang, jumlah,
    deadline, dan kota pengiriman.
14. **Footer:** ringkasan bisnis, navigasi, kategori paket, kontak yang
    terverifikasi, sosial resmi, kebijakan privasi, copyright.
15. **Schema:** `Organization` (atau subtype paling tepat bila faktanya
    mendukung), `WebSite`, dan `WebPage`; `BreadcrumbList` bila
    breadcrumb tampil dan relevan.

### 7.2 Tentang

-   H1 yang menjelaskan identitas usaha.
-   Ringkasan perusahaan: siapa, melayani siapa, dan kebutuhan apa yang
    dibantu.
-   Misi/pendekatan layanan, bukan klaim pemasaran generik.
-   Jenis kebutuhan B2B yang dilayani.
-   Kapabilitas nyata: kustomisasi, pengadaan, produksi, pengemasan,
    pengiriman, atau konsultasi---pilih yang benar-benar tersedia.
-   Alur kerja dan titik persetujuan pelanggan.
-   Standar kualitas yang benar-benar dijalankan.
-   Tim/fasilitas hanya bila ada dan diizinkan untuk dipublikasikan.
-   Area layanan dan alamat hanya bila valid.
-   CTA WhatsApp.
-   Schema `AboutPage`/`WebPage`, `Organization` dapat ditautkan melalui
    `about` atau `publisher` sesuai konteks.

### 7.3 Paket (landing page kategori)

-   H1 dan ringkasan siapa yang cocok memakai kategori ini.
-   Kegunaan dan skenario penggunaan.
-   Grid produk/paket.
-   Isi paket sebagai contoh yang jelas diberi label "contoh" jika dapat
    berubah.
-   Pilihan material, warna, teknik branding, dan kemasan yang
    benar-benar tersedia.
-   Kuantitas/minimum order dan waktu produksi hanya jika sudah
    dikonfirmasi.
-   Faktor penentu harga: jenis barang, jumlah, teknik logo, packaging,
    deadline, dan pengiriman.
-   Galeri foto aktual.
-   FAQ kategori.
-   CTA dengan nama kategori sudah terisi di pesan WhatsApp.
-   Internal links ke kategori terkait, portofolio, artikel, dan kontak.
-   Schema `CollectionPage`/`WebPage`; gunakan `ItemList` bila
    benar-benar menggambarkan daftar yang terlihat. Gunakan `Product`
    hanya untuk halaman produk individual yang memiliki data produk
    sesuai aturan.

### 7.4 Halaman detail paket/produk

-   H1 berupa nama paket/produk yang spesifik.
-   Foto produk asli, alt text, caption bila berguna.
-   Ringkasan manfaat dan penggunaan.
-   Spesifikasi: material, dimensi, warna, kapasitas, isi paket, opsi
    logo, kemasan; hanya data yang diketahui.
-   Variasi dan opsi custom.
-   Informasi MOQ, lead time, harga, stok, garansi,
    pengiriman---tampilkan hanya bila aktual dan dapat
    dipertanggungjawabkan.
-   "Harga berdasarkan penawaran" bila tidak ada harga pasti; jelaskan
    faktor yang memengaruhi harga.
-   Rekomendasi kebutuhan dan produk terkait.
-   FAQ spesifik.
-   CTA "Tanyakan paket ini via WhatsApp".
-   Breadcrumb terlihat.
-   Schema `Product` hanya jika halaman berfokus pada produk nyata dan
    data markup sama dengan informasi yang terlihat. Jangan membuat
    `Offer`, harga, stok, rating, atau review palsu.

### 7.5 Portofolio

-   H1 dan intro tentang jenis proyek.
-   Filter kategori yang tetap bisa diakses tanpa JavaScript.
-   Setiap item: foto nyata, judul proyek, tipe acara/kebutuhan,
    kategori barang, solusi/komposisi, dan hasil terukur hanya bila ada
    data.
-   Detail proyek bila materi memadai: brief, tantangan, solusi, pilihan
    produk, branding, timeline, hasil, dan kutipan klien dengan izin.
-   Jangan mengungkap data rahasia klien.
-   CTA untuk kebutuhan serupa.
-   Schema `CollectionPage`/`ItemList` jika sesuai; jangan menandai
    portofolio sebagai review produk tanpa bukti.

### 7.6 Blog

-   H1, intro editorial, kategori/topik, artikel unggulan, daftar
    artikel, pagination bila diperlukan.
-   Kartu artikel: gambar, judul, ringkasan, penulis, tanggal, kategori.
-   Pencarian/filter opsional; jangan membuat kontrol palsu.
-   Artikel dikelompokkan berdasarkan intent: panduan pembelian, ide
    souvenir, perbandingan material, anggaran, branding, onboarding,
    event, dan pengadaan B2B.
-   Konten harus orisinal, berbasis pengalaman/data yang bisa
    diverifikasi, membantu pembaca, dan tidak dibuat massal hanya untuk
    mengejar kata kunci.
-   Schema `Blog`/`CollectionPage` dan `ItemList` jika sesuai.

### 7.7 Detail artikel

-   Title unik dan H1 yang menjawab topik.
-   Intro langsung menjawab kebutuhan pencari.
-   Penulis dan profil penulis yang benar; tanggal terbit dan modifikasi
    hanya jika akurat.
-   Daftar isi untuk artikel panjang.
-   Heading H2/H3 logis, paragraf ringkas, tabel/daftar bila membantu,
    contoh konkret, sumber dan metodologi bila ada klaim data.
-   Foto/diagram yang relevan dengan alt text.
-   Ringkasan jawaban atau langkah praktis.
-   FAQ hanya jika membantu pengguna dan jawabannya terlihat di halaman;
    jangan menjanjikan FAQ rich result.
-   Artikel terkait dan CTA yang tidak mengganggu.
-   Schema `Article` atau subtype sesuai jenis konten, `BreadcrumbList`
    bila breadcrumb tampak, `Person` untuk penulis jika memiliki profil
    nyata.
-   `dateModified` hanya diubah ketika konten benar-benar diperbarui.

### 7.8 Kontak / Minta Penawaran

-   Kanal komunikasi yang aktif dan sudah diverifikasi.
-   WhatsApp utama.
-   Formulir statis tidak boleh pura-pura mengirim jika tidak ada
    backend. Jika form digunakan, jelaskan apakah membuka WhatsApp
    dengan rangkuman data atau benar-benar mengirim ke layanan pihak
    ketiga.
-   Field brief opsional: nama, perusahaan, email/telepon, kategori,
    jumlah, budget range, deadline, kota pengiriman, detail kebutuhan.
-   Privasi: hanya minta data yang diperlukan dan jelaskan tujuan
    penggunaan.
-   Jam operasional dan alamat hanya jika akurat.
-   FAQ proses quotation.
-   CTA WhatsApp dengan pesan terformat.
-   Schema `ContactPage`/`WebPage` dan informasi organisasi yang
    konsisten.

### 7.9 Kebijakan Privasi

-   Data yang dikumpulkan dan sumbernya.
-   Tujuan dan dasar pemrosesan yang relevan.
-   Penggunaan WhatsApp, analitik, cookies, formulir, dan vendor pihak
    ketiga bila ada.
-   Retensi, keamanan, hak pengguna, cara menghubungi pengelola.
-   Sesuaikan dengan praktik nyata dan peraturan yang berlaku; minta
    tinjauan profesional bila diperlukan.

### 7.10 404

-   Pesan halaman tidak ditemukan.
-   Tautan ke Beranda, Paket, Portofolio, Blog, dan WhatsApp.
-   Jangan mengarahkan semua URL tidak valid ke homepage dengan status
    200 jika server bisa memberi status 404 yang benar.

## 8. WhatsApp Conversion Requirements

-   Nomor tujuan dalam format URL: `6285999666888`.
-   Format tautan: `https://wa.me/6285999666888?text=...`.
-   Teks pesan wajib di-URL-encode; gunakan `encodeURIComponent()` di
    JavaScript atau encoding statis yang valid.
-   Pesan kontekstual, contoh: "Halo, saya ingin konsultasi paket
    Corporate Onboarding Kit. Perkiraan jumlah: \[isi\]. Deadline:
    \[isi\]. Kota pengiriman: \[isi\]. Mohon informasi opsi dan
    penawaran."
-   Semua CTA membuka nomor yang sama; tidak ada nomor berbeda yang
    tersembunyi di footer atau script.
-   `target="_blank"` harus disertai `rel="noopener noreferrer"` bila
    dipakai.
-   Sediakan teks CTA yang jelas dan accessible name.
-   Tracking event dapat digunakan bila analytics terpasang dengan benar
    dan kebijakan privasi mengaturnya.
-   Jangan mengirim data sensitif ke URL atau menyertakan data formulir
    tanpa persetujuan pengguna.

## 9. SEO Teknis dan On-page

### Setiap halaman indexable

-   `<!doctype html>`, `lang="id"`, UTF-8, viewport.
-   Title unik dan deskriptif; meta description unik dan akurat.
-   Canonical absolut menuju URL final yang benar.
-   Meta robots sesuai tujuan halaman.
-   Open Graph `og:title`, `og:description`, `og:type`, `og:url`,
    `og:image`, `og:site_name`, dan locale `id_ID`.
-   Twitter/X card metadata jika digunakan.
-   H1 utama yang jelas; struktur heading logis.
-   Alt gambar informatif, tidak keyword stuffing.
-   Link internal deskriptif dan crawlable (`<a href>`).
-   URL konsisten, lowercase, tanda hubung, tanpa parameter tak perlu.
-   Halaman error dan redirect dengan HTTP status yang benar.
-   Konten penting tersedia dalam HTML awal; jangan hanya bergantung
    pada JavaScript untuk teks utama.

### SEO teknis situs

-   `sitemap.xml` memuat URL canonical yang dapat diakses, indexable,
    dan berstatus sukses.
-   `robots.txt` tidak memblokir CSS/JS/gambar penting dan menyertakan
    sitemap.
-   HTTPS, redirect satu versi host (www atau non-www), serta
    konsistensi trailing slash.
-   Favicon, manifest opsional, dan halaman error.
-   Breadcrumb UI dan `BreadcrumbList` harus konsisten.
-   Open Graph image yang relevan, dapat diakses, resolusi memadai, dan
    tidak memakai gambar yang tidak berizin.
-   Jangan menambahkan meta keywords sebagai strategi ranking.
-   Jangan membuat halaman doorway, lokasi palsu, konten duplikat,
    cloaking, atau keyword stuffing.
-   `hreflang` hanya jika memang ada versi bahasa/negara berbeda.
-   `noindex` untuk halaman yang tidak ingin diindeks; jangan memasukkan
    halaman tersebut ke sitemap.
-   Jangan mengisi `lastmod` sitemap dengan tanggal build bila konten
    tidak berubah.

## 10. AEO dan GEO

AEO/GEO bukan markup ajaib dan tidak menjamin kutipan oleh mesin
jawaban. Terapkan prinsip berikut: - Jawaban ringkas dan faktual dekat
bagian awal, lalu uraian mendalam. - Heading ditulis sebagai pertanyaan
atau kebutuhan nyata bila sesuai. - Definisi, proses, perbandingan,
daftar spesifikasi, dan FAQ yang jelas. - Cantumkan penulis, pengalaman
relevan, sumber, tanggal pembaruan, metodologi, dan batasan untuk klaim
yang membutuhkannya. - Publikasikan informasi unik yang berguna: foto
produk sendiri, spesifikasi aktual, proses produksi, studi kasus
berizin, panduan budget, serta kriteria pemilihan. - Konsistensi nama
usaha, layanan, nomor kontak, area layanan, dan profil resmi. - Tautkan
ke sumber tepercaya saat menyebut fakta eksternal. - Gambar dengan alt
text deskriptif dan konteks caption; gunakan video/transkrip bila ada
video. - Konten utama harus dapat di-crawl dan diakses tanpa login. -
Hindari konten AI massal yang tidak memberikan nilai tambah. - Pantau
query dan performa lewat Search Console dan analitik yang sesuai;
evaluasi secara berkala.

## 11. Structured Data / Schema.org

Gunakan JSON-LD dan pilih tipe yang menggambarkan halaman sebenarnya.
Pastikan semua informasi markup juga tampak dan benar di halaman.

-   **Homepage:** `Organization` atau subtype paling spesifik yang
    benar, `WebSite`, `WebPage`.
-   **Tentang:** `AboutPage`, `Organization` bila relevan.
-   **Kontak:** `ContactPage`, informasi kontak organisasi yang benar.
-   **Paket/kategori:** `CollectionPage`/`WebPage`, `ItemList` jika
    sesuai.
-   **Produk detail:** `Product` hanya dengan spesifikasi nyata; `Offer`
    hanya jika informasi penawaran benar dan lengkap.
-   **Blog:** `Blog`/`CollectionPage` sesuai kebutuhan.
-   **Artikel:** `Article` atau `BlogPosting`, `Person` penulis jika
    profil nyata, `BreadcrumbList`.
-   **Portofolio:** `CollectionPage`/`CreativeWork` hanya bila
    benar-benar merepresentasikan karya yang ditampilkan.
-   **Breadcrumb:** `BreadcrumbList` bila sesuai dengan breadcrumb yang
    terlihat.

Aturan: - Jangan membuat rating, review, harga, stok, alamat, award,
sertifikasi, atau profil sosial palsu. - Jangan memasukkan FAQ schema
dengan harapan mendapatkan FAQ rich result; Google membatasi tampilan
FAQ rich results pada banyak jenis situs. FAQ tetap berguna untuk
pengguna. - Schema membantu pemahaman dan kelayakan fitur tertentu,
bukan jaminan ranking atau rich result. - Validasi JSON-LD dengan Schema
Markup Validator dan Google Rich Results Test yang relevan. Perbaiki
error dan warning yang memang berlaku.

## 12. Open Graph dan Social Sharing

-   Gunakan gambar OG unik atau representatif untuk halaman penting.
-   `og:url` harus sama dengan canonical final.
-   `og:type=website` untuk halaman umum, `article` untuk artikel bila
    sesuai.
-   `og:title` dan `og:description` ringkas dan sesuai konten.
-   Gunakan gambar berizin dengan rasio yang sesuai platform dan URL
    absolut.
-   Tambahkan `article:published_time`, `article:modified_time`,
    `article:author`, atau `article:section` hanya untuk artikel dan
    jika nilainya valid.
-   Social metadata bukan pengganti title/description SEO.

## 13. Performa, Aksesibilitas, dan Responsivitas

-   Mobile-first; tidak boleh ada horizontal overflow pada viewport 320
    px ke atas, kecuali komponen yang memang dirancang scroll horizontal
    dan diberi batas yang jelas.
-   Gambar hero yang menjadi LCP tidak boleh lazy-load; gunakan ukuran
    yang tepat dan `fetchpriority="high"` bila sesuai.
-   Lazy-load gambar di bawah fold.
-   Set `width` dan `height` atau `aspect-ratio` agar layout tidak
    bergeser.
-   Minifikasi/kompresi aset saat deployment; hindari library yang tidak
    perlu.
-   Target Core Web Vitals "Good" menurut ambang resmi yang berlaku
    ketika diuji; ukur lapangan dan lab.
-   Kontras teks memadai, fokus keyboard terlihat, skip link, label
    form, `alt`, dan semantic landmarks.
-   Dropdown dapat digunakan dengan keyboard dan sentuhan.
-   Hormati `prefers-reduced-motion`.
-   Jangan menyampaikan status hanya dengan warna.
-   Uji zoom browser dan ukuran font tanpa merusak layout.

## 14. Analitik dan Privasi

-   Google Search Console untuk performa pencarian dan pengindeksan.
-   Analytics opsional; pasang hanya bila dibutuhkan dan dokumentasikan.
-   Catat klik WhatsApp sebagai event bila analytics telah
    dikonfigurasi.
-   Hindari mengirim isi pesan, nomor pribadi, atau detail sensitif
    sebagai event parameter.
-   Cookie/consent dan pemberitahuan privasi disesuaikan dengan
    teknologi yang benar-benar dipasang dan hukum yang berlaku.

## 15. Struktur Folder yang Disarankan

``` text
souvenir-kantor/
├── index.html
├── tentang.html
├── kontak.html
├── portofolio.html
├── blog.html
├── paket/
│   ├── index.html
│   ├── corporate-gift-set.html
│   ├── onboarding-kit.html
│   ├── seminar-kit.html
│   ├── custom-merchandise.html
│   └── hampers-perusahaan.html
├── blog/
│   └── contoh-artikel.html
├── kebijakan-privasi.html
├── 404.html
├── robots.txt
├── sitemap.xml
├── site.webmanifest
├── assets/
│   ├── css/style.css
│   ├── js/main.js
│   ├── images/
│   └── icons/
├── PRD.md
└── design.md
```

Jika memilih URL `.html` di root, gunakan satu pola konsisten. Struktur
di atas adalah rekomendasi; sesuaikan dengan kemampuan server hosting.

## 16. Acceptance Criteria

### Fungsional

-   Navbar memuat Beranda, Tentang, Paket (dropdown), Portofolio, Blog.
-   Navbar mobile dapat dibuka/tutup dan tidak menutup konten secara
    tidak sengaja.
-   Semua CTA WhatsApp mengarah ke `https://wa.me/6285999666888`.
-   Pesan WhatsApp ter-encode dan relevan dengan konteks halaman.
-   Tidak ada tautan mati, tombol palsu, placeholder yang tertinggal,
    atau form yang mengaku terkirim tanpa backend.
-   Setiap halaman utama mempunyai konten unik dan metadata sendiri.

### SEO

-   Canonical dan URL konsisten.
-   Sitemap hanya memuat URL canonical yang indexable.
-   Robots.txt benar.
-   Open Graph menggunakan URL absolut.
-   JSON-LD valid, sesuai konten terlihat, dan tidak memuat klaim
    fiktif.
-   Artikel memiliki metadata penulis/tanggal hanya bila benar.
-   Tidak ada duplicate title/H1 yang tidak disengaja.
-   Tidak ada jaminan peringkat/AI citation dalam copy pemasaran.

### UI/UX

-   Tidak ada overflow horizontal pada mobile.
-   Grid dan gambar menyesuaikan ukuran layar.
-   Fokus keyboard terlihat; link dan tombol memiliki label jelas.
-   Motion menghormati reduced-motion.
-   Semua gambar penting memiliki alt yang relevan.

### QA/Deployment

-   Uji Chrome, Firefox, Safari/iOS bila tersedia, dan Android browser.
-   Uji 320, 360, 390, 768, 1024, dan 1440 px.
-   Jalankan Lighthouse/PageSpeed, Search Console URL Inspection, Rich
    Results Test bila relevan, dan Schema Markup Validator.
-   Periksa HTTPS, status HTTP, redirect host, sitemap, robots, dan 404
    sebelum rilis.

## 17. Data yang Wajib Dikonfirmasi Sebelum Launch

-   Nama brand, logo, domain, deskripsi perusahaan.
-   Alamat, jam operasional, email, nomor kontak resmi, media sosial.
-   Area layanan dan kemampuan pengiriman.
-   Kategori produk yang benar-benar dijual.
-   MOQ, lead time, opsi logo, material, harga atau mekanisme quotation.
-   Foto produk/portofolio dan izin penggunaan.
-   Nama penulis dan profil artikel.
-   Kebijakan pembayaran, revisi desain, pembatalan, pengiriman, dan
    privasi.
-   Analytics/consent yang akan digunakan.

## 18. Referensi Resmi

-   Bootstrap docs: https://getbootstrap.com/docs/
-   Google Search Essentials:
    https://developers.google.com/search/docs/essentials
-   Google guidance for AI features:
    https://developers.google.com/search/docs/appearance/ai-features
-   Google structured data general guidelines:
    https://developers.google.com/search/docs/appearance/structured-data/sd-policies
-   Organization structured data:
    https://developers.google.com/search/docs/appearance/structured-data/organization
-   Article structured data:
    https://developers.google.com/search/docs/appearance/structured-data/article
-   Product structured data:
    https://developers.google.com/search/docs/appearance/structured-data/product
-   Breadcrumb structured data:
    https://developers.google.com/search/docs/appearance/structured-data/breadcrumb
-   Schema.org: https://schema.org/
