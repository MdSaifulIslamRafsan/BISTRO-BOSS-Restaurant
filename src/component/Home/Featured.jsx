import SectionTitle from "../SharePage/SectionTitle";
import featuredImg from "../../assets/home/featured.jpg";

const Featured = () => {
  return (
    <section
      style={{
        background: `linear-gradient(0deg, rgba(21, 21, 21, 0.70) 0%, rgba(21, 21, 21, 0.70) 100%),url(${featuredImg})`,
      }}
      className="!bg-fixed text-white pt-8 my-20"
    >
      <SectionTitle
        subHeading={"---Check it out---"}
        heading={"Featured item"}
      ></SectionTitle>
      <div className="md:flex items-center justify-center gap-7 pt-12 pb-20 px-36">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="space-y-3">
          <p>March 20, 2023</p>
          <h3 className="uppercase">WHERE CAN I GET SOME?</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
          <button className="btn btn-outline border-b-4 outline-none border-0 text-white">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Featured;
