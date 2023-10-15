import { Link } from "react-router-dom";
// import groupe1 from "../../assets/Group1.png";
// import flat from "../../assets/Flat.png";
// import groupe from "../../assets/Group.png";
// import groupe2 from "../../assets/Groupe2.png";
// import groupe3 from "../../assets/Groupe3.png";
// import flat2 from "../../assets/Flat2.png";

const Appointment = () => {
  return (
    <div className="mb-44">
      <div className="bg-[#07332F] text-white py-32 pl-44">
        <Link to="/">Home</Link> /
        <Link to="/appointment" className="font-semibold">
          Appointment
        </Link>
        <h1 className="font-semibold text-4xl">Appointment</h1>
      </div>
      <div className="">
        <div className="text-center my-44">
          <p className="text-red-500">Available Services on April 30, 2022</p>
        </div>
      </div>
      <div>
        <h1 className="text-4xl font-semibold text-center mb-12">
          Please select a service.
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 w-10/12 mx-auto text-center">
          <div className="flex items-center gap-5 shadow-lg rounded-md p-5 w-64">
            <img src="https://i.ibb.co/Db7xwH0/Group1.png" alt="" />
            <p className="font-bold text-xl text-left">Teeth Orthodontics</p>
          </div>
          <div className="flex items-center gap-5 shadow-lg rounded-md p-5 w-64">
            <img src="https://i.ibb.co/7rPjSnD/Flat.png" alt="" />
            <p className="font-bold text-xl text-left">Cosmetic Dentisty</p>
          </div>
          <div className="flex items-center gap-5 shadow-lg rounded-md p-5 w-64">
            <img src="https://i.ibb.co/TB25Y6d/group.png" alt="" />
            <p className="font-bold text-xl text-left">Teeth Cleaning</p>
          </div>
          <div className="flex items-center gap-5 shadow-lg rounded-md p-5 w-64">
            <img src="https://i.ibb.co/qFC55NR/Group2.png" alt="" />
            <p className="font-bold text-xl text-left">Cavity Protection</p>
          </div>
          <div className="flex items-center gap-5 shadow-lg rounded-md p-5 w-64">
            <img src="https://i.ibb.co/L9J8592/Group3.png" alt="" />
            <p className="font-bold text-xl text-left">Pediatric Dental</p>
          </div>
          <div className="flex items-center gap-5 shadow-lg rounded-md p-5 w-64">
            <img src="https://i.ibb.co/SvMD20T/flat2.png" alt="" />
            <p className="font-bold text-xl text-left">Oral Surgery</p>
          </div>
        </div>

        <div className="my-20 w-10/12 mx-auto">
          <h1 className="text-3xl font-bold text-center">
            Available slots for Teeth Orthodontics.
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            <div className="px-8 py-16 shadow-md shadow-gray-400 lg:w-80 w-full h-80 text-center rounded-md space-y-3">
              <div className="">
                <img
                  src="https://i.ibb.co/7rPjSnD/Flat.png"
                  className="w-24 h-24 mx-auto bg-orange-100 p-4 rounded-full"
                  alt=""
                />
              </div>
              <h1 className="text-2xl font-bold">Teeth Orthodontics</h1>
              <p className="font-bold">8:00 AM - 9:00 AM</p>
              <button className="bg-[#F7A582] text-white py-2 px-4 font-semibold rounded-md">
                Book Appointment
              </button>
            </div>
            <div className="px-8 py-16 shadow-md shadow-gray-400 lg:w-80 w-full h-80 text-center rounded-md space-y-3  ">
              <div className="">
                <img
                  src="https://i.ibb.co/7rPjSnD/Flat.png"
                  className="w-24 h-24 mx-auto bg-orange-100 p-4 rounded-full"
                  alt=""
                />
              </div>
              <h1 className="text-2xl font-bold">Teeth Orthodontics</h1>
              <p className="font-bold">8:00 AM - 9:00 AM</p>
              <button className="bg-[#F7A582] text-white py-2 px-4 font-semibold rounded-md">
                Book Appointment
              </button>
            </div>
            <div className="px-8 py-16 shadow-md shadow-gray-400 lg:w-80 w-full h-80 text-center rounded-md space-y-3  ">
              <div className="">
                <img
                  src="https://i.ibb.co/7rPjSnD/Flat.png"
                  className="w-24 h-24 mx-auto bg-orange-100 p-4 rounded-full"
                  alt=""
                />
              </div>
              <h1 className="text-2xl font-bold">Teeth Orthodontics</h1>
              <p className="font-bold">8:00 AM - 9:00 AM</p>
              <button className="bg-[#F7A582] text-white py-2 px-4 font-semibold rounded-md">
                Book Appointment
              </button>
            </div>
            <div className="px-8 py-16 shadow-md shadow-gray-400 lg:w-80 w-full h-80 text-center rounded-md space-y-3  ">
              <div className="">
                <img
                  src="https://i.ibb.co/7rPjSnD/Flat.png"
                  className="w-24 h-24 mx-auto bg-orange-100 p-4 rounded-full"
                  alt=""
                />
              </div>
              <h1 className="text-2xl font-bold">Teeth Orthodontics</h1>
              <p className="font-bold">8:00 AM - 9:00 AM</p>
              <button className="bg-[#F7A582] text-white py-2 px-4 font-semibold rounded-md">
                Book Appointment
              </button>
            </div>
            <div className="px-8 py-16 shadow-md shadow-gray-400 lg:w-80 w-full h-80 text-center rounded-md space-y-3  ">
              <div className="">
                <img
                  src="https://i.ibb.co/7rPjSnD/Flat.png"
                  className="w-24 h-24 mx-auto bg-orange-100 p-4 rounded-full"
                  alt=""
                />
              </div>
              <h1 className="text-2xl font-bold">Teeth Orthodontics</h1>
              <p className="font-bold">8:00 AM - 9:00 AM</p>
              <button className="bg-[#F7A582] text-white py-2 px-4 font-semibold rounded-md">
                Book Appointment
              </button>
            </div>
            <div className="px-8 py-16 shadow-md shadow-gray-400 lg:w-80 w-full h-80 text-center rounded-md space-y-3  ">
              <div className="">
                <img
                  src="https://i.ibb.co/7rPjSnD/Flat.png"
                  className="w-24 h-24 mx-auto bg-orange-100 p-4 rounded-full"
                  alt=""
                />
              </div>
              <h1 className="text-2xl font-bold">Teeth Orthodontics</h1>
              <p className="font-bold">8:00 AM - 9:00 AM</p>
              <button className="bg-[#F7A582] text-white py-2 px-4 font-semibold rounded-md">
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
