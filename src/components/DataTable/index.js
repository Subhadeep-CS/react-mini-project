import { useEffect, useState } from "react";
import generateMockAirlineData from "../../helper/mockDataGenerator";
const DataTable = () => {
    const [flighDetailsList,setFlightDetailsList]=useState([]);
    useEffect(()=>{
        const airlineData=generateMockAirlineData(100);
        console.log(airlineData);
        setFlightDetailsList([...airlineData]);
    },[])
  return (
    <div id="rootDiv" className="w-screen h-screen bg-purple-500 flex flex-col">
      <div id="datatableHeader" className="w-[50vw] h-[10vh] my-2 mx-auto">
        <p className="text-black text-5xl text-bold align-center">
          Flight Information Table
        </p>
      </div>
      <div
        id="datatable"
        className="w-[80vw] h-[80vh] bg-white my-2 mx-auto rounded-lg flex flex-col"
      >
        <div id="data-table-header" className="m-2 p-2">
          <p className="text-xl text-bold p-1">Airplanes Details</p>
        </div>
        <div id="searchBar" className="mx-2 p-2">
          <input
            type="text"
            name="text"
            id="searchText"
            placeholder="Enter flight Number"
            className="border-2 border-black rounded-md outline-black m-1 p-1"
          />
          <button className="bg-purple-500 m-1 p-1 w-20 text-white border-white border-2 rounded-md cursor-pointer">Search</button>
        </div>
        <div id="table" className="mx-auto">
          <table className="mx-auto my-2">
            <thead className="bg-gray-400">
              <tr>
                <th className="mx-2 my-1 px-2 py-1 text-center border-b-orange-100">Flight Number</th>
                <th className="mx-2 my-1 px-2 py-1 text-center border-b-orange-100">Airplane</th>
                <th className="mx-2 my-1 px-2 py-1 text-center border-b-orange-100">Airline</th>
                <th className="mx-2 my-1 px-2 py-1 text-center border-b-orange-100">Airport</th>
                <th className="mx-2 my-1 px-2 py-1 text-center border-b-orange-100">Status</th>
              </tr>
            </thead>
            <tbody>
                {/* list all the data by default set to 10 */}
                {
                    flighDetailsList.slice(0,5).map((flightDetail,index)=>{
                        return(
                            <tr>
                                <td className="mx-2 my-1 px-2 py-1 border-b-orange-100">{flightDetail.flightNumber}</td>
                                <td className="mx-2 my-1 px-2 py-1 border-b-orange-100">{flightDetail.airplane.name}</td>
                                <td className="mx-2 my-1 px-2 py-1 border-b-orange-100">{flightDetail.airline.name}</td>
                                <td className="mx-2 my-1 px-2 py-1 border-b-orange-100">{flightDetail.airport.name}</td>
                                <td className="mx-2 my-1 px-2 py-1 border-b-orange-100">{flightDetail.status}</td>
                            </tr> 
                        )
                    })
                }
            </tbody>
          </table>
        </div>
        <div id="footerDiv" className="relative ">
          <div id="selectBox">
            <select>
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={30}>30</option>
              <option value={40}>40</option>
              <option value={50}>50</option>
            </select>
          </div>
          <div id="arrowButton" className="align-top">
            <button id="previousPage">{"<"}</button>
            <button id="nextPage">{">"}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
