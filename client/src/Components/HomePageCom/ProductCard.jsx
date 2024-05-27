import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const ProductCard = ({ product }) => {
  const { id, title, price, description, img } = product;
  const handleDelete = (p) => {
    const sure = window.confirm("Are You Sure? Delete " + p?.title);
    if (sure) {
      fetch(`http://localhost:3000/products/${p?.id}`, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then((json) => {
          if (json.deletedCount > 0) {
            toast("Item Deleted");
          }
        });
    }
  };
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure className="w-[300px]">
          <img src={img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <h2 className="card-title">{price}</h2>
          <p>{description}</p>
          <div className="card-actions">
            <Link
              to={`/dashboard/allProducts/${id}`}
              className="btn btn-primary"
            >
              Details
            </Link>
            <Link
              to={`/dashboard/updateProduct/${id}`}
              className="btn  bg-blue-500 text-white"
            >
              Edit
            </Link>
            <button
              className="btn bg-red-500 text-white"
              onClick={() => handleDelete(product)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
