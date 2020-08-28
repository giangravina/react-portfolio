import React, { Component } from 'react';
import Card from './CardUI';

import drums from '../../assets/images/drums.jpg';
import dice from '../../assets/images/dice.jpg';
import dealership from '../../assets/images/dealership.jpg';





class Cards extends Component {
    constructor(props){
        super(props);
        this.state={};
    }
    render(){
        return(
            <div className="projects">
                <h1 className="project-title">Check Out Some of My Projects Below</h1>
            <div class="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                        <Card 
                        imgsrc={drums} 
                        title="Drums"
                        summary="this is test, mic check"
                        link="http://www.google.com"
                        />
                    </div>
                    <div className="col-md-4">
                        <Card 
                        imgsrc={dice} 
                        title="Dice"
                        summary="this is test 1, 2"
                        link="http://www.google.com"
                        />
                    </div>
                    <div className="col-md-4">
                        <Card 
                        imgsrc={dealership} 
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