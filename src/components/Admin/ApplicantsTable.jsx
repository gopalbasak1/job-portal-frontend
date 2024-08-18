import { MoreHorizontal } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

const shortlistingStatus = ["Accepted", "Rejected"];

const ApplicantsTable = () => {
  return (
    <div>
      <Table>
        <TableCaption>A list of your recent applied user</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>FullName</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Contact</TableHead>
            <TableHead>Resume</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>

         <TableBody>
            <tr>
                <TableCell>FullName</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Contact</TableCell>
                <TableCell>Resume</TableCell>
                <TableCell>Date</TableCell>
                <TableCell className="text-right">
                    <Popover>
                        <PopoverTrigger>
                          <MoreHorizontal/>
                        </PopoverTrigger>
                        <PopoverContent className="w-32">
                        {
                        shortlistingStatus.map((status, index)=>{
                            return(
                                <div key={index}>
                                 <span>{status}</span>
                                </div>
                            )
                        })
                    }
                        </PopoverContent>
                    </Popover>
                    
                </TableCell>
            </tr>
         </TableBody>

        </TableHeader>
      </Table>
    </div>
  );
};

export default ApplicantsTable;
