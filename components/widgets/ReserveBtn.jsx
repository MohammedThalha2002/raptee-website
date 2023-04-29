import Router from "next/router";

function ReserveBtn(props) {
  const handleClick = () => {
    if (props.route) {
      //ROUTE to another page
      Router.push(props.link);
    } else {
      // ROUTE TO  another link
      window.open(props.link, "_blank", "noopener,noreferrer");
    }
  };
  function PreBookingsClosed() {
    if (props.name == "Enquire Now") {
      return (
        <h1 className="text-white font-thin text-xs mb-2 opacity-70">
          Pre-Bookings Closed
        </h1>
      );
    }
  }
  return (
    <div
      className="text-center absolute bottom-32 left-1/2 -translate-x-1/2
    sm:bottom-12"
    >
      {/* <PreBookingsClosed /> */}
      <button
        type="submit"
        onClick={() => handleClick()}
        className="rounded-none border-solid border
            border-highlight px-3 py-2 hover:bg-highlight-low  text-gray-300 hover:text-black"
      >
        <h2 className=" tracking-widest font-mont">{props.name}</h2>
      </button>
    </div>
  );
}

export default ReserveBtn;
