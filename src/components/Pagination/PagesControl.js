export const PagesControl = ({
  paginationState,
  lastPageIndex,
  dispatch,
  ...props
}) => {
  return (
    <div className="pages-control">
      <button
        id="decrease"
        onClick={() =>
          props.currentPage >= 1 ? dispatch({ type: "decrease" }) : ""
        }
        className={props.currentPage <= 1 ? "hidden" : ""}>
        Prev
      </button>

      <span>{props.currentPage}</span>

      <button
        id="increace"
        onClick={() =>
          props.currentPage < lastPageIndex
            ? dispatch({ type: "increase" })
            : ""
        }
        className={props.currentPage >= lastPageIndex ? "hidden" : ""}>
        Next
      </button>
    </div>
  );
};
