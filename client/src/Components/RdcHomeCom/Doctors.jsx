const Doctors = () => {
  return (
    <div className="my-10">
      <div>
        <h2 className="text-5xl">Meet our doctors</h2>
        <p className="my-6 max-w-2xl m-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          quia consectetur eveniet nisi animi officiis eligendi nulla
          dignissimos adipisci sunt.
        </p>
      </div>
      <div>
        <div className="flex gap-2 justify-center">
          <button className="btn">All</button>
          <button className="btn">Gastrology</button>
          <button className="btn">Cardiology</button>
          <button className="btn">Urology</button>
          <button className="btn">Orthopedics</button>
          <button className="btn">Medicine</button>
        </div>
        <div className="flex min-h-[500px]">
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>
      </div>
    </div>
  );
};

export default Doctors;
