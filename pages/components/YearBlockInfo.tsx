import React, { useEffect, useState, useRef } from "react";

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
                <li key={key}>
                  {staff.id} = {staff.userName} = {staff.firstName} = {staff.lastName}
                </li>
                {JSON.stringify(staff)}
              </>
            );
          })}
      </div>
    </>
  );
}
