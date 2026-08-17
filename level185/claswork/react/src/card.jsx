import "./style.css";

function card(props) {
  return (
    <div id={props.id} onClick={props.onclick} className="card">
      <img src={props.img} alt="" />
      <h2>{props.name}</h2>
      <p>{props.description}</p>
    </div>
  );
}

export default card;
