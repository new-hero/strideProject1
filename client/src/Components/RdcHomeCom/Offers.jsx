const Offers = () => {
  return (
    <div className="bg-slate-100">
      <h2 className="text-3xl text-green-500 border-b-green-500 border p-2">Diagnostic Plan</h2>
      <h2 className="text-5xl my-6">Our special offers</h2>
      <div className="flex gap-3">
        <div>
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="text-5xl">$ 249</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, nesciunt?</p>
              <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
              </ul>
              <div className="text-center ">
                <button className="btn  bg-green-500 text-white">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="card  bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="text-5xl">$ 249</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, nesciunt?</p>
              <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
              </ul>
              <div className="text-center">
                <button className="btn  bg-green-500 text-white">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="card  bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="text-5xl">$ 249</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, nesciunt?</p>
              <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
              </ul>
              <div className="text-center">
                <button className="btn bg-green-500 text-white"> Get Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
