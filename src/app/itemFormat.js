import Image from "next/image";
export default function ItemFormat({Img, OldPrice, NewPrice, Name}) {
  return (
    <div className="w-[35vw] md:w-[25vw] lg:w-[20vw] xl:w-[15vw] pb-[1vw] mb-[3vw] h-[50vw] md:h-[35vw] lg:h-[30vw] xl:h-[25vw] flex flex-col justify-between items-center rounded-[10px] border-[1px] border-gray-300 overflow-hidden">
      <div className="h-[35vw] md:h-[25vw] lg:h-[35vw] w-[35vw] md:w-[25vw] overflow-hidden flex items-center justify-center">
        <Image src={Img} alt="ItemImage" className="w-[35vw] md:w-[25vw] lg:w-[20vw] xl:w-[15vw]"></Image>
      </div>
      <div className="text-center text-[14px] md:text-[16px] mt-[2vw] mx-[2vw] leading-tight h-[12vw] overflow-hidden">
        {Name}
      </div>
      <div className="font-semibold text-[12px] md:text-[14px] h-[8vw] md:h-[5vw] mt-[1vw]">
        <span style={{ textDecoration: "line-through" }}>${OldPrice}</span> ${NewPrice}
      </div>
    </div>
  );
}
