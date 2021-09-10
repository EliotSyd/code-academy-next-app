const Sidebar: React.FC = () => {
    return (
            <div className="py-4 px-4 space-y-2 space-x-2 max-h-screen w-60 bg-blue-600 text-blue-100 flex flex-col">
                <div className="flex py-2 px-6 space-x-3 text-black bg-gradient-to-r from-red-400 to-red-700">
                    <a className="material-icons">navigation</a>
                    <a >Navigation:</a>
                </div>
                
                <div className="flex">
                <a href="#" className="flex space-x-3 py-2 px-3 rounded transition duration-200 hover:bg-blue-800 hover:text-white">
                    <div className="material-icons">house</div>
                    <div  className="">Category 1</div>
                </a>
                </div>

                <div className="flex">
                <a href="#" className="flex space-x-3 py-2 px-3 rounded transition duration-200 hover:bg-blue-800 hover:text-white">
                    <div className="material-icons">directions_car</div>
                    <div  className="">Category 2</div>
                </a>
                </div>

                <div className="flex">
                <a href="#" className="flex space-x-3 py-2 px-3 rounded transition duration-200 hover:bg-blue-800 hover:text-white">
                    <div className="material-icons">battery_full</div>
                    <div  className="">Category 3</div>
                </a>
                </div>

                <div className="flex">
                <a href="#" className="flex space-x-3 py-2 px-3 rounded transition duration-200 hover:bg-blue-800 hover:text-white">
                    <div className="material-icons">call_end</div>
                    <div  className="">Category 4</div>
                </a>
                </div>

                <div className="flex">
                <a href="#" className="flex space-x-3 py-2 px-3 rounded transition duration-200 hover:bg-blue-800 hover:text-white">
                    <div className="material-icons">camera_alt</div>
                    <div  className="">Category 5</div>
                </a>
                </div>

                <div className="flex">
                <a href="#" className="flex space-x-3 py-2 px-3 rounded transition duration-200 hover:bg-blue-800 hover:text-white">
                    <div className="material-icons">house</div>
                    <div  className="">Category 6</div>
                </a>
                </div>

                <div className="flex">
                <a href="#" className="flex space-x-3 py-2 px-3 rounded transition duration-200 hover:bg-blue-800 hover:text-white">
                    <div className="material-icons">house</div>
                    <div  className="">Category 7</div>
                </a>
                </div>

                <div className="flex">
                <a href="#" className="flex space-x-3 py-2 px-3 rounded transition duration-200 hover:bg-blue-800 hover:text-white">
                    <div className="material-icons">house</div>
                    <div  className="">Category 8</div>
                </a>
                </div>

                <div className="flex">
                <a href="#" className="flex space-x-3 py-2 px-3 rounded transition duration-200 hover:bg-blue-800 hover:text-white">
                    <div className="material-icons">house</div>
                    <div  className="">Category 9</div>
                </a>
                </div>

                <div className="flex">
                <a href="#" className="flex space-x-3 py-2 px-3 rounded transition duration-200 hover:bg-blue-800 hover:text-white">
                    <div className="material-icons">house</div>
                    <div  className="">Category 10</div>
                </a>
                </div>

            </div>

    );
};

    export default Sidebar