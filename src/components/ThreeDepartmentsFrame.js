const ThreeDepartmentsFrame = () => {
    return (
      <section className="flex flex-row items-start justify-center gap-[3.75rem] min-h-[17.06rem] max-w-full text-left text-[1.5rem] text-white font-inter mq825:gap-[3.75rem] mq1400:flex-wrap">
        <div className="w-[18.44rem] flex flex-col items-start justify-start pt-[0.56rem] px-[0rem] pb-[0rem] box-border">
          <div className="w-[16.25rem] relative capitalize font-light inline-block z-[1] mq450:text-[1.19rem]">
            software department
          </div>
        </div>
        <div className="w-[16.38rem] flex flex-col items-start justify-start pt-[0.44rem] px-[0rem] pb-[0rem] box-border">
          <div className="self-stretch h-[2.81rem] relative capitalize font-light inline-block shrink-0 z-[1] mq450:text-[1.19rem]">
            research department
          </div>
        </div>
        <div className="flex flex-col items-start justify-start py-[0rem] pr-[2.19rem] pl-[0rem]">
          <div className="rounded-31xl bg-royalblue flex flex-row items-center justify-center py-[0.44rem] pr-[2.06rem] pl-[1.81rem] z-[1]">
            <div className="h-[2.56rem] w-[5.5rem] relative rounded-31xl bg-royalblue hidden" />
            <div className="relative font-medium z-[2] mq450:text-[1.19rem]">
              All
            </div>
          </div>
        </div>
        <div className="w-[17rem] flex flex-col items-start justify-start pt-[0.56rem] px-[0rem] pb-[0rem] box-border">
          <div className="w-[14.13rem] relative capitalize font-light inline-block z-[1] mq450:text-[1.19rem]">{`AI&ML department`}</div>
        </div>
        <div className="flex flex-col items-start justify-start pt-[0.56rem] px-[0rem] pb-[0rem]">
          <div className="relative capitalize font-light z-[1] mq450:text-[1.19rem]">
            graphics department
          </div>
        </div>
      </section>
    );
  };
  
  export default ThreeDepartmentsFrame;