let ClockTime = () => {
  let time = new Date();
  return (
    <h1>
      Current time is {time.toLocaleDateString}
      {time.toLocaleTimeString()}
    </h1>
  );
};
export default ClockTime;
