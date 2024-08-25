const CardBlack = ({title, price, description, callToAction, className}) => {
    return(
        <div className={`
        ${className ? className : ""}    
        bg-bgblack text-bgwhite text-center
        border border-bgwhite 
        mt-10 p-10 
        min-h-[450px]
        lg:scale-110
        flex flex-col items-center justify-center gap-8`}>
        <h1 className="text-2xl">{title}</h1>

        <h2 className={`${price ? "text-6xl" : "text-4xl"}`}>
            {price ? price : "Get a Quote"}
        </h2>
        <button 
            className="
            bg-white text-bgblack 
            hover:bg-accentGray hover:text-bgwhite transition-all
            p-3
            min-w-20
            ">
            {callToAction}
        </button>

        <p>{description}</p>
    </div>
    )
}

export default CardBlack;