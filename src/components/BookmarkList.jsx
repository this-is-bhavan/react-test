import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalProvider";
import Bookmark from "./Bookmark";

const BookmarkList = () => {
  const { bookmarks } = useContext(GlobalContext);
  return (
    <ul className="bookmarkList">
      {bookmarks ? (
        bookmarks.map((bookmark) => (
          <Bookmark bookmark={bookmark} key={bookmark.id} />
        ))
      ) : (
        <p>No Bookmarks...</p>
      )}
    </ul>
  );
};

export default BookmarkList;
