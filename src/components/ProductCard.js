import { Link } from "react-router-dom";

export default function ProductCard({ product, onDelete }) {
  return (
    <div className="card h-100">

      <img
        src={product.image}
        className="card-img-top p-3"
        style={{ height: "220px", objectFit: "contain" }}
        alt={product.title}
      />

      <div className="card-body">

        <h6>{product.title}</h6>

        <p className="text-success">
          ${product.price}
        </p>
<div className="d-flex justify-content-between mt-3">

  <Link
    to={`/detail/${product.id}`}
    className="btn btn-primary btn-sm"
  >
    Detail
  </Link>

  <Link
    to={`/edit/${product.id}`}
    className="btn btn-warning btn-sm"
  >
    Edit
  </Link>

  <button
    className="btn btn-danger btn-sm"
    onClick={() => onDelete(product.id)}
  >
    Hapus
  </button>

</div>  

      </div>

    </div>
  );
}