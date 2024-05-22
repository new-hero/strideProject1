const About = () => {
  return (
    <div className="flex gap-2">
      <div className="flex-1">
        <h2 className="text-3xl text-green-500 my-1">About clinic</h2>
        <h2 className="text-5xl my-1">Why patients choose our center</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet hic ad
          magni ex nam, eaque fugit in explicabo, et neque, natus voluptate
          porro ab! Libero dolorum aliquid eius velit? Cum nulla odio, excepturi
          hic ullam sint assumenda minima. Aliquam provident accusamus
          perferendis recusandae dolorum quibusdam veniam deleniti odio quos
          reprehenderit!
        </p>
      </div>
      <div className="flex-1">
        <h2 className="text-3xl my1-1 text-green-500">Clinic skills</h2>
        <h2 className="text-3xl my1-1">Our specialisations</h2>
        <div className="flex">
          <div>
            <h2>skill</h2>
          </div>
          <div>
            <h2>skill</h2>
          </div>
          <div>
            <h2>skill</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
