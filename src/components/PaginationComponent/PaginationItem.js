import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faStepForward,
  faStepBackward,
} from "@fortawesome/free-solid-svg-icons";

const PaginationItem = React.forwardRef(function PaginationItem(props, ref) {
  const {
    component,
    disabled = false,
    page,
    selected = false,
    type = "page",
    ...other
  } = props;

  const normalizedIcons = {
    previous: <FontAwesomeIcon icon={faArrowLeft} />,
    next: <FontAwesomeIcon icon={faArrowRight} />,
    last: <FontAwesomeIcon icon={faStepForward} />,
    first: <FontAwesomeIcon icon={faStepBackward} />,
  };

  const Icon = normalizedIcons[type];

  return type === "start-ellipsis" || type === "end-ellipsis" ? (
    <div ref={ref} className="btn">
      …
    </div>
  ) : (
    <button
      ref={ref}
      disabled={disabled}
      {...other}
      className={selected ? "btn btn-primary active" : "btn"}
    >
      {type === "page" && page}
      {Icon ? Icon : null}
    </button>
  );
});

PaginationItem.propTypes = {
  component: PropTypes.elementType,
  disabled: PropTypes.bool,
  page: PropTypes.number,
  selected: PropTypes.bool,
  type: PropTypes.oneOf([
    'page',
    'first',
    'last',
    'next',
    'previous',
    'start-ellipsis',
    'end-ellipsis',
  ]),
};


export default PaginationItem;
