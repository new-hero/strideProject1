const Doctors = () => {
  return (
    <div>
      <h2 className="5xl">Meet our doctors</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
        quia consectetur eveniet nisi animi officiis eligendi nulla dignissimos
        adipisci sunt.
      </p>
      <div>
        <div className="flex gap-2">
          <button>All</button>
          <button>Gastrology</button>
          <button>Cardiology</button>
          <button>Urology</button>
          <button>Orthopedics</button>
          <button>Medicine</button>
        </div>
        <div className="flex">
            <div>1</div>
            <div>2</div>
            <div>3</div>
        </div>
      </div>
    </div>
  );
};

export default Doctors;
