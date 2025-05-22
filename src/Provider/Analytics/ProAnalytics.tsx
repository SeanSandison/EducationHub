import "../../Styles/AnalyticsStyle.css";

const ProAnalytics = () => {
  // Example static data
  const totalBookings = 120;
  const totalIncome = 3500;
  const monthlyData = [
    { month: 'Jan', bookings: 20, income: 800 },
    { month: 'Feb', bookings: 18, income: 700 },
    { month: 'Mar', bookings: 22, income: 900 },
    { month: 'Apr', bookings: 15, income: 500 },
    { month: 'May', bookings: 25, income: 600 },
    { month: 'Jun', bookings: 20, income: 700 },
  ];

  return (
    <div className="analytics-container">
      <h1 className="analytics-title">Provider Analytics</h1>
      <div className="analytics-summary">
        <div className="analytics-card">
          <h3>Total Bookings</h3>
          <p>{totalBookings}</p>
        </div>
        <div className="analytics-card">
          <h3>Total Income</h3>
          <p>${totalIncome}</p>
        </div>
      </div>
      <div className="analytics-table-container">
        <h3>Monthly Overview</h3>
        <table className="analytics-table">
          <thead>
            <tr>
              <th>Month</th>
              <th>Bookings</th>
              <th>Income</th>
            </tr>
          </thead>
          <tbody>
            {monthlyData.map((data) => (
              <tr key={data.month}>
                <td>{data.month}</td>
                <td>{data.bookings}</td>
                <td>${data.income}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProAnalytics;