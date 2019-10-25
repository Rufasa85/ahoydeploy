import React, { Component } from 'react'
import Manatee from './Manatee'

export default class ManateeTank extends Component {
    state = {
        manatees:[
            "Joe",
            "Trae",
            "Denis",
            "Tony",
            "Arra",
            "Billy"
        ]
    }
    render() {
        return (
            <div>
                {this.state.manatees.map(tee=><Manatee name={tee}/>)}
            </div>
        )
    }
}
