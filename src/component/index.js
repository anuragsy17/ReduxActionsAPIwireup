import React, {Component} from "react"
import { connect } from 'react-redux'
import { cake, iceCream } from '../redux/index1.js'
class Demo extends Component {
    // constructor(props){
    //     super(props)
    //} 
    render() { 
        return (
            <div>
             <h1>Number of Cake - {this.props.numOfCake}</h1>
             <button onClick={this.props.cake}>Get Cake</button>
             <h2>Number of Ice Cream - {this.props.numOficeCream}</h2>
             <button onClick={this.props.iceCream}>Get Icecream</button>
         </div>
        );
    }
}
 
//export default Demo;
// function Demo(props) {
//     return (
//         <div>
//             <h1>Number of Cake - {props.numOfCake}</h1>
//             <button onClick={props.cake}>Get Cake</button>
//             <h2>Number of Ice Cream - {props.numOficeCream}</h2>
//             <button onClick={props.iceCream}>Get Icecream</button>
//         </div>
//     )
// }


//this fun gets the redux state as a parameter and returns an Object
//when you want to access redux state in your component// it gets redux state as a parameter which can be used to get retrive appropriate state property.
const mapStateToProps = state => {
    return {
        numOfCake: state.cake.numOfCake,
        numOficeCream: state.iceCream.numOficeCream 
    } 
}
//this fun gets the redux dispatch mathod as a parameter and returns an Object
const mapDispatchToProps = dispatch => {
    return {
        cake: () => dispatch(cake()),
        iceCream: () => dispatch(iceCream())
    }
} 
export default connect(mapStateToProps, mapDispatchToProps)(Demo);
//export default Demo;

