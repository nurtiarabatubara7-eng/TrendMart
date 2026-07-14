import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";

export default function Category() {

  const { id } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get("products/category/" + id)
      .then((response) => {
        setProducts(response.data);
      });
  }, [id]);

  return (
    <>
      <Navbar />

      <div className="container mt-4">

        <h2>Kategori : {id}</h2>

        <div className="row">

          {products.map((item) => (
            <div className="col-md-3 mb-4" key={item.id}>
              <ProductCard product={item} onDelete={() => {}} />
            </div>
          ))}

        </div>

      </div>
    </>
  );
}