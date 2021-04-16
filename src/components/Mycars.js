import React, { Component} from 'react';
import Car from './Cars';

class Mycars extends Component {

    // noCopy = () => {
    //    alert('ne copie pas mon texte!!!');
    // }

    addStyle = (e) => {

        // e.target.classList.add('styled'); or toggle(=> best)
        e.target.classList.toggle('styled');
        // if(e.target.classList.contains('styled')) {
        //     e.target.classList.remove('styled');
        // } else {
        //     e.target.classList.toggle('styled');
        // }
    } 

    quit = (e) => {
        e.target.classList.remove('styled');
    }

    state=  {
        voitures : [
            {name: 'Ford', color: 'red', year: 2002, nombre: 2},
            {name: 'Mercedes', color: 'blue', year: 2012, nombre: 1},
            {name: 'Peugeot', color: 'black', year: 2018, nombre: 4}
        ],
        titre: 'Mon Catalogue Voitures 2!'
    }

    addTenYears = () => {
        const updatedState = this.state.voitures.map((param) => {
            return param.year -= 10;
        });

        this.setState({
            updatedState
        });
    }

    render() {
        // console.log(this);

        // year now
        const year = new Date().getFullYear();

        return (
            <div>
                <h1 onMouseLeave={this.quit} onMouseOver={this.addStyle}>{this.state.titre}</h1>
                {/* <p onCopy={this.noCopy}>Quickly manage the layout, alignment, and sizing of grid columns,</p> */}
                <p>Quickly manage the layout, alignment, and sizing of grid columns,</p>

                {/* en dur */}
                {/* <Car year="2013" color="red">Ford</Car>
                <Car></Car>
                <Car year="2018" color="gray">Peugeot</Car> */}

                {/* en dur based stated */}
                {/* if method contain (), its appply directly else, it's depends click button */}
                <button onClick={this.addTenYears}>+10 ans</button>
                {/* <Car year={ year - this.state.voitures[0].year + 'ans'} color={this.state.voitures[0].color}>{this.state.voitures[0].name}</Car>
                <Car year={ year - this.state.voitures[1].year + 'ans'} color={this.state.voitures[1].color}>{this.state.voitures[1].name}</Car>
                <Car year={ year - this.state.voitures[2].year + 'ans'} color={this.state.voitures[2].color}>{this.state.voitures[2].name}</Car>
                */}

                {/* refactor as boucle for */}

                {
                    this.state.voitures.map((voiture, index) => {
                        return(
                            <div key={index}>
                                <Car num={voiture.nombre} year={ year - voiture.year + ' ans'} color={voiture.color}>{voiture.name}</Car>
                            </div>
                        )
                    })
                }
            </div> 
        )
    }
}

export default Mycars;