
import chefService from "../../assets/home/chef-service.jpg"
const BistroBoss = () => {
    return (
        <div className="relative bg-gradient-to-r from-purple-600 to-blue-600  text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={chefService}
            alt="Background Image"
            className="object-cover !bg-fixed object-center w-full h-full"
          />
          <div className="absolute inset-0 bg-black opacity-50" />
        </div>
        <div className="relative bg-white m-20 p-10 text-black z-10 flex flex-col justify-center items-center  text-center">
          <h1 className="text-5xl font-bold leading-tight mb-4">
          Bistro Boss
          </h1>
          <p className="text-lg mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.
          </p>
        </div>
      </div>
    );
};

export default BistroBoss;