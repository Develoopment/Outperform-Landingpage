import Section from "./Section"
import {profPhoto} from "../assets"
import SectionHeading from "./SectionHeading"

const About = () => {
    return (
        <Section id="about"> 
            {/* main wrapper */}
            <div className="
            xl:flex flex-row-reverse justify-between gap-6
            
            border-red-500 
            w-full 
            lg:pr-[50px]
            space-y-6
            ">

                <SectionHeading className={"xl:hidden"}>Who am I?</SectionHeading>

                {/* professional headshot div */}
                <div className="relative">
                    <img 
                    src={profPhoto} 
                    className="aspect-square object-cover w-[479px] relative mx-auto"
                    alt="professional headshot" />
                </div>

                {/* text wrapper */}
                <div className="
                xl:max-w-[600px]
                xl:flex flex-col justify-center
                xl:mx-0
                xl:space-y-10
                relative mx-auto

                max-w-[479px]
                "
                >

                    <h1 className="text-5xl font-light hidden xl:block">Hello, My name is Marvin</h1>

                    <div className="flex gap-4  border-green-500">

                        {/* the line quote element */}
                        <div className="relative w-[50px] h-auto bg-white"></div>
            
                        {/* paragrpah text */}
                        <p className="text-[18px] xl:text-[22px] border-red-500 py-4">
                            Hello! I'm Marvin, the face behind the popular
                            YouTube channel on self-improvement and 
                            productivity. In just six months, I grew my
                            community to 70,000 subscribers (and growing),
                            all the while balancing a demanding consulting career.
                            Curious about my journey and how I did it?
                            Scroll down to uncover my story and start your path
                            to success!

                        </p>
                    </div>
                </div>
            </div>
            
        </Section>
    )
}

export default About;