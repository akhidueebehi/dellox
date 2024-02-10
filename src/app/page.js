"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { LuSearchCheck } from "react-icons/lu";
import logo from "../../assets/logo.jpg";
import ItemFormat from "./itemFormat";
import watchListing from "./watchListing";
import braceletListing from "./braceletListing";
import pendantListing from "./pendantListing";
import earringListing from "./earringListing";
import accessoryListing from "./accessoryListing";
import reportNumbers from "./reportNo";
import { useRef } from "react";

export default function Home() {
  const [openMenu, setOpenMenu] = useState(false);
  const [repValue, setRepValue] = useState();
  const [scrollY, setScrollY] = useState(0);
  const [reportInput, setReportInput] = useState();
  const [reportMessage, setReportMessage] = useState("");
  const watchRef = useRef(null);
  const braceletRef = useRef(null);
  const pendantRef = useRef(null);
  const earringRef = useRef(null);
  const accessoryRef = useRef(null);
  const reportRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="font-lato overflow-hidden">
      <div
        className={`fixed top-0 ${
          openMenu
            ? "left-0 transition-all duration-300"
            : "-left-[100%] transition-all duration-300"
        } z-40 text-[16px] font-serif font-semibold bg-[#000000ee] text-white w-full h-full flex lg:hidden items-center justify-center flex-col`}
      >
        <div
          className="m-[12px]"
          onClick={() => {
            setOpenMenu(false);
            watchRef.current?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          WATCHES {">"}
        </div>
        <div
          className="m-[12px]"
          onClick={() => {
            setOpenMenu(false);
            braceletRef.current?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          BRACELETS {">"}
        </div>
        <div
          className="m-[12px]"
          onClick={() => {
            setOpenMenu(false);
            pendantRef.current?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          PENDANTS {">"}
        </div>
        <div
          className="m-[12px]"
          onClick={() => {
            setOpenMenu(false);
            earringRef.current?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          EARRINGS {">"}
        </div>
        <div
          className="m-[12px]"
          onClick={() => {
            setOpenMenu(false);
            accessoryRef.current?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          ACCESSORIES {">"}
        </div>
      </div>

      <div
        className={`flex flex-col fixed z-50 left-[7vw] ${
          scrollY < 100
            ? "top-[25px] transition-all duration-300 ease-in"
            : "top-[15px] transition-all duration-300 ease-in"
        } lg:hidden items-start justify-center`}
        onClick={() => setOpenMenu(!openMenu)}
      >
        <div
          className={`w-[23px] md:w-[30px] ${
            openMenu
              ? " -rotate-45 -translate-x-[8px] md:-translate-x-[10px] transition-all duration-300 bg-white"
              : "transition-all duration-300 bg-black"
          } h-[2px] md:h-[3px] m-[2px] md:m-[2px]`}
        ></div>
        <div
          className={`w-[23px] md:w-[30px] ${
            openMenu
              ? "rotate-45 translate-x-[8px] md:translate-x-[10px] -translate-y-[6px] transition-all duration-300 bg-white"
              : "transition-all duration-300 bg-black"
          } h-[2px] md:h-[3px] m-[2px] md:m-[2px]`}
        ></div>
        <div
          className={`w-[23px] md:w-[30px] ${
            openMenu
              ? "rotate-45 -translate-x-[8px] md:-translate-x-[10px] translate-y-[4px] md:translate-y-[6px] transition-all duration-300 bg-white"
              : "transition-all duration-300 bg-black"
          } h-[2px] md:h-[3px] m-[2px] md:m-[2px]`}
        ></div>
        <div
          className={`w-[23px] md:w-[30px] ${
            openMenu
              ? "-rotate-45 translate-x-[8px] md:translate-x-[10px] -translate-y-[2px] md:-translate-y-[0px] transition-all duration-300 bg-white"
              : "transition-all duration-300 bg-black"
          } h-[2px] md:h-[3px] m-[2px] md:m-[2px]`}
        ></div>
      </div>

      <div className={`fixed top-0 w-full z-10`}>
        <div
          className={`text-[16px] bg-white flex justify-between items-center ${
            scrollY < 100
              ? "py-[25px] transition-all duration-300 ease-in"
              : "py-[15px] lg:py-[10px] transition-all duration-300 ease-in"
          } px-[7vw] border-b-black border-b-[1px]`}
        >
          <div className="hidden lg:flex w-[25vw]"></div>
          <div className="ml-[5vw] md:ml-0 w-[45vw] lg:w-[25vw] flex items-center justify-center">
            <Image
              src={logo}
              alt="delloxLogo"
              className="w-[110px] md:w-[150px] lg:w-[200px]"
            />
          </div>
          <div className=" w-[45vw] text-[24px] lg:text-[28px] lg:w-[25vw] flex items-center justify-end">
            <LuSearchCheck
              onClick={() => {
                reportRef.current?.scrollIntoView({ behavior: "smooth" });
              }}
            />
          </div>
        </div>

        <div className="hidden lg:flex font-serif items-center text-[14px] justify-center w-full bg-black text-white">
          <button
            className="py-[15px] px-[25px]"
            onClick={() => {
              watchRef.current?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            WATCHES
          </button>
          <button
            className="py-[15px] px-[25px]"
            onClick={() => {
              braceletRef.current?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            BRACELETS
          </button>
          <button
            className="py-[15px] px-[25px]"
            onClick={() => {
              pendantRef.current?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            PENDANTS
          </button>
          <button
            className="py-[15px] px-[25px]"
            onClick={() => {
              earringRef.current?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            EARRINGS
          </button>
          <button
            className="py-[15px] px-[25px]"
            onClick={() => {
              accessoryRef.current?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            ACCESSORIES
          </button>
        </div>
      </div>

      <div className="heroSection mt-[50px] lg:mt-[100px] h-[40vh] md:h-[90vh] pt-[50px] p-[20px] w-full flex flex-col items-center justify-center text-white">
        <div className="lg:text-[64px] drop-shadow-sm md:text-[40px] text-[24px] font-serif font-semibold text-center">
          WELCOME TO DELLOX
        </div>
        <div className="italic drop-shadow-sm md:text-[20px] text-[14px]">
          ...Elegance Redefined
        </div>
      </div>

      <div ref={watchRef} className="lg:pt-[60px] pt-[30px] pb-[20px]">
        <div className="text-[18px] lg:text-[24px] ml-[7vw] lg:mb-0 mb-6 font-semibold font-serif">
          WATCHES
        </div>
        <div className="mx-[5vw] mt-[2vw] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 place-items-center ">
          {watchListing.map((watch, index) => {
            return (
              <ItemFormat
                Img={watch.Image}
                Img2={watch.Image2}
                OldPrice={watch.OldPrice}
                NewPrice={watch.NewPrice}
                Name={watch.Name}
                key={JSON.stringify(watch.Image)}
              />
            );
          })}
        </div>
        <div className="w-full flex items-center justify-center">
          <Link
            href=""
            className=" text-[16px] font-semibold border-2 mt-[2vw] mb-[5vw] border-black p-[10px] hover:bg-black hover:text-white transition-all duration-200"
          >
            SHOP NOW
          </Link>
        </div>
      </div>

      <div
        ref={braceletRef}
        className="lg:pt-[60px] pt-[30px] pb-[20px] bg-black text-white"
      >
        <div className="text-[18px] lg:text-[24px] ml-[7vw] lg:mb-0 mb-6 font-semibold font-serif">
          BRACELETS
        </div>
        <div className="watchListing mx-[5vw] mt-[2vw] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 place-items-center ">
          {braceletListing.map((watch, index) => {
            return (
              <ItemFormat
                Img={watch.Image}
                Img2={watch.Image2}
                OldPrice={watch.OldPrice}
                NewPrice={watch.NewPrice}
                Name={watch.Name}
                key={JSON.stringify(watch.Image)}
              />
            );
          })}
        </div>
        <div className="w-full flex items-center justify-center">
          <Link
            href=""
            className=" text-[16px] font-semibold border-2 mt-[2vw] mb-[5vw] border-white p-[10px] hover:bg-white hover:text-black transition-all duration-200"
          >
            SHOP NOW
          </Link>
        </div>
      </div>

      <div ref={pendantRef} className="lg:pt-[60px] pt-[30px] pb-[20px]">
        <div className="text-[18px] lg:text-[24px] ml-[7vw] lg:mb-0 mb-6 font-semibold font-serif">
          PENDANTS
        </div>
        <div className="mx-[5vw] mt-[2vw] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 place-items-center ">
          {pendantListing.map((watch, index) => {
            return (
              <ItemFormat
                Img={watch.Image}
                Img2={watch.Image2}
                OldPrice={watch.OldPrice}
                NewPrice={watch.NewPrice}
                Name={watch.Name}
                key={JSON.stringify(watch.Image)}
              />
            );
          })}
        </div>
        <div className="w-full flex items-center justify-center">
          <Link
            href=""
            className=" text-[16px] font-semibold border-2 mt-[2vw] mb-[5vw] border-black p-[10px] hover:bg-black hover:text-white transition-all duration-200"
          >
            SHOP NOW
          </Link>
        </div>
      </div>

      <div
        ref={earringRef}
        className="lg:pt-[60px] pt-[30px] pb-[20px] bg-black text-white"
      >
        <div className="text-[18px] lg:text-[24px] ml-[7vw] lg:mb-0 mb-6 font-semibold font-serif">
          EARRINGS
        </div>
        <div className="watchListing mx-[5vw] mt-[2vw] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 place-items-center ">
          {earringListing.map((watch, index) => {
            return (
              <ItemFormat
                Img={watch.Image}
                Img2={watch.Image2}
                OldPrice={watch.OldPrice}
                NewPrice={watch.NewPrice}
                Name={watch.Name}
                key={JSON.stringify(watch.Image)}
              />
            );
          })}
        </div>
        <div className="w-full flex items-center justify-center">
          <Link
            href=""
            className=" text-[16px] font-semibold border-2 mt-[2vw] mb-[5vw] border-white p-[10px] hover:bg-white hover:text-black transition-all duration-200"
          >
            SHOP NOW
          </Link>
        </div>
      </div>

      <div ref={accessoryRef} className="lg:pt-[60px] pt-[30px] pb-[20px]">
        <div className="text-[18px] lg:text-[24px] ml-[7vw] lg:mb-0 mb-6 font-semibold font-serif">
          ACCESSORIES
        </div>
        <div className="mx-[5vw] mt-[2vw] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 place-items-center ">
          {accessoryListing.map((watch, index) => {
            return (
              <ItemFormat
                Img={watch.Image}
                Img2={watch.Image2}
                OldPrice={watch.OldPrice}
                NewPrice={watch.NewPrice}
                Name={watch.Name}
                key={JSON.stringify(watch.Image)}
              />
            );
          })}
        </div>
        <div className="w-full flex items-center justify-center">
          <Link
            href=""
            className=" text-[16px] font-semibold border-2 mt-[2vw] mb-[5vw] border-black p-[10px] hover:bg-black hover:text-white transition-all duration-200"
          >
            SHOP NOW
          </Link>
        </div>
      </div>

      <div
        ref={reportRef}
        className="w-full bg-black text-white flex flex-col items-center justify-center pb-[50px] border-t-[1px] border-[#cccccc] pt-[50px]"
      >
        <div className="font-semibold border-2 border-white py-[15px] px-[55px]">
          DELLOX REPORT CHECK
        </div>
        <div className="flex items-center justify-center mt-[30px]">
          <input
            placeholder="Dellox Report No."
            className="border-[1px] py-[15px] px-[5px] border-[#cccccc]"
            value={reportInput}
            onChange={(e) => {
              setReportInput(e.target.value);
            }}
          />
          <div
            className="font-semibold text-black bg-[#dddddd] p-[15px] ml-[38px] border-[1px] border-[#cccccc]"
            onClick={() => {
              if (reportNumbers.includes(reportInput)) {
                setReportMessage("This Product is from Dellox");
                setRepValue(true);
              } else {
                setReportMessage(
                  "Sorry, this Product does not belong to Dellox"
                );
                setRepValue(false);
              }
            }}
          >
            GO
          </div>
        </div>
        <div
          className={`mt-4 ${repValue ? " text-green-700" : " text-red-700"}`}
        >
          {reportMessage}
        </div>
      </div>
    </main>
  );
}
