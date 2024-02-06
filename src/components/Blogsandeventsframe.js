const Blogsandeventsframe = () => {
    return (
      <div className="w-[98.25rem] flex flex-col items-center justify-start py-[0rem] px-[1.25rem] box-border gap-[5.06rem] max-w-full text-left text-[2rem] text-silver font-inter mq450:gap-[5.06rem] mq900:gap-[5.06rem]">
        <div className="w-[21.88rem] h-[25.81rem] flex flex-col items-center justify-start gap-[0.94rem] max-w-full">
          <img
            className="self-stretch flex-1 relative rounded-[50%] max-w-full overflow-hidden max-h-full object-cover z-[1]"
            loading="eager"
            alt=""
            src="/ellipse-28@2x.png"
          />
          <div className="w-[16.13rem] flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[1.44rem] box-border">
            <h1 className="m-0 h-[3rem] flex-1 relative text-inherit capitalize font-semibold font-inherit inline-block z-[1] mq450:text-[1.19rem] mq900:text-[1.63rem]">
              member name
            </h1>
          </div>
        </div>
        <div className="self-stretch rounded-36xl bg-gray-300 flex flex-col items-start justify-start pt-[5.44rem] px-[7.25rem] pb-[3.56rem] box-border gap-[3.31rem] max-w-full z-[1] text-[2.25rem] text-white mq450:pt-[2.31rem] mq450:pb-[1.5rem] mq450:box-border mq900:gap-[3.31rem] mq900:pt-[3.56rem] mq900:px-[1.81rem] mq900:pb-[2.31rem] mq900:box-border mq1300:pl-[3.63rem] mq1300:pr-[3.63rem] mq1300:box-border">
          <div className="w-[95.75rem] h-[54.25rem] relative rounded-36xl bg-gray-300 hidden max-w-full" />
          <div className="w-[15.63rem] flex flex-col items-start justify-start gap-[0.69rem]">
            <h1 className="m-0 self-stretch h-[2.75rem] relative text-inherit font-normal font-inherit inline-block z-[2] mq450:text-[1.38rem] mq900:text-[1.81rem]">{`Department: `}</h1>
            <h1 className="m-0 w-[14.31rem] h-[2.44rem] relative text-inherit font-light font-inherit text-silver inline-block shrink-0 z-[2] mq450:text-[1.38rem] mq900:text-[1.81rem]">{`Software `}</h1>
          </div>
          <div className="w-[75.88rem] flex flex-col items-start justify-start gap-[1rem] max-w-full">
            <h1 className="m-0 h-[3rem] relative text-inherit font-normal font-inherit inline-block shrink-0 z-[2] mq450:text-[1.38rem] mq900:text-[1.81rem]">
              Achievements:
            </h1>
            <h1 className="m-0 self-stretch h-[10.06rem] relative text-[2rem] font-light font-inherit text-silver inline-block shrink-0 z-[2] mq450:text-[1.19rem] mq900:text-[1.63rem]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute
            </h1>
            <div className="w-[33.63rem] flex flex-col items-start justify-start gap-[1.81rem] min-h-[10.38rem] max-w-full">
              <h1 className="m-0 w-[15.63rem] h-[3rem] relative text-inherit font-normal font-inherit inline-block shrink-0 z-[2] mq450:text-[1.38rem] mq900:text-[1.81rem]">
                Skills:
              </h1>
              <div className="self-stretch flex flex-row flex-wrap items-end justify-start gap-[2.31rem] text-[2rem] mq900:gap-[2.31rem]">
                <div className="h-[3.63rem] rounded-36xl bg-royalblue flex flex-row items-start justify-start pt-[0.56rem] pb-[0.94rem] pr-[2.13rem] pl-[1.5rem] box-border z-[2]">
                  <img
                    className="h-[3.63rem] w-[8.88rem] relative rounded-36xl hidden"
                    alt=""
                    src="/rectangle-77.svg"
                  />
                  <div className="self-stretch relative font-light z-[3] mq450:text-[1.19rem] mq900:text-[1.63rem]">
                    Figma
                  </div>
                </div>
                <div className="h-[3.63rem] rounded-36xl bg-royalblue flex flex-row items-start justify-start pt-[0.56rem] pb-[1.56rem] pr-[2.38rem] pl-[1.44rem] box-border z-[2]">
                  <img
                    className="h-[3.63rem] w-[8.88rem] relative rounded-36xl hidden"
                    alt=""
                    src="/rectangle-79.svg"
                  />
                  <div className="self-stretch relative font-light z-[3] mq450:text-[1.19rem] mq900:text-[1.63rem]">
                    React
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.19rem] box-border min-w-[7.31rem]">
                  <div className="self-stretch h-[3.63rem] rounded-36xl bg-royalblue flex flex-row items-start justify-start pt-[0.56rem] pb-[1rem] pr-[1.25rem] pl-[0.69rem] box-border z-[2]">
                    <img
                      className="h-[3.63rem] w-[11.25rem] relative rounded-36xl hidden"
                      alt=""
                      src="/rectangle-78.svg"
                    />
                    <div className="self-stretch relative font-light z-[3] mq450:text-[1.19rem] mq900:text-[1.63rem]">
                      Javascript
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[15.63rem] flex flex-col items-start justify-start gap-[2.13rem] mq450:gap-[2.13rem]">
              <h1 className="m-0 self-stretch h-[3rem] relative text-inherit font-normal font-inherit inline-block shrink-0 z-[2] mq450:text-[1.38rem] mq900:text-[1.81rem]">
                Connect at:
              </h1>
              <div className="flex flex-row items-end justify-start gap-[1.44rem]">
                <img
                  className="h-[4.44rem] w-[4.31rem] relative object-cover z-[2]"
                  loading="eager"
                  alt=""
                  src="/icons8github30-2@2x.png"
                />
                <img
                  className="h-[4.13rem] w-[3.5rem] relative object-cover z-[2]"
                  loading="eager"
                  alt=""
                  src="/icons8linkedin50-1-1@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Blogsandeventsframe;