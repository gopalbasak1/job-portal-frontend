import { Bookmark } from "lucide-react";
import { Button } from "./ui/button";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";


const Job = () => {
    return (
        <div className="p-5 rounded-md shadow-xl bg-white border border-gray-100">
            <div className="flex justify-between items-center gap-2">
            <p className="text-sm text-gray-500">2 days ago</p>
            <Button variant='outline' className="rounded-full" size="icon"><Bookmark/></Button>
            </div>
            
            <div className="flex items-center gap-2 my-2">
            <Button>
                <Avatar>
                    <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8kjNASp-t4VymZrnRo9hIMRSeTcWNarxbJw&s"/>
                </Avatar>
            </Button>
            <div>
                <h1 className="front-medium text-lg">Company Name</h1>
                <p className="text-sm text-gray-500">Bangladesh</p>
            </div>
            </div>
           
           <div>
                <h1 className="front-bold text-lg my-2">Title</h1>
                <p className="text-sm text-gray-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero soluta iusto labore quidem iste neque id dicta eius nihil cumque?</p>
           </div>
           <div className="flex items-center gap-2 mt-4">
        <Badge className={"text-blue-700 font-bold"} variant="ghost">
          12 Positions
        </Badge>
        <Badge className={"text-[#F83002] font-bold"} variant="ghost">
          Part Time
        </Badge>
        <Badge className={"text-[#7209b7] font-bold"} variant="ghost">
          24LPA
        </Badge>
      </div>
      <div className="flex items-center gap-4 mt-4">
        <Button variant="outline">Details</Button>
        <Button className="bg-[#7209b7] hover:bg-[#8f61ad]">Save For Later</Button>
      </div>
        </div>
    );
};

export default Job;