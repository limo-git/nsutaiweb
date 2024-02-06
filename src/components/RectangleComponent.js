import FrameComponent from "../components/FrameComponent";

const RectangleComponent = () => {
  return (
    <header className="w-full h-[17.94rem] relative flex flex-row items-end justify-start pt-[4.56rem] px-[5.94rem] pb-[4.38rem] box-border gap-[22.69rem] tracking-[normal] text-center text-[1rem] text-gray-400 font-inter lg:gap-[22.69rem] lg:pl-[2.94rem] lg:pr-[2.94rem] lg:box-border mq450:gap-[22.69rem] mq900:gap-[22.69rem] mq900:pl-[1.44rem] mq900:pr-[1.44rem] mq900:box-border">
      <section className="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] bg-gainsboro" />
      <FrameComponent white1="/white-1@2x.png" />
      <div className="w-[13.88rem] relative font-light inline-block shrink-0 z-[1]">
        <p className="m-0">{`© 2024 NSUTAI `}</p>
        <p className="m-0">All Rights Reserved.</p>
      </div>
      <div className="w-[15.25rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.5rem] box-border text-[1.5rem] text-white">
        <div className="self-stretch flex flex-col items-start justify-start gap-[4.19rem]">
          <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[2.06rem]">
            <div className="h-[1.88rem] flex-1 relative font-light inline-block whitespace-nowrap z-[1]">
              <span className="capitalize">{`find `}</span>
              {`us `}
            </div>
          </div>
          <div className="flex flex-row items-start justify-start relative text-gray-500">
            <div className="h-[2.44rem] relative font-light inline-block whitespace-nowrap z-[1]">
              nsutai@gmail.com
            </div>
            <img
              className="h-[4.25rem] w-[16.25rem] absolute my-0 mx-[!important] top-[-4.19rem] right-[-4.31rem] object-cover z-[1]"
              loading="eager"
              alt=""
              src="/screenshot-20240128-164658removebgpreview-1@2x.png"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default RectangleComponent;