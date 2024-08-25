import Section from "./Section"
import CardWhite from "./CardWhite"
import CardBlack from "./CardBlack"
import {serviceItems} from "../assets/constants"
import SectionHeading from "./SectionHeading"

const Services = () => {
    return(
        <Section id="services">
            {/* main container */}
            <div className="w-full lg:space-y-10">

                <SectionHeading>How can I help you?</SectionHeading>

                {/* card container */}
                <div className="flex flex-col items-center lg:flex-row lg:justify-evenly lg:gap-10">

                {/*  */}
                    {serviceItems.map(({title, price, description, callToAction, highlight}, index) => (

                        highlight === "white" ? 
                            <CardWhite key={"service-item-" + index} className="lg:w-[350px] lg:h-[510px] max-w-[400px]" title={title} price={price} description={description} callToAction={callToAction}/> 
                        : 
                            <CardBlack key={"service-item-" + index} className="lg:w-[350px] lg:h-[510px] max-w-[420px]" title={title} price={price} description={description} callToAction={callToAction}/>

                    ))}

                </div>

            </div>
        </Section>
    )
}

export default Services