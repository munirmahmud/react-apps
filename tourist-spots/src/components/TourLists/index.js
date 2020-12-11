import React, { Component } from 'react';
import { tourData } from '../../data/tourData';
import Tour from './Tour/Tour';
import './tourLists.scss';

export default class TourLists extends Component {
    state = {
        tours: tourData
    };

    removeTour = id => {
        const { tours } = this.state;
        const sortedTour = tours.filter(tour => tour.id !== id);

        this.setState({
            tours: sortedTour
        });
    };
    
    render() {
        const { tours } = this.state;
        return (
            <div className="tour__list">
                {
                    tours.length > 0 && tours.map(tour => <Tour key={tour.id} tour={tour} removeTour={this.removeTour} />)
                }
            </div>
        )
    } 
}
