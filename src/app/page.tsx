import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex flex-col py-10 sm:flex-row lg:flex-row gap-4 font-sans justify-center items-center h-[min-450px] bg-[#333646] text-white ">
        <div className="w-full md:w-[47%] lg:w-2/4 px-6 lg-pl-10 items-center">
        <h3 className="text-4xl font-semibold text-[#fcb532]">Hi! I am</h3>
        <h1 className="text-5xl font-semibold">Muhammad Umer Khan</h1>
        <p className=" py-4 text-lg ">Hello! I'm Muhammad Umer, a proficient website developer and designer. My commitment to excellence ensures that I deliver premium services and products to my clients, meeting global standards while adhering to tight deadlines.</p>
        <Link href={"/contact"} className="border-2 border-[#fcb532] text-[#fcb532] font-semibold px-8 py-2  float-start">Contact Me</Link>
      </div>
      <div className="flex py-6  justify-center w-full lg:w-2/4 pl-2 lg-pl-10 sm:pr-3">
        <Image src={"/ban.jpg"} alt="image" width={300} height={200} className="rounded">
        </Image>
      </div>
      </div>

<div className="flex flex-col my-20 gap-4 font-sans px-16 lg:px-36 md:px-28 justify-center items-center h-[min-450px] py-5">
    <h3 className="text-[#fcb532] font-semibold text-2xl">My Intro</h3>
    <h2 className="text-3xl font-bold">About Me</h2>
    <p>My expertise extends to various design tools, including Photoshop, Illustrator, and Figma. With these powerful tools, I create immersive and experiential projects that not only impress clients but also elevate brands to new heights by providing exceptional user experiences.</p>
    <p>If you're seeking a passionate and skilled professional who can bring your projects to life with unmatched expertise, don't hesitate to contact me for an interview. I'm eager to hear from you and discuss how I can contribute to your success. Let's turn your ideas into exceptional digital experiences!
    </p>
</div>

<div className="flex flex-col pt-20 py-9 gap-4 font-sans items-center h-[min-450px] border-t-2">
      <h3 className="text-[#fcb532] font-semibold text-2xl">My Services</h3>
      <h2 className="text-3xl font-bold">I Offer Best Services ForYou</h2>
</div>
    <div className="flex flex-wrap gap-2 md:gap-3 lg:gap-7 mx-3 mb-14">
      <div className="flex flex-col w-full md:w-[48%] lg:w-[31%] float-left bg-[#333646] min-h-64 justify-center p-10 md:p-6 text-white border-4 border-[#fcb532] gap-3">
      <h3 className="text-3xl">Figma</h3>
      <p className="text-1xl">Figma is a collaborative web application for interface design, with additional offline features enabled by desktop applications for macOS and Windows.</p>
      </div>

      <div className="flex flex-col w-full md:w-[48%] lg:w-[31%] float-left bg-[#333646] min-h-64 justify-center p-10 md:p-6 text-white border-4 border-[#fcb532] gap-3">
      <h3 className="text-3xl">Web Design</h3>
      <p className="text-1xl">Web design encompasses many different skills and disciplines in the production and maintenance of websites. </p>
      </div>

      <div className="flex flex-col w-full md:w-[48%] lg:w-[31%] float-left bg-[#333646] min-h-64 justify-center p-10 md:p-6 text-white border-4 border-[#fcb532] gap-3">
      <h3 className="text-3xl">Nodejs</h3>
      <p className="text-1xl">Node. js to create server-side web applications, and it is perfect for data-intensive applications since it uses an asynchronous, event-driven model.</p>
      </div>
    </div>

    <div className="flex gap-4 py-7 sm:py-5 mt-36 font-sans justify-center items-center h-[min-450px]  bg-[#333646] text-white ">
        <div className="w-2/4 pl-10 items-center justify-center">
        <h3 className="text-3xl font-semibold">Have Any Project On Mind?</h3>
        <p className=" py-4 text-lg ">Let’s turn your ideas into reality! Share your vision, and we’ll bring it to life with creativity and precision.</p>
        <Link href={"/contact"} className="border-2 border-[#fcb532] text-[#fcb532] font-semibold px-4 lg:px-8 py-2  float-start">Contact Me</Link>
      </div>
      <div className="flex justify-center w-2/4 pl-10">
        <Image src={"/Image (3).png"} alt="image" width={400} height={400} className="rounded items-center">
        </Image>
      </div>
      </div>
</>
  );
}