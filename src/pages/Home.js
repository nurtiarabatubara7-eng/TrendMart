import { useEffect, useState } from "react";
import api from "../services/api";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    api
      .get("products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Yakin ingin menghapus produk?")) {
      const hasil = products.filter((item) => item.id !== id);
      setProducts(hasil);
    }
  };

  const filteredProducts = products.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar />

      <div className="container py-4">

        <h2 className="text-center fw-bold mb-4">
          🛍 Product Catalog
        </h2>

        <div className="row justify-content-center mb-4">
          <div className="col-lg-5 col-md-8">
            <SearchBar
              search={search}
              setSearch={setSearch}
            />
          </div>
        </div>

        <div className="row g-4">

          {filteredProducts.map((item) => (
            <div
              className="col-xl-3 col-lg-4 col-md-6 col-sm-6"
              key={item.id}
            >
              <ProductCard
                product={item}
                onDelete={handleDelete}
              />
            </div>
          ))}

        </div>

      </div>
    </>
  );
}