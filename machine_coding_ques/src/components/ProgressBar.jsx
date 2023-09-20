const ProgressBar = ({ value = 0 }) => {
  if (value < 0) {
    value = 0;
  } else if (value > 100) {
    value = 100;
  }

  return (
    <>
      <div className="progress">
        <span style={{ color: `${value >= 50 ? "#fff" : "#000"}` }}>
          {value.toFixed()}%
        </span>
        <div style={{ width: `${value}%` }} />
      </div>
    </>
  );
};

export default ProgressBar;
