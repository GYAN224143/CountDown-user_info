import "./User.css";

import React, { useState, useEffect } from "react";
import axios from "axios";
import ls from "local-storage";

const User = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isListVisible, setListVisible] = useState(true);
  const [searchHistory, setSearchHistory] = useState(
    ls.get("searchHistory") || []
  );
  const [buttonColor, setButtonColor] = useState("#4caf50"); // Initial color

  useEffect(() => {
    // Fetch users from the API
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setUsers(response.data))
      .catch((error) => console.error("Error fetching users:", error));

    console.log(users);
  });

  const handleSearch = () => {
    if (searchTerm.trim() !== "") {
      // Add the search term to search history
      const updatedSearchHistory = [searchTerm, ...searchHistory];
      setSearchHistory(updatedSearchHistory);
      ls.set("searchHistory", updatedSearchHistory);
    }

    // Filter users based on the search term
    const filteredUsers = users.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setUsers(filteredUsers);

    // Change button color on search
    setButtonColor("#45a049");
  };

  // const handleSort = () => {
  //   // Sort users by name
  //   const sortedUsers = [...users].sort((a, b) => a.name.localeCompare(b.name));
  //   setUsers(sortedUsers);

  //   // Change button color on sort
  //   setButtonColor("#2196F3");
  // };

  // Toggle function to show/hide the list
  const toggleListVisibility = () => {
    setListVisible(!isListVisible);
  };

  return (
    <div className="container">
      <h1>User Information</h1>
      <br />
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button style={{ backgroundColor: buttonColor }} onClick={handleSearch}>
          Search
        </button>
        {/* <button style={{ backgroundColor: buttonColor }} onClick={handleSort}>
          Sort by Name
        </button> */}
      </div>
      <div className="seachH">
        <h2 onClick={toggleListVisibility}>Search History</h2>

        {isListVisible && (
          <ul className="search-history">
            {searchHistory.map((term, index) => (
              <li key={index}>{term}</li>
            ))}
          </ul>
        )}
      </div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default User;
