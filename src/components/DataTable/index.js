import generateMockAirlineData from "./helper/mockDataGenerator";
const DataTable=()=>{
    console.log(generateMockAirlineData());
    return(
        <div>
            DataTable Component
        </div>
    );
}

export default DataTable;