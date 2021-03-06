import React from "react";
import PropTypes from "prop-types";

export const GlobalContext = React.createContext(null);

// maybe move all this to 'AlertContext' if more things come up
// seperate the contexts!
const GlobalProvider = ({ children }) => {
  const [alertQueue, setAlertQueue] = React.useState([]);
  const [calenderToken, setCalenderToken] = React.useState("");

  const store = {
    CalenderToken: [calenderToken, setCalenderToken],
    AlertQueue: [alertQueue, setAlertQueue],
    showError: (msg) => {
      setAlertQueue((q) => [
        ...q,
        {
          type: "error",
          msg,
        },
      ]);
    },
    showSuccess: (msg) => {
      setAlertQueue((q) => [
        ...q,
        {
          type: "success",
          msg,
        },
      ]);
    },
  };

  return (
    <GlobalContext.Provider value={store}>{children}</GlobalContext.Provider>
  );
};

GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GlobalProvider;
