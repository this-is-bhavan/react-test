import React, { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  // global state
  const [bookmarks, setBookmarks] = useState([]);
  //   when the component is mounted
  useEffect(() => {
    let savedBookmarks = JSON.parse(localStorage.getItem("bookmarks"));
    setBookmarks(savedBookmarks);
  }, []);
  // add new bookmark
  const addBookmark = ({ name, link, id }) => {
    let bookmark = {
      name: name,
      link: link,
      id: id,
    };
    if (!localStorage.getItem("bookmarks")) {
      // when no bookmarks
      localStorage.setItem("bookmarks", JSON.stringify([bookmark]));
      setBookmarks([bookmark]);
    } else {
      // when bookmarks present
      let savedBookmarks = JSON.parse(localStorage.getItem("bookmarks"));
      savedBookmarks.push(bookmark);
      localStorage.setItem("bookmarks", JSON.stringify(savedBookmarks));
      setBookmarks(savedBookmarks);
    }
  };
  //   delete bookmark
  const deleteBookmark = (id) => {
    console.log("delete pressed", id);
    let savedBookmarks = JSON.parse(localStorage.getItem("bookmarks"));
    let updatedBookmarks = savedBookmarks.filter(
      (bookmark) => bookmark.id !== id
    );
    console.log(updatedBookmarks);
    localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));
    setBookmarks(updatedBookmarks);
  };

  return (
    <GlobalContext.Provider value={{ bookmarks, addBookmark, deleteBookmark }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
