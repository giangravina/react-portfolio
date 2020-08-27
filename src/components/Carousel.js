import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Card from '../components/Card';

import dealership from '../assets/images/dealership.jpg';
import dice from '../assets/images/dice.jpg';
import drums from '../assets/images/drums.jpg';


class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Project 1',
                    subTitle: 'Description 1',
                    imgSrc: dealership,
                    link: 'www.google.com',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Project 2',
                    subTitle: 'Description 2',
                    imgSrc: dice,
                    link: 'www.google.com',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Project 3',
                    subTitle: 'Description 3',
                    imgSrc: drums,
                    link: 'www.google.com',
                    selected: false
                },

            ]

        }
    }

    handleCardClick = (id, card) => {
        var items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }





    render() {
        return(
            <Container fluid={true}>
                <Row className = "justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        )
    }

}

export default Carousel;