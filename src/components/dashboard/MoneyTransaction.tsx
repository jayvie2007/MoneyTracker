const headers = ["Category", "Description", "Amount", "Time"];
const data = [
  {
    id: 1,
    category: "Bank",
    description: "Test",
    amount: 300,
    time: "10/21/2025",
  },
  {
    id: 2,
    category: "Food",
    description: "Test",
    amount: 100,
    time: "10/20/2025",
  },
  {
    id: 3,
    category: "Loan",
    description: "Test",
    amount: 2500,
    time: "10/19/2025",
  },
  {
    id: 4,
    category: "Rent",
    description: "Test",
    amount: 5000,
    time: "10/18/2025",
  },
  {
    id: 5,
    category: "Internet",
    description: "Test",
    amount: 1500,
    time: "10/17/2025",
  },
  {
    id: 6,
    category: "Gas",
    description: "Test",
    amount: 260,
    time: "10/16/2025",
  },
];

const MoneyTransaction = ({}) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-5 flex flex-col gap-1 w-full min-h-[500px]">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-xl">Money Transaction</h1>
        <div className="rounded-md p-1">
          <button
            // onClick={() => setTab("monthly")}
            className={`cursor-pointer px-4 py-2 rounded-md bg-indigo-800 hover:bg-indigo-600 text-white text-sm`}
          >
            Show More
          </button>
        </div>
      </div>

      {/* Table */}
      <table className="w-full">
        <thead className="border-b border-[#393F9D]/50">
          <tr>
            {headers.map((header) => (
              <th key={header} className="px-6 py-3">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-[#393F9D]/50">
          {data.map((data) => (
            <tr
              key={data.id}
              className="hover:bg-gray-700/25 transition-colors duration-200"
            >
              <td className="px-6 py-4 whitespace-nowrap text-center">
                <div className="text-sm">{data?.category}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-center">
                <div className="text-sm">{data?.description}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-center">
                <div className="text-sm">{data?.amount}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-center">
                <div className="text-sm">{data?.time}</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MoneyTransaction;
