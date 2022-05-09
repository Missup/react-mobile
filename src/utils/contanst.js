export const storage = () => {
  return {
    set: (val) => {
      window.console.log(val);
    },
    get: () => {
      window.console.log("get");
    },
  };
};
