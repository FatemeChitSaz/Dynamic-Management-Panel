import { useGetData } from "../../hooks/getData.js";
import { getUser } from "../../API/API.js";

const getNavbarUser = () => getUser(1);

const Navbar = () => {
    const { data, loading, error } = useGetData(getNavbarUser)
    return (
        <div className="w-full h-16 bg-white fixed top-0 right-0 left-0 shadow-md z-50" >
            <div className="flex items-center justify-between px-6 py-3">
                <div className="flex gap-4">
                    <img src="/colorfilter.png" alt="" className="w-8 h-8" />
                    <div className="font-bold text-lg text-gray-900">
                        APrjectO
                    </div>
                </div>
                {data && (
                    <div className="flex gap-2">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 flex items-center justify-center text-white font-bold">
                            {data.name.charAt(0)}
                        </div>
                        <div className="flex flex-col">
                            <div className="font-bold text-gray-900">{data.name}</div>
                            <div className="font-medium text-gray-900">{data.address.city}</div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Navbar;