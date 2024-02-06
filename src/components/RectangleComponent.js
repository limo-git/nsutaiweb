const RectangleComponent = () => {
  return (
    <header className="self-stretch flex flex-row items-end justify-between pt-[0.5rem] pb-[0rem] pr-[2.38rem] pl-[0rem] box-border sticky gap-[1.25rem] top-[0] z-[99] max-w-full text-left text-[0.94rem] text-white font-inter">
      <div className="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] bg-gray-300" />
      <div className="h-[5.38rem] w-[11.38rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0rem] box-border">
        <img
          className="w-[6.19rem] h-[5.5rem] relative object-cover z-[1]"
          loading="eager"
          alt=""
          src="/imageedit-10-3049730799-1@2x.png"
        />
      </div>
      <div className="h-[1.75rem] w-[40.25rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.44rem] box-border max-w-full lg:w-[0rem]">
        <div className="self-stretch flex-1 flex flex-row items-start justify-between gap-[1.25rem] lg:hidden">
          <div className="flex flex-col items-start justify-start py-[0rem] pr-[0.63rem] pl-[0rem]">
            <div className="relative capitalize font-light z-[1]">blogs</div>
          </div>
          <div className="flex flex-col items-start justify-start py-[0rem] pr-[0.5rem] pl-[0rem]">
            <div className="relative capitalize font-light z-[1]">events</div>
          </div>
          <div className="flex flex-col items-start justify-start py-[0rem] pr-[0.19rem] pl-[0rem]">
            <div className="relative capitalize font-light z-[1]">
              achievements
            </div>
          </div>
          <div className="relative capitalize font-light z-[1]">projects</div>
          <div className="relative [text-decoration:underline] capitalize font-semibold z-[1]">
            about
          </div>
        </div>
      </div>
      <div className="w-[4.13rem] relative font-extralight hidden h-[1.44rem] shrink-0 whitespace-nowrap z-[3]">
        Dive in
      </div>
      <div className="w-[9.25rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[1.44rem] box-border">
        <div className="self-stretch flex flex-row items-center justify-between gap-[1.25rem]">
          <div className="flex flex-row items-start justify-start relative">
            <div className="h-[2.56rem] w-[5.81rem] absolute my-0 mx-[!important] top-[calc(50%_-_20.5px)] left-[-1.69rem] rounded-31xl bg-royalblue z-[1]" />
            <div className="h-[2.44rem] w-[5.69rem] absolute my-0 mx-[!important] top-[calc(50%_-_19.5px)] left-[-1.62rem] rounded-31xl bg-gray-200 z-[2]" />
            <div className="relative font-extralight whitespace-nowrap z-[3]">
              <p className="m-0">log in</p>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start relative">
            <div className="h-[2.44rem] w-[5.69rem] absolute my-0 mx-[!important] top-[calc(50%_-_19.5px)] right-[-1.25rem] rounded-31xl bg-royalblue z-[1]" />
            <div className="relative whitespace-nowrap z-[2]">sign up</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default RectangleComponent;