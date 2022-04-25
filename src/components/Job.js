const Job = (props) => {
  return (
    <div className="job">
      <div className={props.className}>
        <h2 className="title">{props.title}</h2>
        <span>
          {props.contractType} - {props.country} -{props.city}
        </span>
      </div>
    </div>
  );
};

export default Job;
