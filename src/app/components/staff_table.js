import AddNewStaffPopup from "./addnew_staff_popup";

export const StaffTable = ({ staffRowData }) => {

  const tableHeads = ["#", "Name", "Contract Type", "Contact No", "NIC", ""];
  const tableDataKeys = ["name", "contracttype", "contactno", "nic"];

  return (
    <div className="md:px-2 py-2 w-full">
      <div className="shadow overflow-hidden rounded border-b border-gray-200 w-full">
        <table className="min-w-full bg-white">
          <thead className="border-b-2 text-black border-indigo-400">
            <tr>
              {tableHeads.map((head) => (
                <th key={head} className="text-left py-5 px-4 uppercase text-sm font-bold">
                  {head}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-gray-700">

            {staffRowData.map((tableRow, index) => (
              <tr className="even:bg-blue-gray-50/50">
                <td className="text-left py-3 px-4 font-bold">{index+1}</td>
                <td className="text-left py-3 px-4">{tableRow[tableDataKeys[0]]}</td>
                <td className="text-left py-3 px-4">{tableRow[tableDataKeys[1]]}</td>
                <td className="text-left py-3 px-4">{tableRow[tableDataKeys[2]]}</td>
                <td className="text-left py-3 px-4">{tableRow[tableDataKeys[3]]}</td>
                {/* <td className="p-4 cursor-pointer hover:text-amber-900 hover:font-extrabold" onClick={()=>selRow(tableRow)}>Edit</td> */}
                <td className="text-left py-3 px-4 cursor-pointer hover:text-amber-900 hover:font-extrabold"><AddNewStaffPopup buttonName="Edit | Delete" selRowData={tableRow} delButton="true"/></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
