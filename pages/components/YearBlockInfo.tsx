import React, { useEffect, useState, useRef } from "react";
import moment from "moment"

export default function YearBlockInfo() {
  const [fetchData, setFetchData] = useState([]);

  const dataFetch = async () => {
    setFetchData([]);
    const body = {
      ID: 0,
      userName: "searchFName",
      fName: "searchLName",
      lName: "searchPhone",
    };

    const data = await (
      await fetch("/api/YearBlock/YearBlockInfo_find", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      })
    ).json();
    setFetchData(data);
  };

  useEffect(() => {
    dataFetch();
  }, []);

console.log(fetchData)
  return (
    <>
      <div>{fetchData.length}</div>
      <div>
        {fetchData &&
          fetchData.map((staff: any, key) => {
            return (
              <>
                <div key={key}>
                   {staff.id} = {staff.userName} = {staff.firstName} = {staff.lastName}
                    
                    <li>{staff.tb_staff_leave}</li>
                </div>
                {JSON.stringify(staff)}
                
              </>
            );
          })}
      </div>
    </>
  );
}
