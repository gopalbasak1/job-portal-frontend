import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";

const filterData = [
  {
    filterType: "Location",
    array: [
      "Dhaka",
      "Chattrogram",
      "Mymensingh",
      "Sylhet",
      "Khulna",
      "Rajshahi",
      "Barisal",
      "Rangpur",
    ],
  },
  {
    filterType: "Industry",
    array: [
      "Frontend Developer",
      "Backend Developer",
      "MernStack Developer",
      "FullStack Developer",
    ],
  },
  {
    filterType: "Salary",
    array: ["0-40K", "42K-1Lakh", "1Lakh to 5Lakh"],
  },
];

const FilterCard = () => {
  return (
    <div className="w-full bg-white p-3 rounded-md">
      <h1 className="font-bold text-lg">Filter Jobs</h1>
      <hr className="mt-3" />
      <RadioGroup>
        {filterData.map((data) => (
          <div key={data}>
            <h1 className="font-bold text-lg">{data.filterType}</h1>
            {data.array.map((item) => {
              return (
                <div key={item} className="flex item-center space-x-2 my-2">
                  <RadioGroupItem value={item}/>
                  <Label>{item}</Label>
                </div>
              );
            })}
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default FilterCard;
