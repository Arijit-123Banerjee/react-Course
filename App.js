const container = React.createElement("div", {}, [
  React.createElement("h1", {}, "hello"),
  React.createElement("h2", {}, "exaplin"),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
