import PropTypes from "prop-types";

const getCase = (array, value) => {
  const v = value ?? "default";
  const data = array.reduce((a, v) => {
    return { ...a, ...v };
  });
  return data[v];
};

getCase.propTypes = {
  array: PropTypes.array.isRequired,
  value: PropTypes.string,
};

export default getCase;
