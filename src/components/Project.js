const Project = (props) => {
  return (
    <div className="p-5">
      <p className="font-bold">{props.title}</p>
      <ul className="list-disc m-5">
        <li>{props.desc1}</li>
        <li>{props.desc2}</li>
        <li>{props.desc3}</li>
      </ul>
    </div>
  );
};
export default Project;
