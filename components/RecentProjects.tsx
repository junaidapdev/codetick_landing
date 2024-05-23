import { FaCloudDownloadAlt, FaWhatsapp } from "react-icons/fa";
import { workExperience } from "@/data";
import { PinContainer } from "./ui/Pin";
import MagicButton from "@/components/MagicButton";

const Courses = () => {
  return (
    <div className="py-20 w-full">
      <h1 className="heading text-center text-4xl sm:text-5xl px-4">
        Our <span className="text-purple">Courses</span>
      </h1>

      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {workExperience.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <div
              className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
            >
              {/* Radial gradient for the container to give a faded look */}
              <div
                // chnage the bg to bg-black-100, so it matches the bg color and will blend in
                className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
              />
            </div>

            <PinContainer
              title="Malayalam Code Mastery"
              href="https://twitter.com/mannupaaji"
            >
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div
                  className="relative h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bgimg" />
                </div>
                <img
                  src={item.img}
                  alt="cover"
                  className="z-10 absolute bottom-0"
                />
              </div>
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>
              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>
              <div className="pl-16">
                <a href="https://wa.me/+918892786921">
                  <MagicButton
                    title="Download Brochure"
                    icon={<FaWhatsapp />}
                    position="right"
                  />
                </a>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
