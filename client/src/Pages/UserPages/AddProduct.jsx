const AddProduct = () => {
  const handleForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const id = form.id.value;
    const title = form.title.value;
    const price = parseInt(form.price.value);
    const description = form.description.value;
    const img = form.img.value;
    if (!title || !price || !description || !img) {
      toast("Please Provide Product Information");
      return;
    }
    const product = {
      id,
      title,
      price,
      description,
      img,
    };
    const sure = window.confirm("Are you sure Product save to db?");
    if (sure) {
      fetch("http://localhost:3000/products", {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(product),
      })
        .then((response) => response.json())
        .then((json) => {
          alert("Product Added");
          e.reset();
        });
    }
  };
  return (
    <div>
      <div className="my-10">
        <div className="card shrink-0 w-full max-w-lg mx-auto shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleForm}>
            {/* id */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Product Id</span>
              </label>
              <input
                type="number"
                name="id"
                placeholder="Product id"
                className="input input-bordered"
                required
              />
            </div>
            {/* title */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Product Title</span>
              </label>
              <input
                type="text"
                name="title"
                defaultValue=""
                placeholder="Product title"
                className="input input-bordered"
                required
              />
            </div>
            {/* price */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Product Price</span>
              </label>
              <input
                type="text"
                name="price"
                defaultValue=""
                placeholder="Product Price"
                className="input input-bordered"
                required
              />
            </div>
            {/* description */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Product Description</span>
              </label>
              <input
                type="text"
                name="description"
                defaultValue=""
                placeholder="Product Description"
                className="input input-bordered"
                required
              />
            </div>
            {/* img */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Product Image</span>
              </label>
              <input
                type="text"
                name="img"
                defaultValue=""
                placeholder="Product Image Url"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary" type="submit">
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
