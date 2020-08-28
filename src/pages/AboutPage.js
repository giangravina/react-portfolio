import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {

    return (
        <div>
            <Hero title={props.title} />
            <Content>
            <p>I have been coding front-end projects since I was a teenager. Upon graduating from university in New Orleans, I realized I could help people bring an online presence to their businesses via front-end code. </p>
            <p>  I enrolled into a full-stack software development bootcamp at Loyola University New Orleans, and began my journey as a full-time front-end developer. </p>
            </Content>
        </div>
    );
}

export default AboutPage;