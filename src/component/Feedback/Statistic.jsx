export const Statistic = ({ good: good, bad: bad, neutral: neutral }) => {
  //   console.log(props);
  return (
    <>
      <table>
        <tbody>
          <tr>
            <td>
              <h2>All:</h2>
            </td>
            <td>
              <h2>{good + bad + neutral}</h2>
            </td>
          </tr>
          <tr>
            <td>
              <h2>Average:</h2>
            </td>
            <td>
              <h2>{(good - bad + neutral) / (good + bad + neutral)}</h2>
            </td>
          </tr>
          <tr>
            <td>
              <h2>Positive: </h2>
            </td>
            <td>
              <h2>{(good / (good + bad + neutral)) * 100}</h2>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
