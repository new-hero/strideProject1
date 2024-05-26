import ProductCard from "../Components/HomePageCom/ProductCard";

const Products = ({ products }) => {
  return (
    <div>
      <div className="flex gap-3 flex-wrap">
        {products.map((p) => (
          <ProductCard key={p.id} product={p}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Products;
