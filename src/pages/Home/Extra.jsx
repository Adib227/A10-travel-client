import 'animate.css';

const Extra = () => {
  return (
    <div
      className="animate__zoomIn"
      data-aos="zoom-in"
      data-aos-duration="1500"
    >
      <div className="animate__zoomIn rounded-badge grid py-20 bg-[#FD6E0A33] my-8">
        <div className=" max-w-full mx-auto text-2xl lg:text-4xl font-semibold">
          <h1 className="animate_animated animate__tada">Our Partners</h1>
        </div>
        <div className="max-w-full mx-auto text-lg lg:text-lg px-7 lg:px-0 pt-4 lg:pt-6 font-normal">
          We only work with the best companies around the globe
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:flex lg:flex w-full justify-between p-8 md:p-8 lg:p-16  space-y-6 lg:space-y-0 pt-10 lg:pt-">
          <img src="https://i.ibb.co/dpPcMnw/4-7c486ccb.png" alt="" />
          <img src="https://i.ibb.co/3Fw3pdh/3-564c3fc6.png" alt="" />
          <img src="https://i.ibb.co/DMzPdcX/1-1b03af65.png" alt="" />
          <img src="https://i.ibb.co/dpPcMnw/4-7c486ccb.png" alt="" />
          <img src="https://i.ibb.co/16kXGGw/2-1906a863.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Extra;
