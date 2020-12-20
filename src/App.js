import React from "react";
import "./App.css";
import BookmarkForm from "./components/BookmarkForm";
import BookmarkList from "./components/BookmarkList";
import GlobalProvider from "./context/GlobalProvider";

function App() {
  return (
    <div className="App">
      <h1>Bookmark App</h1>
      <GlobalProvider>
        <BookmarkForm />
        <BookmarkList />
      </GlobalProvider>
    </div>
  );
}

export default App;
