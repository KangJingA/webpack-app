// must export/import accordingly to be explicit with our dependencies
export const inputsAreValid = (...input) => {
    return input.every(num => typeof num === "number" && !isNaN(num));
  };