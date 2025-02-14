import React, { useState } from "react";
import Container from "../Container/Container";

function Table() {
  const [tags, setTags] = useState([
    { id: 1, tagAntiga: "TAG-001", tagNova: "Novo TAG-001" },
    { id: 2, tagAntiga: "TAG-002", tagNova: "Novo TAG-002" },
    { id: 3, tagAntiga: "TAG-003", tagNova: "Novo TAG-003" },
  ]);

  return (
    <Container bgColor={"transparent"} flex shadow extraStyles="w-[90%] h-auto">
      <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
        <thead className="bg-gray-50">
          <tr className="text-sm text-gray-500">
            <th className="py-3 px-6 text-left font-semibold">Tag Antiga</th>
            <th className="py-3 px-6 text-left font-semibold">Tag Nova</th>
          </tr>
        </thead>
        <tbody>
          {tags.map((tag) => (
            <tr
              key={tag.id}
              className="hover:bg-gray-100 transition-all duration-200"
            >
              <td className="py-4 px-6 text-sm font-medium text-gray-700 border-b">
                {tag.tagAntiga}
              </td>
              <td className="py-4 px-6 text-sm font-medium text-gray-700 border-b">
                <input
                  type="text"
                  value={tag.tagNova}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}

export default Table;
