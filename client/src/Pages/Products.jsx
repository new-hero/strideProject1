import ProductCardUser from "../Components/HomePageCom/ProductCardUser";

const Products = ({ products }) => {
  return (
    <div>
      <h2 className="text-4xl my-10"> Products </h2>
      <div className="flex gap-3 flex-wrap">
        {products.map((p) => (
          <ProductCardUser key={p._id} product={p}></ProductCardUser>
        ))}
      </div>
    </div>
  );
};

export default Products;
