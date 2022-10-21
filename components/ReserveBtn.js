import Router from 'next/router'

function ReserveBtn(props) {
    const handleClick = () => {
        if(props.route){
            //ROUTE to another page
            Router.push(props.link)
        } else {
            // ROUTE TO  another link
            window.open(props.link, '_blank', 'noopener,noreferrer');
        }
    }
    return (
        <button onClick={() => handleClick()}
            className='rounded-none border-solid border
            border-highlight px-3 py-2 hover:bg-highlight-low absolute bottom-32 left-1/2 -translate-x-1/2
            sm:bottom-12'>
            <h2 className=' text-gray-300 tracking-widest font-mont'>{props.name}</h2>
        </button>
    )
}

export default ReserveBtn