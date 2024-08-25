const CardWhite = ({title, price, description, callToAction, className}) => {
    return(
        <div className={`
            ${className ? className : ""}
        bg-white text-black 
        mt-10 p-10 
        min-h-[450px]
        flex flex-col items-center justify-center gap-8 text-center`}
        >
        <h1 className="text-2xl">{title}</h1>

        <h2 className={`${price ? "text-6xl" : "text-4xl"}`}>
            {price ? price : "Get a Quote"}
        </h2>
        <button 
            className="
            bg-black text-bgwhite 
            hover:bg-accentWhite hover:text-bgblack transition-all
            p-3
            min-w-20
            ">
            {callToAction}
        </button>

        <p className="border-black">{description}</p>
    </div>
    )
}

export default CardWhite;