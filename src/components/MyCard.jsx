import React from 'react';
import './MyCard.css';

const MyCard = (props) => {
  const [showResult, setShowResult] = React.useState('skill')
  const onClick = () => {showResult == 'skill' ? setShowResult ('weapon') : setShowResult ('skill')} 
  return (
    <div className="card col-md-4">
      <img className="card-img-top" src={process.env.PUBLIC_URL + props.img} alt="logo" />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">
          This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
        </p>

        <div className="card-text">
          <a onClick={onClick}>
          { showResult == 'skill' ? "Weapon Used" : "Character Skill" }    
          </a>
        </div>
        { showResult == 'skill' ? <Skill /> : <Weapon /> }
      </div>

      <div className="btn btn-outline-danger m-3">Select</div>
    </div>
    )
}

const Skill = () => {
  return(
    <div className="latihan-skill">

      <span className="d-flex justify-content-between">
        <i>Speed</i>
        <i>80%</i>
      </span>
      <hr/>
      <span className="d-flex justify-content-between">
        <i>Healthy</i>
        <i>112</i>
      </span>
      <hr/>
      <span className="d-flex justify-content-between">
        <i>Agility</i>
        <i>70%</i>
      </span>
      <hr/>
      <span className="d-flex justify-content-between">
        <i>Defence</i>
        <i>85%</i>
      </span>
      <hr/>
      <span className="d-flex justify-content-between">
        <i>Defuse</i>
        <i>0</i>
      </span>
      <hr/>
    </div>
  )
}

const Weapon = () => {
  return(
      <div className="latihan-weapon">
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae aspernatur, iste nemo placeat eaque mollitia delectus atque cumque explicabo error culpa quia alias ratione voluptates obcaecati asperiores, quibusdam dolorem temporibus!
        </span>
      </div>
  )
}

export default MyCard;