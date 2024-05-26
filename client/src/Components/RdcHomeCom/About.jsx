const About = () => {
  return (
    <div className="flex gap-2 my-10 text-left">
      <div className="flex-1">
        <h2 className="text-2xl border-b-green-500 border text-green-500 my-2">About clinic</h2>
        <h2 className="text-5xl my-6">Why patients choose our center</h2>
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
        <h2 className="text-2xl  border-b-green-500 border my-2 text-green-500">Clinic skills</h2>
        <h2 className="text-5xl my-6">Our specialisations</h2>
        <div className="flex m-2 h-[200px] justify-center items-center">
          <div className="border w-full h-full">
            <h2>skill</h2>
          </div>
          <div className="border w-full h-full">
            <h2>skill</h2>
          </div>
          <div className="border w-full h-full">
            <h2>skill</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
