import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import api from "../services/api";

export default function EditProduct() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {

    api.get("products/" + id)
      .then((response) => {
        setTitle(response.data.title);
        setPrice(response.data.price);
      });

  }, [id]);

  const handleSubmit = (e) => {

    e.preventDefault();

    api.put("products/" + id, {
      title,
      price
    }).then(() => {
      alert("Produk berhasil diupdate");
      navigate("/home");
    });

  };

  return (
    <>
      <Navbar />

      <div className="container mt-4">

        <h2>Edit Produk</h2>

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
              className="form-control"
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />

          </div>

          <button className="btn btn-warning">
            Update
          </button>

        </form>

      </div>
    </>
  );
}