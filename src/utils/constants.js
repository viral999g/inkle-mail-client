import CIcon from "@coreui/icons-react";
import { AiOutlineInbox, AiOutlineDelete } from "react-icons/ai";
import { FaMailBulk } from "react-icons/fa";
import { MdOutlineDrafts } from "react-icons/md";
import { RiSpamLine } from "react-icons/ri";

export const MOCK_DATA_URL =
  "https://run.mocky.io/v3/15a3a1c3-1cda-4409-b1b1-2f39f5f25123";

export const tags = [
  {
    id: "all",
    text: "All Mail",
    icon: FaMailBulk,
  },
  {
    id: "inbox",
    text: "Inbox",
    icon: AiOutlineInbox,
  },
  {
    id: "draft",
    text: "Draft",
    icon: MdOutlineDrafts,
  },
  {
    id: "spam",
    text: "Spam",
    icon: RiSpamLine,
  },
  {
    id: "trash",
    text: "Trash",
    icon: AiOutlineDelete,
  },
];
