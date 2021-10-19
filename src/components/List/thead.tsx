const THead = props => (
  <thead>
    <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
      {props.children}
    </tr>
  </thead>
);

export default THead;
