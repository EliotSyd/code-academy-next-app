const Sidebar: React.FC = () => {
    return (
        <div className="py-4 px-4 space-y-2 space-x-2 max-h-screen w-60 bg-blue-500 text-blue-100 flex flex-col">
            <div className="flex py-2 px-6 space-x-3 text-white font-bold bg-blue-400">
                <a className="material-icons">navigation</a>
                <a >Categories:</a>
            </div>

            <div className="flex">
                <a href="./footwear" className="flex space-x-3 py-2 px-3 rounded transition duration-200 hover:bg-blue-800 hover:text-white">
                    <div className="material-icons">house</div>
                    <div className="">Footwear</div>
                </a>
            </div>

            <div className="flex">
                <a href="./clothing" className="flex space-x-3 py-2 px-3 rounded transition duration-200 hover:bg-blue-800 hover:text-white">
                    <div className="material-icons">directions_car</div>
                    <div className="">Clothing</div>
                </a>
            </div>

            <div className="flex">
                <a href="./tech stuff" className="flex space-x-3 py-2 px-3 rounded transition duration-200 hover:bg-blue-800 hover:text-white">
                    <div className="material-icons">battery_full</div>
                    <div className="">Tech Stuff</div>
                </a>
            </div>

            <div className="flex">
                <a href="./phone acessories" className="flex space-x-3 py-2 px-3 rounded transition duration-200 hover:bg-blue-800 hover:text-white">
                    <div className="material-icons">call_end</div>
                    <div className="">Phone Acessories</div>
                </a>
            </div>

            <div className="flex">
                <a href="./tv stuff" className="flex space-x-3 py-2 px-3 rounded transition duration-200 hover:bg-blue-800 hover:text-white">
                    <div className="material-icons">camera_alt</div>
                    <div className="">TV Stuff</div>
                </a>
            </div>
</div>
    );
};

export default Sidebar