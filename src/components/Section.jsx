const Section = ({id, className, children}) => {
    return(
        <div
        id={id} 
        className={`
        ${className ? className : ''}
        min-h-[70vh]
        mb-20 py-10
        flex flex-col justify-center items-center
         border-green-500`}>
            {children}
        </div>
    )
}

export default Section