import { CNavItem, CSidebar, CSidebarNav } from "@coreui/react";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { tags } from "../../utils/constants";

const SideBar = () => {
  const { tag: tagId } = useParams();
  const { isSideBarNarrow } = useSelector((state) => state.mailReducer);
  const [isHover, setIsHover] = useState(false);

  const narrowSideBar = !(!isSideBarNarrow || isHover);

  return (
    <CSidebar
      className={`full-height sidebar ${narrowSideBar ? "narrow" : ""}`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <CSidebarNav>
        {tags.map((tag) => (
          <Link
            className={`sidebar-item ${
              tag.id === tagId ? "sidebar-item-active" : ""
            } py-8 ${narrowSideBar ? "pl-8 pr-16" : "px-16"}`}
            key={tag.id}
            to={`/${tag.id}`}
          >
            <CNavItem className={`${narrowSideBar ? "pl-8" : "pl-16"}`}>
              <tag.icon />
              {!narrowSideBar && <span className="ml-24">{tag.text}</span>}
            </CNavItem>
          </Link>
        ))}
      </CSidebarNav>
    </CSidebar>
  );
};

export default SideBar;
