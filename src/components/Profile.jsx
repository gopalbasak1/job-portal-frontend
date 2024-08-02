import { Contact, Mail, Pen } from "lucide-react";
import Navbar from "./shared/Navbar";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Label } from "./ui/label";
import AppliedJobTable from "./AppliedJobTable";


const skills= ["html", "css", "javascript", 'ReactJs']

const Profile = () => {

    const isResume = true;

    return (
        <div>
            <Navbar/>
            <div className="max-w-4xl  mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8">

               <div className="flex justify-between ">

               <div className="flex items-center gap-4">
                <Avatar className="h-24 w-24">
                    <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8kjNASp-t4VymZrnRo9hIMRSeTcWNarxbJw&s" alt="profileName"/>
                </Avatar>
                <div className="">
                <h1 className="font-medium text-xl">User Name</h1>
                <p>Add your bio</p>
                </div>
                </div>
                <Button className="text-right" variant="outline"><Pen/></Button>
               </div>
                
                <div className="my-5">

                   <div className="flex items-center gap-3 my-2">
                   <Mail/>
                   <span>ratan@gmail.com</span>
                   </div>

                   <div className="flex items-center gap-3 my-2">
                   <Contact/>
                   <span>01742665525</span>
                   </div>
                </div>
                    <div className="my-5">
                        <h1>Skills</h1>
                        <div className="flex items-center gap-1">
                        {
                            skills.length !== 0 ? skills.map((item,index)=> <Badge key={index}>{item}</Badge>) : <span>NA</span>
                        }
                        </div>
                    </div>

                <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label className="text-md font-bold">Resume</Label>

                        {
                            isResume ? <a target="blank" href="https://drive.google.com/file/d/1qhbowI4VwLHTh636sMIIqXDbWAgak9Eu/view?usp=sharing" className="text-blue-500 w-full hover:underline cursor-pointer">Gopal  Resume</a>
                            : 
                            <span>NA</span>
                        }
                </div>

            </div>

            <div className="max-w-4xl mx-auto bg-white rounded-2xl">
                    <h1 className="font-bold text-lg my-5">Applied Jobs</h1>
                    {/* Applications Table */}
                    <AppliedJobTable/>
                </div>

        </div>
    );
};

export default Profile;