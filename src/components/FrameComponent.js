const FrameComponent = ({ white1 }) => {
    return (
      <div className="h-[5rem] flex flex-col items-start justify-start pt-[0rem] pb-[0.5rem] pr-[2.5rem] pl-[0rem] box-border max-w-full text-left text-[1.25rem] text-gray-500 font-inter">
        <div className="flex-1 flex flex-row items-start justify-start relative">
          <img
            className="h-[6.06rem] w-[11.06rem] absolute my-0 mx-[!important] top-[-5.5rem] left-[calc(50%_-_88.5px)] object-cover z-[1]"
            loading="eager"
            alt=""
            src={white1}
          />
          <div className="self-stretch relative font-light z-[2]">
            <p className="m-0">All trademarks, logos, and brand names are</p>
            <p className="m-0">property of their respective owners.</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default FrameComponent;