import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalProvider";

const Bookmark = ({ bookmark }) => {
  const { deleteBookmark } = useContext(GlobalContext);
  const handleDelete = (id) => {
    deleteBookmark(id);
  };
  return (
    <li className="bookmark">
      <h3>
        <a target="_blank" href={bookmark.link} className="bookmarkName">
          {bookmark.name}
        </a>
      </h3>
      <a target="_blank" href={bookmark.link} className="bookmarkLink">
        {bookmark.link}
      </a>
      <br />
      <button onClick={(id) => handleDelete(bookmark.id)}>
        Delete Bookmark
      </button>
    </li>
  );
};

export default Bookmark;
