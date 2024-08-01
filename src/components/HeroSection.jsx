import { Search } from "lucide-react";
import { Button } from "./ui/button";


const HeroSection = () => {
    return (
        <div className='text-center'>
            <div className="flex flex-col gap-5 my-10">
            <span className="mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#F83002] font-medium">No. 1 Job Hunt Website</span>
            <h1 className="text-5xl font-bold leading-[1.25]">Search, Apply & <br /> Get Your <span className="text-[#6A38C2] ">Dream Job</span></h1>
            <p className="text-lg text-gray-600 w-[550px] mx-auto">
            Discover top opportunities, apply effortlessly, and land your dream job with our comprehensive job search and career platform.
            </p>

            <div className="flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto">
                <input 
                type="text"
                placeholder="Find your dream jobs"
                className="outline-none border-none w-full"
                 />
                 <Button className="rounded-r-full bg-[#6A38C2] hover:bg-[#561cbb]">
                    <Search className="h-5 w-5"/>
                 </Button>
            </div>

            </div>
        </div>
    );
};

export default HeroSection;