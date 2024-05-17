import { Parallax } from 'react-parallax';

const Cover = ({img , title , description , margin}) => {
     margin = margin || "5";
    return (
      <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={img}
        bgImageAlt="the dog"
        strength={-200}
    >
        <div className="hero">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content  w-10/12 block text-center m-20 text-white">
          <div className={`px-20 py-10 my-${margin} bg-[#15151599]`}>
            <h1 className="mb-5 text-5xl uppercase font-bold">{title}</h1>
            <p className="mb-5">{description}</p>
           
          </div>
        </div>
      </div>
    </Parallax>
       
    );
};

export default Cover;