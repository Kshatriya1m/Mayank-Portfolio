const Header = (props) => {
  return (
    <div
      // ${
      //   props.mode === "dark" ? "bg-white text-black" : "bg-red-800 text-white"
      // }
      className={`py-2 text-white bg-red-800`}
    >
      <div className="container mx-auto flex flex-col md:flex-row md:justify-between md:items-center px-3">
        {/* Contact info */}
        <div className="flex flex-col md:flex-row md:space-x-6 space-y-1 md:space-y-0">
          <a href={`tel:${props.tel}`} className="text-sm">
            Tel: {props.tel}
          </a>

          <a href={`mailto:${props.email}`} className="text-sm">
            Email: {props.email}
          </a>
        </div>

        {/* Toggle Switch */}
        <div className="flex items-center mt-2 md:mt-0">
          <span className="mr-2 text-sm">
            {props.mode === "dark" ? "Dark" : "Light"}
          </span>

          <label className="relative inline-block w-12 h-6 cursor-pointer">
            <input
              type="checkbox"
              checked={props.mode === "dark"}
              onChange={props.togglemode}
              className="peer sr-only"
            />
            <span className="absolute inset-0 bg-gray-400 rounded-full peer-checked:bg-black transition"></span>
            <span className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition peer-checked:translate-x-6"></span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Header;
