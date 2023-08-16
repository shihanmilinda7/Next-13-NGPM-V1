import AddNewStaffPopup from "./addnew_staff_popup";

export const StaffTable = (props) => {
  const tableHead = props.tableHead;
  const tableRows = props.tableRows;
  const tableRows1 = [{"name":"dsdsfs"}];
  const tableDataKeys = props.tableDataKeys;
  // console.log("hhhhhhhhhhhhhhhhhhhhhhhhhhhhhh"+tableRows)


  // const selRow = (row)=>{
  //   console.log("===========================",row)
  // }
  return (
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
        {tableRows.map((tableRow, index) => (
          <tr className="even:bg-blue-gray-50/50">
           <td className="p-4">{tableRow[tableDataKeys[0]]}</td>
           <td className="p-4">{tableRow[tableDataKeys[1]]}</td>
           <td className="p-4">{tableRow[tableDataKeys[2]]}</td>
           <td className="p-4">{tableRow[tableDataKeys[3]]}</td>
          {/* <td className="p-4 cursor-pointer hover:text-amber-900 hover:font-extrabold" onClick={()=>selRow(tableRow)}>Edit</td> */}
          <td className="p-4 cursor-pointer hover:text-amber-900 hover:font-extrabold"><AddNewStaffPopup buttonName="Edit | Delete" selRowData={tableRow}/></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
