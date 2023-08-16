// import { Card, Typography } from "@material-tailwind/react";

// const tableHead = ["Name", "Job", "Employed", ""];

// const tableRows = [
//   {
//     name: "John Michael",
//     job: "Manager",
//     date: "23/04/18",
//   },
//   {
//     name: "Alexa Liras",
//     job: "Developer",
//     date: "23/04/18",
//   },
//   {
//     name: "Laurent Perrier",
//     job: "Executive",
//     date: "19/09/17",
//   },
//   {
//     name: "Michael Levi",
//     job: "Developer",
//     date: "24/12/08",
//   },
//   {
//     name: "Richard Gran",
//     job: "Manager",
//     date: "04/10/21",
//   },
// ];

export const Table = (props) => {
  const tableHead = props.tableHead;
  const tableRows = props.tableRows;
  // const tableDataKeys1 = props.tableDataKeys;
  const tableDataKeys = props.tableDataKeys;
  // console.log(Object.keys(tableRows[0]));
  // const tableDataKeysPara = [...tableDataKeys].join();
  // const tableDataKeysPara = [...tableDataKeys].join();

  // console.log(tableDataKeys[0]);
  return (
    // <Card className="h-full w-full overflow-scroll">
    <table className="w-full min-w-max table-auto text-left">
      <thead>
        <tr>
          {tableHead.map((head) => (
            <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
              {head}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
         




        {/* {tableRows.map(({ name, username, email, jobrole }, index) => ( */}
        {tableRows.map((tableRow, index) => (
          <tr className="even:bg-blue-gray-50/50">
     
           
           <td className="p-4">{tableRow[tableDataKeys[0]]}</td>
           <td className="p-4">{tableRow[tableDataKeys[1]]}</td>
           <td className="p-4">{tableRow[tableDataKeys[2]]}</td>
           <td className="p-4">{tableRow[tableDataKeys[3]]}</td>
            <td className="p-4">Edit</td>
          </tr>
        ))}
      </tbody>
    </table>
    // {/* </Card> */}
  );
};
