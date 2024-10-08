const tableData = [
  {
    structure: "Pre-sale",
    percent: "10%",
    allocation: "10B",
    schedule: "100% unlocked on TGE",
    color: "#280A00",
  },
  {
    structure: "Public sale 1",
    percent: "15%",
    allocation: "15B",
    schedule: "100% unlocked on TGE",
    color: "#370D05",
  },
  {
    structure: "Public sale 2 ",
    percent: "0%",
    allocation: "10B",
    schedule: "25% unlocked followed by 25% quarterly unlock",
    color: "#462A0A",
  },
  {
    structure: "Public sale 3",
    percent: "5%",
    allocation: "5B",
    schedule: "25% unlocked followed by 25% quarterly unlock",
    color: "#553C0F",
  },
  {
    structure: "Development fund",
    percent: "20%",
    allocation: "20B",
    schedule: "Linear vesting during 48 months",
    color: "#822E1E",
  },
  {
    structure: "Marketing",
    percent: "10%",
    allocation: "10B",
    schedule: "Linear vesting during 24 months",
    color: "#B4141E",
  },
  {
    structure: "Liquidity",
    percent: "5%",
    allocation: "5B",
    schedule: "100% unlocked at TGE",
    color: "#C83232",
  },
  {
    structure: "Community incent.",
    percent: "10%",
    allocation: "10B",
    schedule: "Linear vesting during 48 months",
    color: "#DC4646",
  },
  {
    structure: "Team",
    percent: "8%",
    allocation: "8B",
    schedule: "6 months cliff followed by 24 months linear vesting",
    color: "#F09090",
  },
  {
    structure: "Advisors",
    percent: "4%",
    allocation: "4B",
    schedule: "6 months cliff followed by 12 months linear vesting",
    color: "#FF6E6E",
  },
  {
    structure: "Reserve",
    percent: "3%",
    allocation: "3B",
    schedule: "100% unlocked on TGE",
    color: "#FFB4B4",
  },
];

const TokenomicsTable = () => {
  return (
    <>
      <div className="hidden lg:block rounded-md bg-[#353731]">
        <table>
          <thead>
            <tr>
              <th>Structure</th>
              <th>%</th>
              <th>Token Allocation</th>
              <th>Vesting schedule</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, idx) => (
              <tr key={idx}>
                <td style={{ color: row.color }}>{row.structure}</td>
                <td>{row.percent}</td>
                <td>{row.allocation}</td>
                <td>{row.schedule}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="px-4 py-6 text-sm">
          FICCO coins are held secure in multi-signature wallets, requiring
          multiple approvals for any transaction, ensuring robust protection
          against unauthorized access and fraud. For more information please
          download the whitepaper.
        </p>
      </div>
    </>
  );
};

export default TokenomicsTable;
