module.exports = {
    transform: {
      "^.+\\.[jt]sx?$": "babel-jest", // Handles both JavaScript and TypeScript with JSX
    },
    moduleFileExtensions: ["js", "jsx", "ts", "tsx"], // Allow Jest to handle these file types
  };
  