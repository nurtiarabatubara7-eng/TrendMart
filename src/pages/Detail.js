import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import api from "../services/api";

export default function Detail() {

  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    api.get("products/" + id)
      .then((response) => {
        setProduct(response.data);
      });
  }, [id]);

  if (!product) {
    return <h3 className="text-center mt-5">Loading...</h3>;
  }

  return (
    <>
      <Navbar />

      <div className="container mt-5">

        <div className="row">

          <div className="col-md-5">
            <img
              src={product.image}
              className="img-fluid"
              alt={product.title}
            />
          </div>

          <div className="col-md-7">

            <h2>{product.title}</h2>

            <h4 className="text-success">
              ${product.price}
            </h4>

            <h5>Kategori</h5>
            <p>{product.category}</p>

            <h5>Deskripsi</h5>
            <p>{product.description}</p>

          </div>

        </div>

      </div>
    </>
  );
}