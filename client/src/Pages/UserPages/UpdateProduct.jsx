import { useLoaderData } from "react-router-dom";

const UpdateProduct = () => {
  const loadedProduct = useLoaderData();
  const { title, price, description } = loadedProduct;
  return (
    <div>
      <div>

      </div>
    </div>
  );
};

export default UpdateProduct;
