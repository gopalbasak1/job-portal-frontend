/* eslint-disable react/prop-types */
import { Bookmark } from "lucide-react";
import { Button } from "./ui/button";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { useNavigate } from "react-router-dom";


const Job = ({job}) => {

  const navigate = useNavigate();

  const dayAgoFunction = (mongodbTime) =>{
    const createAt = new Date(mongodbTime);
    const currentTime = new Date();
    const timeDifference = currentTime - createAt;
    const time = Math.floor(timeDifference/(1000*24*60*60));
    console.log(time);
    return time;
  }

    return (
        <div className="p-5 rounded-md shadow-xl bg-white border border-gray-100">
            <div className="flex justify-between items-center gap-2">
            <p className="text-sm text-gray-500">
              {dayAgoFunction(job?.createdAt) === 0 ? "Today" : `${dayAgoFunction(job?.createdAt)} days ago`}
              </p>
            <Button variant='outline' className="rounded-full" size="icon"><Bookmark/></Button>
            </div>
            
            <div className="flex items-center gap-2 my-2">
            <Button>
                <Avatar>
                    <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8kjNASp-t4VymZrnRo9hIMRSeTcWNarxbJw&s"/>
                </Avatar>
            </Button>
            <div>
                <h1 className="front-medium text-lg">{job?.company?.name}</h1>
                <p className="text-sm text-gray-500">{job?.location}</p>
            </div>
            </div>
           
           <div>
                <h1 className="front-bold text-lg my-2">{job?.title}</h1>
                <p className="text-sm text-gray-600">{job?.description}</p>
           </div>
           <div className="flex items-center gap-2 mt-4">
        <Badge className={"text-blue-700 font-bold"} variant="ghost">
         {job?.position} Positions
        </Badge>
        <Badge className={"text-[#F83002] font-bold"} variant="ghost">
          {job?.jobType}
        </Badge>
        <Badge className={"text-[#7209b7] font-bold"} variant="ghost">
          {job?.salary}LPA
        </Badge>
      </div>
      <div className="flex items-center gap-4 mt-4">
        <Button onClick={()=> navigate(`/description/${job?._id}`)} variant="outline">Details</Button>
        <Button className="bg-[#7209b7] hover:bg-[#8f61ad]">Save For Later</Button>
      </div>
        </div>
    );
};

export default Job;