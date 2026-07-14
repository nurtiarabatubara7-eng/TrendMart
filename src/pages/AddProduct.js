import { useState } from "react";
import Navbar from "../components/Navbar";
import api from "../services/api";

export default function AddProduct() {

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !price) {
      alert("Semua field wajib diisi");
      return;
    }

    api.post("products", {
      title,
      price
    }).then(() => {
      alert("Produk berhasil ditambahkan");
      setTitle("");
      setPrice("");
    });
  };

  return (
    <>
      <Navbar />

      <div className="container mt-4">

        <h2>Tambah Produk</h2>

        <form onSubmit={handleSubmit}>

          <div className="mb-3">
            <label>Nama Produk</label>

            <input
              className="form-control"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Harga</label>

            <input
              type="number"
              className="form-control"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <button className="btn btn-primary">
            Simpan
          </button>

        </form>

      </div>
    </>
  );
}