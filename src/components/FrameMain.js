import RectangleComponent from "../components/RectangleComponent";
import DepartmentsList from "../components/DepartmentsList";
import ThreeDepartmentsFrame from "../components/ThreeDepartmentsFrame";
import MemberNameFrame from "../components/MemberNameFrame";

const FrameMain = () => {
  return (
    <div className="w-full relative [background:linear-gradient(180deg,_#030612,_#272933_24.01%,_#33353e_52.01%,_#242731_75.01%,_#050814)] overflow-hidden flex flex-col items-center justify-start pt-[0rem] px-[0rem] pb-[24.44rem] box-border gap-[9.94rem] tracking-[normal] lg:gap-[9.94rem] mq825:gap-[9.94rem]">
      <div className="self-stretch h-[252.13rem] relative [background:linear-gradient(180deg,_#030612,_#272933_24.01%,_#33353e_52.01%,_#242731_75.01%,_#050814)] hidden" />
      <RectangleComponent />
      <main className="w-[98.75rem] flex flex-col items-center justify-start py-[0rem] px-[1.25rem] box-border max-w-full text-center text-[2.5rem] text-silver font-inter">
        <section className="w-[77.63rem] flex flex-col items-center justify-start gap-[3rem] min-h-[49.81rem] max-w-full text-center text-[2.5rem] text-silver font-inter mq825:gap-[3rem]">
          <div className="w-[22.13rem] flex flex-row items-start justify-start py-[0rem] pr-[0.44rem] pl-[0rem] box-border max-w-full">
            <h2 className="m-0 h-[4.81rem] flex-1 relative text-inherit capitalize font-medium font-inherit inline-block max-w-full z-[1] mq825:text-[2rem] mq450:text-[1.5rem]">
              about NSUT.AI
            </h2>
          </div>
          <img
            className="self-stretch h-[33rem] relative rounded-36xl max-w-full overflow-hidden shrink-0 object-cover z-[1]"
            loading="eager"
            alt=""
            src="/rectangle-71@2x.png"
          />
        </section>
        <section className="w-[61.25rem] flex flex-row items-start justify-end max-w-full text-center text-[1.5rem] text-silver font-inter">
          <div className="h-[19.38rem] w-[58.69rem] relative capitalize font-light inline-block shrink-0 max-w-full z-[1] mq450:text-[1.19rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </section>
        <DepartmentsList />
        <div className="w-[22.13rem] flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[7.38rem] box-border max-w-full">
          <h2 className="m-0 h-[6.13rem] flex-1 relative text-inherit capitalize font-medium font-inherit inline-block max-w-full z-[1] mq825:text-[2rem] mq450:text-[1.5rem]">
            <p className="m-0">core members</p>
          </h2>
        </div>
        <ThreeDepartmentsFrame />
        <MemberNameFrame />
      </main>
    </div>
  );
};

export default FrameMain;