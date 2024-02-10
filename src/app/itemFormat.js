import Image from "next/image";
export default function ItemFormat({Img, Img2, OldPrice, NewPrice, Name}) {
  return (
    <div className="w-[80vw] md:w-[40vw] lg:w-[35vw] xl:w-[25vw] pb-[1vw] mb-[10vw] xl:mb-[5vw] h-[75vw] md:h-[45vw] lg:h-[40vw] xl:h-[32vw] flex flex-col justify-between items-center overflow-hidden">
      <div className="h-[60vw] shadow-md border-t-[1px] md:border-none rounded-lg relative md:h-[60vw] lg:h-[35vw] w-[70vw] lg:w-[35vw] md:w-[40vw] overflow-hidden flex items-center justify-center">
        <Image src={Img} alt="ItemImage" className="w-[80vw] absolute hover:opacity-0 transition-opacity duration-300 md:w-[40vw] lg:w-[35vw] xl:w-[25vw]"></Image>
        <Image src={Img2} alt="ItemImage" className="w-[80vw] md:w-[40vw] lg:w-[35vw] xl:w-[25vw]"></Image>
      </div>
      <div className="text-center text-[14px] md:text-[15px] mt-[5vw] md:mt-[2vw] lg:mt-[3vw] lg:mb-[1vw] mx-[2vw] lg:font-semibold leading-tight h-[20vw] md:h-[15vw] lg:h-[5vw] xl:h-[8vw] overflow-hidden">
        {Name.toUpperCase()}
      </div>
      <div className="font-bold text-[18px] md:text-[18px]">
        <span style={{ textDecoration: "line-through", marginRight: "5px" }}>${OldPrice}</span> ${NewPrice}
      </div>
    </div>
  );
}
