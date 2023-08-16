import AddNewProjectPopup from "./addnew_project_popup";
import AddNewStaffPopup from "./addnew_staff_popup";

export const ProjectTable = (props) => {
  const tableHead = props.tableHead;
  const tableRows = props.tableRows;
  const tableDataKeys = props.tableDataKeys;

  // const selRow = (row)=>{
  //   console.log("===========================",row)
  // }
  // tableRows.map(tr=>{

  //   console.log("-----------------------"+tr["enddate"]+"------------------")
  //   console.log("-----------------------"+tr["enddate"]+"------------------")
  // })
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
          <td className="p-4 cursor-pointer hover:text-amber-900 hover:font-extrabold"><AddNewProjectPopup buttonName="Edit" selRowData={tableRow}/></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
{/* <td className="p-4">
            <div className="flex bg-red-800 p-1 flex-col">
              <label htmlFor="started">Started</label>
              <input className="text-slate-800" type="radio" id="started" name="status1" value = "started" checked/>
            </div>
            <div className="flex bg-red-800 p-1 flex-col">
              <label htmlFor="end">End</label>
              <input className="text-slate-800" type="radio" id="end" name="status" value = "end"/>
            </div>
            {/* <div>
              <label htmlFor="started">Suspended</label>
              <input className="text-slate-800" type="radio" id="suspended" name="status" value = "suspended"/>
            </div> */}
            {/* <input type="radio" name="radio-21" disabled/>
            <input type="radio" name="radio-21" disabled/>
            <input type="radio" name="radio-21" disabled/> */}