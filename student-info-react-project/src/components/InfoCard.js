import React, { Component } from 'react'

export default class InfoCard extends Component {
    render() {
        const {name, from, funFact, cityOrCountry, indoorsOrOutdoors, travel, food, dogOrCat} = this.props.current;
        return(
            <div className='info-card'>
                <p>{this.props.index + 1} of {this.props.total}</p>
                {name===null ? null : <h1 className='name'>{name}</h1> }
                {from===null ? null : <h2 className='from'>From: <span>{from}</span></h2>}
                {funFact === null ? null : <h2 className='fun-fact'>Fun Fact: <span>{funFact}</span></h2>}
                <br />
                <h2 className='would-you'>Would you rather...</h2>
                {cityOrCountry===null ? null : <h2 className='country'>...live in the city or country? <span>{cityOrCountry}</span></h2>}
                {indoorsOrOutdoors===null ? null : <h2 className='indoor'>...be indoors or outdoors? <span>{indoorsOrOutdoors}</span></h2>}
                {travel===null ? null : <h2 className='travel'>...travel every day or never leave home? <span>{travel}</span></h2>}
                {food===null ? null : <h2 className='tops'>...eat at Top's or Subway? <span>{food}</span></h2>}
                {dogOrCat===null ? null : <h2 className='dog'>...have a dog or a cat? <span>{dogOrCat}</span></h2>}
            </div>
        )
    }
}