import React, { Component } from 'react';
import Card from './CardUI';

import drums from '../../assets/images/drums.jpg';
import dice from '../../assets/images/dice.jpg';
import dealership from '../../assets/images/dealership.jpg';
import m3 from '../../assets/images/m3.jpg';
import red from '../../assets/images/red_dice.jpg';
import drumset from '../../assets/images/drumset.jpg';








class Cards extends Component {
    constructor(props){
        super(props);
        this.state={};
    }
    render(){
        return(
            <div className="projects">
                <h1 className="project-title">Check Out Some of My Projects Below</h1>
                <h4 className="project-subtitle">Software Development Projects</h4>
            <div class="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4 col-xs-12">
                        <Card 
                        imgsrc={m3} 
                        title="Drums"
                        summary="this is test, mic check"
                        link="http://www.google.com"
                        />
                    </div>
                    <div className="col-md-4 col-xs-12">
                        <Card 
                        imgsrc={red} 
                        title="Dice"
                        summary="this is test 1, 2"
                        link="http://www.google.com"
                        />
                    </div>
                    <div className="col-md-4 col-xs-12">
                        <Card 
                        imgsrc={drumset} 
                        title="Dealership"
                        summary="this is test 2, 3"
                        link="http://www.google.com"
                        />
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default Cards;