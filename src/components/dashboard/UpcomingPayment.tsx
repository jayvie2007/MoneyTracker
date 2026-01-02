const data = [
  {
    name: "Motorcycle Installment",
    details: "Monthly Expenses",
    amount: 7000,
    date: "10/21/2025",
  },
  {
    name: "PC Installment",
    details: "Monthly Expenses",
    amount: 2507,
    date: "10/21/2025",
  },
  {
    name: "Rent",
    details: "Monthly Expenses",
    amount: 12000,
    date: "10/01/2025",
  },
  {
    name: "Electric Bill",
    details: "Utilities",
    amount: 1850,
    date: "10/05/2025",
  },
  {
    name: "Water Bill",
    details: "Utilities",
    amount: 620,
    date: "10/06/2025",
  },
  {
    name: "Internet Subscription",
    details: "Utilities",
    amount: 1699,
    date: "10/08/2025",
  },
  {
    name: "Mobile Load",
    details: "Communication",
    amount: 500,
    date: "10/10/2025",
  },
  {
    name: "Groceries",
    details: "Daily Expenses",
    amount: 4200,
    date: "10/12/2025",
  },
  {
    name: "Fuel",
    details: "Transportation",
    amount: 1800,
    date: "10/15/2025",
  },
  {
    name: "Streaming Subscription",
    details: "Entertainment",
    amount: 549,
    date: "10/18/2025",
  },
];

const UpcomingPayment = ({}) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-5 flex flex-col gap-1 w-full min-h-[500px]">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-xl">Upcoming Payment</h1>
        <div className="rounded-md p-1">
          <button
            // onClick={() => setTab("monthly")}
            className={`cursor-pointer px-4 py-2 rounded-md bg-indigo-800 hover:bg-indigo-600 text-white text-sm`}
          >
            Show More
          </button>
        </div>
      </div>

      <div className="space-y-3 p-4 max-h-[350px] overflow-y-auto">
        {data.map((item, index) => {
          const dateObj = new Date(item.date);
          const month = dateObj
            .toLocaleString("en-US", { month: "short" })
            .toUpperCase();
          const day = dateObj.getDate();

          return (
            <div
              key={index}
              className="grid grid-cols-[60px_1fr_auto] items-center gap-4 rounded-lg border border-[#393F9D] px-4 py-3"
            >
              {/* Date */}
              <div className="flex flex-col items-center justify-center rounded-md bg-gray-100 py-2">
                <span className="text-xs font-semibold text-gray-600">
                  {month}
                </span>
                <span className="text-sm font-bold">{day}</span>
              </div>

              {/* Description */}
              <div>
                <p className="font-medium text-gray-900">{item.name}</p>
                <p className="text-sm text-gray-500">{item.details}</p>
              </div>

              {/* Amount */}
              <div className="text-right font-semibold text-indigo-600">
                {item.amount.toLocaleString()}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UpcomingPayment;
