const Experience = (props) => {
  return (
    <div className="pt-5 grid justify-items-stretch">
      <p className="font-bold justify-self-stretch">{props.title}</p>
      <p className="italic justify-self-stretch">{props.shortDesc}</p>
      <ul className="list-disc m-5">
        <li>{props.desc1}</li>
        <li>{props.desc2}</li>
        {props.desc3 && <li>{props.desc2}</li>}
      </ul>
    </div>
  );
};
export default Experience;
