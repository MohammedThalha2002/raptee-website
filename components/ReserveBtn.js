
function ReserveBtn(props) {
    return (
        <button
            className='rounded-none border-solid border
            border-highlight px-3 py-2 hover:bg-highlight-low absolute bottom-32 left-1/2 -translate-x-1/2'>
            <h2 className=' text-gray-300 tracking-widest font-mont'>{props.name}</h2>
        </button>
    )
}

export default ReserveBtn