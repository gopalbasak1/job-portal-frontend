import { Edit2, MoreHorizontal } from "lucide-react";
import { Avatar, AvatarImage } from "../ui/avatar";
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

const CompaniesTable = () => {
  return (
    <div>
      <Table>
        <TableCaption>A list of your recent registered companies</TableCaption>

        <TableHeader>
          <TableRow>
            <TableHead>Logo</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
            <TableCell>
                <Avatar>
                    <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8kjNASp-t4VymZrnRo9hIMRSeTcWNarxbJw&s" />
                </Avatar>
            </TableCell>

            <TableCell>Company Name</TableCell>
            <TableCell>08/04/20204</TableCell>
            <TableCell className="text-right">
                <Popover>
                    <PopoverTrigger>
                        <MoreHorizontal/>
                    </PopoverTrigger>
                    <PopoverContent className='w-32'>
                        <div>
                            <Edit2/>
                            <span>Edit</span>
                        </div>
                    </PopoverContent>
                </Popover>
            </TableCell>
        </TableBody>

      </Table>
    </div>
  );
};

export default CompaniesTable;
