import { MdOutlineCheckCircleOutline } from "react-icons/md";
import { ContainerCheck } from "./style";
const ListCheckeds = () => {
  return (
    <ContainerCheck>
      <MdOutlineCheckCircleOutline className="checked" />
      <svg
        width="98"
        height="16"
        viewBox="0 0 98 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="arrowOne"
          d="M97.7071 8.70711C98.0976 8.31658 98.0976 7.68342 97.7071 7.29289L91.3431 0.928932C90.9526 0.538408 90.3195 0.538408 89.9289 0.928932C89.5384 1.31946 89.5384 1.95262 89.9289 2.34315L95.5858 8L89.9289 13.6569C89.5384 14.0474 89.5384 14.6805 89.9289 15.0711C90.3195 15.4616 90.9526 15.4616 91.3431 15.0711L97.7071 8.70711ZM0 9H97V7H0V9Z"
          fill="white"
        />
      </svg>
      <MdOutlineCheckCircleOutline className="checked" />
      <svg
        width="98"
        height="16"
        viewBox="0 0 98 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="arrowOne"
          d="M97.7071 8.70711C98.0976 8.31658 98.0976 7.68342 97.7071 7.29289L91.3431 0.928932C90.9526 0.538408 90.3195 0.538408 89.9289 0.928932C89.5384 1.31946 89.5384 1.95262 89.9289 2.34315L95.5858 8L89.9289 13.6569C89.5384 14.0474 89.5384 14.6805 89.9289 15.0711C90.3195 15.4616 90.9526 15.4616 91.3431 15.0711L97.7071 8.70711ZM0 9H97V7H0V9Z"
          fill="white"
        />
      </svg>
      <MdOutlineCheckCircleOutline className="checked" />
    </ContainerCheck>
  );
};

export default ListCheckeds;
