import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalProvider";
import uuid from "uuid/dist/v1";

const BookmarkForm = () => {
  // form state
  const [bookmark, setBookmark] = useState({});
  //   global context
  const context = useContext(GlobalContext);
  //   handlign form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    context.addBookmark({ ...bookmark, id: uuid() });
  };

  return (
    <form className="bookmarkForm" onSubmit={(e) => handleSubmit(e)}>
      <input
        required
        type="text"
        placeholder="Bookmark name"
        onChange={(e) => setBookmark({ ...bookmark, name: e.target.value })}
      />{" "}
      <br />
      <input
        required
        type="url"
        placeholder="Bookmark URL"
        onChange={(e) => setBookmark({ ...bookmark, link: e.target.value })}
      />{" "}
      <br />
      <input type="submit" value="Add bookmark" />
    </form>
  );
};

export default BookmarkForm;
