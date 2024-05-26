import machine from "/images/machinect.jpeg";
const Service = () => {
  return (
    <div className=" text-left my-10">
      <h2 className="text-3xl text-center  border-b-green-500 border p-2 my-2">Services</h2>

      <div className="flex">
        <div className="flex-1">
          <h2 className="text-5xl">The most modern CT scanner testing</h2>
          <p className="my-6">
            Technique used in radiology to form pictures of the anatomy and the
            physiological processes of the body in both health and disease
          </p>
          <div className="">
            <div className="flex">
              <div>1</div>
              <div>2</div>
            </div>
            <div className="flex">
              <div>3</div>
              <div>4</div>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <img src={machine} className="w-full" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Service;
