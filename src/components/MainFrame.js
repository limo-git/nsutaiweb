import RectangleComponent1 from "../components/RectangleComponent1";
import Blogsandeventsframe from "../components/Blogsandeventsframe";
import ProfileInfoFrame from "../components/ProfileInfoFrame";

const MainFrame = () => {
  return (
    <div className="w-full relative [background:linear-gradient(180deg,_#0a0d19,_rgba(255,_255,_255,_0)_22.54%,_rgba(255,_255,_255,_0)_46.68%,_rgba(255,_255,_255,_0)_80.06%,_rgba(255,_255,_255,_0))] overflow-hidden flex flex-col items-end justify-start gap-[48.75rem] tracking-[normal] mq900:gap-[48.75rem] mq1300:gap-[48.75rem]">
      <div className="self-stretch h-[172.38rem] relative [background:linear-gradient(180deg,_#090c18,_#282a34_21.82%,_#32343d_46.93%,_#262933_76.99%,_#070a16)] hidden" />
      <section className="self-stretch flex flex-col items-center justify-start gap-[14.69rem] max-w-full mq900:gap-[14.69rem] mq1300:gap-[14.69rem]">
        <RectangleComponent1 />
        <Blogsandeventsframe />
      </section>
      <ProfileInfoFrame />
    </div>
  );
};

export default MainFrame;