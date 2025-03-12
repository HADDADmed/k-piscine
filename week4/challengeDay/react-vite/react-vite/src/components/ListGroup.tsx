import { useState } from "react";

interface ListGroupProps {
  lists: string[];
  onSelected: (item: string) => void;
}

function ListGroup({ lists , onSelected }: ListGroupProps) {
  let [selectedInddex, setSelectedInddex] = useState(0); ////// useState Hook

  const listEmtpyMessage2 = lists.length === 0 && (
    <li className="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">
      No items found
    </li>
  );

  return (
    <>
      <h1 className="h1 m-3 text-lg bold ">List of items</h1>
      <ul className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        {listEmtpyMessage2}
        {lists.map((list, index) => (
          <li
            onClick={() => {
              setSelectedInddex(index);
              onSelected(list);
            }}
            key={list}
            className={
              selectedInddex == index
                ? "block w-full px-4 py-2 text-white bg-blue-700 border-b border-gray-200  m-1 cursor-pointer dark:bg-gray-800 dark:border-gray-600"
                : "w-full px-4 py-2 border-b border-gray-200 rounded-t-lg m-1 dark:border-gray-600"
            }
          >
            {list}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
