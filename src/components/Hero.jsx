import RightArrowSvg from "../assets/RightArrowSvg";
import Section from "./Section"
import {heroPic} from "../assets"

const Hero = () => {
    return(
    <Section>

        <div className="text-white flex flex-row-reverse justify-around lg:justify-between border-red-500">

            <div className="hidden lg:block">
                <img className="w-[500px]" src={heroPic} alt="heropic"/>
            </div>

            {/* text wrapper div */}
            <div className="space-y-12 lg:w-1/2 lg:my-auto">
                {/* hero and paragraph div */}
                <div className="space-y-4">
                    <h1 className="lg:text-[48px] text-[40px] leading-tight">
                        Level Up Your Action and Execution Skills 
                        to Get Ahead in a Distracted World
                    </h1>
                    <p className="text-[20px] lg:text-[24px] italic">
                        Join the Outperform Newsletter to stay 
                        updated with in-depth explorations 
                        and discussions from my YouTube channel!
                    </p>
                </div>

                <div className=" flex items-center gap-12">

                    <button className="bg-accentGray 
                    p-4 w-40 lg:w-[190px] lg:h-[70px] text-[16px] lg:text-[18px]
                    hover:bg-accentWhite hover:text-black transition-all">
                        Subscribe Here
                    </button>

                    <div>
                        <p className="
                        text-[16px] lg:text-[18px] 
                        flex items-center gap-2 text-center
                        font-light
                        hover:cursor-pointer hover:gap-4 transition-all">
                            Who am I <RightArrowSvg className="" fill="white"/>
                        </p>
                    </div>
                    

                </div>
            </div>

            
            
        </div>
    
        </Section>
        
    )
}

export default Hero;