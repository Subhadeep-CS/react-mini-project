import { useEffect, useState, useRef } from "react";
import {
  generateMockAirlineData,
  getFlightStatus,
} from "../../helper/DataTableHelper";

const DataTable = () => {
  const [flightDetailsList, setFlightDetailsList] = useState([]);
  const [copyFlightDetailsList, setCopyFlightDeatilsList] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [searchText, setSearchText] = useState("");

  const previousButtonRef = useRef(null);
  const nextButtonRef = useRef(null);

  useEffect(() => {
    const airlineData = generateMockAirlineData(100);
    setFlightDetailsList([...airlineData]);
    setCopyFlightDeatilsList([...airlineData]);
  }, []);

  useEffect(() => {
    // Disable previous button if startIndex is 0
    if (startIndex === 0) {
      previousButtonRef.current.disabled = true;
      previousButtonRef.current.style.cursor = "not-allowed";
    } else {
      previousButtonRef.current.disabled = false;
      previousButtonRef.current.style.cursor = "pointer";
    }

    // Disable next button if endIndex is greater than or equal to flightDetailsList length
    if (startIndex + itemsPerPage >= flightDetailsList.length) {
      nextButtonRef.current.disabled = true;
      nextButtonRef.current.style.cursor = "not-allowed";
    } else {
      nextButtonRef.current.disabled = false;
      nextButtonRef.current.style.cursor = "pointer";
    }
  }, [startIndex, itemsPerPage, flightDetailsList]);

  // Handle item change
  const handleItemChange = (quantity) => {
    setItemsPerPage(parseInt(quantity, 10));
    setStartIndex(0); // Reset to the first page
  };

  // Handle search text change
  const handleSearchChange = (searchText) => {
    if(searchText){
      setSearchText(searchText);
    }
    else{
      setSearchText("");
      setFlightDetailsList([...copyFlightDetailsList]);
    }
  };

  // Handle search click
  const handleSearchClick = () => {
    const searchData = copyFlightDetailsList.filter((flightDetails) =>
      flightDetails.flightNumber.includes(searchText)
    );
    setFlightDetailsList([...searchData]);
    setStartIndex(0);
  };

  // Handle next button click
  const handleNextClick = () => {
    if (startIndex + itemsPerPage < flightDetailsList.length) {
      setStartIndex((prevStartIndex) => prevStartIndex + itemsPerPage);
    }
  };

  // Handle previous button click
  const handlePreviousClick = () => {
    if (startIndex > 0) {
      setStartIndex((prevStartIndex) =>
        Math.max(0, prevStartIndex - itemsPerPage)
      );
    }
  };

  return (
    <div className="w-screen h-screen bg-purple-500 flex flex-col">
      <div className="w-1/2 h-10vh my-2 mx-auto">
        <p className="text-black text-5xl font-bold text-center">
          Flight Information Table
        </p>
      </div>
      <div className="w-4/5 h-4/5 bg-white my-2 mx-auto rounded-lg flex flex-col resize-y overflow-auto">
        <div className="m-2 p-2">
          <p className="text-xl font-bold p-1">Airplanes Details</p>
        </div>
        <div className="mx-2 p-2">
          <input
            type="text"
            name="text"
            id="searchText"
            placeholder="Enter flight Number"
            className="border-2 border-black rounded-md outline-black m-1 p-1"
            value={searchText}
            onChange={(e) => handleSearchChange(e.target.value)}
          />
          <button
            className="bg-purple-500 m-1 p-1 w-20 text-white border-white border-2 rounded-md cursor-pointer"
            onClick={handleSearchClick}
          >
            Search
          </button>
        </div>
        <div className="mx-auto resize-y overflow-auto">
          <table className="mx-auto my-2">
            <thead className="bg-gray-400">
              <tr>
                <th className="mx-2 my-1 px-2 py-1 text-center border-b border-orange-100">
                  Flight Number
                </th>
                <th className="mx-2 my-1 px-2 py-1 text-center border-b border-orange-100">
                  Airplane
                </th>
                <th className="mx-2 my-1 px-2 py-1 text-center border-b border-orange-100">
                  Airline
                </th>
                <th className="mx-2 my-1 px-2 py-1 text-center border-b border-orange-100">
                  Airport
                </th>
                <th className="mx-2 my-1 px-2 py-1 text-center border-b border-orange-100">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {flightDetailsList.length ? (
                flightDetailsList
                  .slice(startIndex, startIndex + itemsPerPage)
                  .map((flightDetail, index) => (
                    <tr key={index}>
                      <td className="mx-2 my-1 px-2 py-1 border-b border-orange-100">
                        {flightDetail.flightNumber}
                      </td>
                      <td className="mx-2 my-1 px-2 py-1 border-b border-orange-100">
                        {flightDetail.airplane.name}
                      </td>
                      <td className="mx-2 my-1 px-2 py-1 border-b border-orange-100">
                        {flightDetail.airline.name}
                      </td>
                      <td className="mx-2 my-1 px-2 py-1 border-b border-orange-100">
                        {flightDetail.airport.name}
                      </td>
                      <td className="mx-2 my-1 px-2 py-1 border-b border-orange-100">
                        {getFlightStatus(flightDetail.status)}
                      </td>
                    </tr>
                  ))
              ) : (
                <tr>
                  <td colSpan={5}>
                    <p className="text-center m-auto font-bold">No Data Found</p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="relative mt-auto p-2 flex justify-between items-center">
          <div className="flex items-center">
            <label htmlFor="itemsPerPage" className="mr-2">
              Items per page:
            </label>
            <select
              id="itemsPerPage"
              className="border-2 border-black rounded-md outline-none p-1"
              onChange={(e) => handleItemChange(e.target.value)}
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={30}>30</option>
              <option value={40}>40</option>
              <option value={50}>50</option>
            </select>
          </div>
          <div className="flex items-center">
            <button
              id="previousPage"
              className="bg-purple-500 text-white p-2 rounded-md mx-1"
              onClick={handlePreviousClick}
              ref={previousButtonRef}
            >
              {"<"}
            </button>
            <button
              id="nextPage"
              className="bg-purple-500 text-white p-2 rounded-md mx-1"
              onClick={handleNextClick}
              ref={nextButtonRef}
            >
              {">"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
