import MyLists from "../features/myLists/MyLists";
import MapComponent from "./map/GoogleMap";
import "../css/NearMe.css";
import { useState } from "react";
import { useGetListItemsQuery } from "./listItems/listItemsSlice";

function NearMe() {
  const [searchInput, setSearchInput] = useState("");
  const { data: fetchListItems = [], isLoading } = useGetListItemsQuery();

  const handleSetSearchInput = (term) => {
    setSearchInput(term);
  };

  return (
    <>
    <div className="NMBackground">
      <h1 className="NMTitle">Near Me</h1>
      <div className="nearMe">
        <div className="myLists">
          <MyLists
            className="nearMeMyLists"
            showAddForm={false}
            showDescription={false}
            isNearMe={true}
            fetchListItems={fetchListItems}
            onListClick={handleSetSearchInput}
          />
        </div>
        <div className="map">
          <input
            type="text"
            name="myListSearch"
            className="myListSearch"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <MapComponent searchInput={searchInput} />
        </div>
      </div>
      </div>
    </>
  );
}

export default NearMe;
