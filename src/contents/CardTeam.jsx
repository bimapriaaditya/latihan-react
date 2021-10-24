import React from 'react'
import '../components/MyCard.css'
import MyCard from '../components/MyCard';

class CardTeam extends React.Component {
  render(props) {
    return(
      <section className="latihan">
        <div className="container mb-5">
          <div className="pb-3 header-content">
            <h1 className="text-dark text-uppercase">Select</h1>
            <h3 className="text-dark text-uppercase">Primary Team</h3>
          </div>
          <div className="row">
            <MyCard 
              name="Hero-001" 
              img='img/img1.jpg'/>
            <MyCard 
              name="Gr.dreen" 
              img='img/img2.jpg'/>
            <MyCard 
              name="Marvin Team" 
              img='img/img3.jpg'/>
            <MyCard 
              name="SCAASS" 
              img='img/img10.jpg'/>
            <MyCard 
              name="Jungleess Team"
                img='img/img5.jpg'/>
            <MyCard 
              name="SakuRai" 
              img='img/img6.jpg'/>
          </div>
        </div>
        <div className="container">
          <div className="pb-3 header-content">
            <h1 className="text-dark text-uppercase">Select</h1>
            <h3 className="text-dark text-uppercase">Support Team</h3>
          </div>
          <div className="row">
            <MyCard 
              name="Medical Team" 
              img='img/img14.jpg'/>
            <MyCard 
              name="Extra HQ" 
              img='img/img9.jpg'/>
            <MyCard 
              name="Mechanical Team" 
              img='img/img15.jpg'/>
          </div>
        </div>
      </section>
    )
  }
}

export default CardTeam;