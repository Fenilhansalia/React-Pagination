import * as React from "react";
import PropTypes from "prop-types";
import PaginationItem from "./PaginationItem";
import usePagination from "./usePagination";

const Pagination = React.forwardRef(function Pagination(props, ref) {
  const {
    boundaryCount,
    count,
    defaultPage,
    disabled,
    hideNextButton,
    hidePrevButton,
    onChange,
    page,
    renderItem = (item) => <PaginationItem {...item} />,
    showFirstButton,
    showLastButton,
    siblingCount,
    ...other
  } = props;

  const { items } = usePagination({ ...props, componentName: "Pagination" });

  return (
    <nav ref={ref} {...other}>
      <ul className="pagination">
        {items.map((item, index) => (
          <li key={index}>
            {renderItem({
              ...item,
            })}
          </li>
        ))}
      </ul>
    </nav>
  );
});

Pagination.propTypes = {
  boundaryCount: PropTypes.number,
  count: PropTypes.number,
  defaultPage: PropTypes.number,
  disabled: PropTypes.bool,
  hideNextButton: PropTypes.bool,
  hidePrevButton: PropTypes.bool,
  onChange: PropTypes.func,
  page: PropTypes.number,
  renderItem: PropTypes.func,
  showFirstButton: PropTypes.bool,
  showLastButton: PropTypes.bool,
  siblingCount: PropTypes.number,
};

export default Pagination;
