const AddProduct = () => {
  const handleForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const price = form.price.value;
    const description = form.description.value;
    const img = form.img.value;
    if (!title || !price || !description || !img) {
      return toast("Please Provide Product Information");
    }
    const product = {
      title,
      price,
      description,
      img,
    };
  };
  return (
    <div>
      <div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleForm}>
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
