
import chefService from "../../assets/home/chef-service.jpg"
const BistroBoss = () => {
    return (
        <div className="hero !bg-fixed" style={{backgroundImage: `url(${chefService})`}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center m-20 text-[#151515]">
          <div className="px-20 py-10 bg-[#FFFFFF]">
            <h1 className="mb-5 text-5xl font-bold">Bistro Boss</h1>
            <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
           
          </div>
        </div>
      </div>
    );
};

export default BistroBoss;