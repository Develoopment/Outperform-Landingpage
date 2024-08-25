import Section from "./Section"
import {contactItems} from "../assets/constants"
import SectionHeading from "./SectionHeading"

const Contact = () => {
    return(
        <Section id="contact">
            {/* main container */}
            <div className="w-full">
                <SectionHeading>Reach Out!</SectionHeading>

                <div className="
                flex flex-col items-center 
                mt-10
                border-red-500
                gap-6
                hover:cursor-pointer
                lg:flex-row
                lg:justify-evenly
                ">
                    
                {contactItems.map((item, index) => (
                    <div key={"contact-item-" + index} className="
                    bg-bgwhite 
                    p-6 w-60 h-60 lg:h-80 lg:w-80
                    flex flex-col justify-evenly items-center 
                    text-bgblack
                    hover:justify-center hover:gap-8 transition-gap transition-justify">

                        {/* svg icon */}
                        {item.icon} 
                        
                        
                        <div>
                            <h1>{item.heading}</h1>
                            <p className="italic font-light">{item.content}</p>
                        </div>
                    </div>
                ))}

                </div>

            </div>
        </Section>
    )
}

export default Contact