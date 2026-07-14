# 🛍 NovaStore

<p align="center">
  <b>NovaStore</b><br>
  Aplikasi E-Commerce Sederhana Menggunakan React JS
</p>

---

## Deskripsi

NovaStore merupakan aplikasi e-commerce sederhana yang dikembangkan menggunakan **React JS** sebagai proyek **Ujian Akhir Semester (UAS)**.

Aplikasi ini memanfaatkan **Fake Store API** sebagai sumber data produk sehingga pengguna dapat melihat daftar produk, mencari produk, melihat detail produk, memfilter berdasarkan kategori, serta melakukan simulasi operasi CRUD (Create, Read, Update, Delete).

Selain itu aplikasi telah menerapkan **React Router DOM** untuk navigasi halaman, **Context API** untuk autentikasi sederhana, **Axios** untuk komunikasi dengan API, dan **Bootstrap 5** sebagai framework CSS agar tampilannya responsif.

---

# Fitur

### Autentikasi
- Login sederhana menggunakan Context API
- Protected Route
- Logout

### Produk
- Menampilkan seluruh produk
- Menampilkan detail produk
- Pencarian produk
- Filter berdasarkan kategori
- Menampilkan gambar produk
- Menampilkan harga produk

### CRUD
- Tambah Produk
- Edit Produk
- Hapus Produk (simulasi)

### User Interface
- Responsive Design
- Navbar
- Search Bar
- Product Card
- Bootstrap 5

---

# Tampilan Halaman

- Login
- Home
- Detail Produk
- Kategori
- Tambah Produk
- Edit Produk

---

# Teknologi yang Digunakan

| Teknologi | Keterangan |
|-----------|------------|
| React JS | Library Frontend |
| React Router DOM | Routing |
| Axios | HTTP Client |
| Bootstrap 5 | CSS Framework |
| Context API | Authentication |
| Fake Store API | REST API |

---

# Struktur Folder

```
src
│
├── components
│   ├── Navbar.js
│   ├── ProductCard.js
│   ├── ProtectedRoute.js
│   └── SearchBar.js
│
├── context
│   └── AuthContext.js
│
├── pages
│   ├── Login.js
│   ├── Home.js
│   ├── Category.js
│   ├── Detail.js
│   ├── AddProduct.js
│   └── EditProduct.js
│
├── services
│   └── api.js
│
├── App.js
├── App.css
├── index.js
└── index.css
```

---

# Dependency

```json
{
  "react": "^19",
  "react-router-dom": "^7",
  "axios": "^1",
  "bootstrap": "^5"
}
```

---

# Instalasi

## 1. Clone Repository

```bash
git clone https://github.com/username/novastore.git
```

---

## 2. Masuk ke Folder Project

```bash
cd novastore
```

---

## 3. Install Dependency

```bash
npm install
```

---

## 4. Menjalankan Project

```bash
npm start
```

Project akan berjalan pada

```
http://localhost:3000
```

---

# Fake Store API

Project menggunakan Fake Store API.

Base URL

```
https://fakestoreapi.com
```

Endpoint

```
GET /products
```

Kategori

```
electronics
jewelery
men's clothing
women's clothing
```

Dokumentasi

https://fakestoreapi.com/

---

# Cara Menggunakan

## Login

Masukkan username bebas untuk masuk ke aplikasi.

---

## Home

Menampilkan seluruh produk dari API.

---

## Search

Gunakan kolom pencarian untuk mencari produk berdasarkan nama.

---

## Category

Klik menu kategori untuk melihat produk sesuai kategori.

---

## Detail

Klik tombol **Detail** untuk melihat informasi lengkap produk.

---

## Tambah Produk

Klik menu **Tambah Produk**, kemudian isi data produk.

---

## Edit Produk

Klik tombol **Edit** pada salah satu produk.

---

## Hapus Produk

Klik tombol **Hapus** kemudian konfirmasi.

---

# Authentication

Autentikasi menggunakan Context API.

Data user disimpan sementara pada

```
localStorage
```

Route yang dilindungi

- Home
- Detail
- Category
- Add Product
- Edit Product

---


Nama

**Nurtiara Batubara**

Program Studi

**Teknologi Rekayasa Perangkat Lunak (TRPL)**

