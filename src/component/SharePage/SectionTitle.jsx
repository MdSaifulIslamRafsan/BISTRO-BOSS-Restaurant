

const SectionTitle = ({heading , subHeading}) => {
    return (
        <div className="mt-10 w-3/12 space-y-2 mx-auto text-center">
            <p className="text-[#D99904] text-lg italic font-normal">{subHeading}</p>
            <h3 className="text-4xl border-y-4 py-3 object-contain uppercase text-[#151515] font-normal">{heading}</h3>
        </div>
    );
};

export default SectionTitle;