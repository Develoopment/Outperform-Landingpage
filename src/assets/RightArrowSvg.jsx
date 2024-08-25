const RightArrowSvg = ({className, fill}) => {
    return(
        <svg width="35" height="24" 
        viewBox="0 0 35 24" 
        fill="none" 
        className={className}
        xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M20.8439 5.29289C21.4134 4.90237 22.3368 4.90237 22.9063 5.29289L31.6563 11.2929C32.2258 11.6834 32.2258 12.3166 31.6563 12.7071L22.9063 18.7071C22.3368 19.0976 21.4134 19.0976 20.8439 18.7071C20.2744 18.3166 20.2744 17.6834 20.8439 17.2929L27.1043 13H4.37508C3.56967 13 2.91675 12.5523 2.91675 12C2.91675 11.4477 3.56967 11 4.37508 11H27.1043L20.8439 6.70711C20.2744 6.31658 20.2744 5.68342 20.8439 5.29289Z" 
            fill={fill}/>
        </svg>
    )
}

export default RightArrowSvg;