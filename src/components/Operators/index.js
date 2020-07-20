import React from "react"
import './style.scss'
const OPERATORS_DATA = [
    { name: 'Home time', description: 'Most Owner Operators are home every night.', icon: 'fa-home', color: 'orange' },
    { name: 'Wait time', description: 'Paid after 15 minutes (local), and 1 hour (highway).', icon: 'fa-clock-o', color: 'carat' },
    { name: 'Payment', description: 'Local moves are paid by geographic zone rates and regional/highway moves by the mile.', icon: 'fa-money', color: 'blue' },
    { name: 'Orientation', description: 'In-class presentations and runs paired with existing Drive Champ Owner Operators.', icon: 'fa-graduation-cap', color: 'magenta' },

    { name: 'Plates and permits', description: 'Paid by Drive Champ.', icon: 'fa-list-ol', color: 'green' },
    { name: 'Insurance programs', description: 'Available', icon: 'fa-medkit', color: 'yellow' },

]
const getOperatorList = (data) => {
    return data.map(item =>
        <div className="col-12 col-sm-6" key={item.name}>
            <div className="operator_box p-3">
                <div className="d-flex">
                    <i className={`fa fa_custom ${item.icon} ${item.color}`} aria-hidden="true"></i>
                    <h3 className={`${item.color} text-center text-uppercase`}>{item.name}</h3>
                </div>
                <div>{item.description}</div>
            </div>
        </div>)
}

const Operators = () => {

    return (
        <div className="container-fluid p-0" id="operators">
            <div className="container pt-5 pb-5">
                <h1 className="mobile_heading">DRIVE CHAMP OWNER OPERATORS  <i className="fa fa-thumbs-up" aria-hidden="true"></i></h1>
                <p>Drive champ contracts independent truck owner operators to move cargo between CN’s intermodal terminals and customer locations. Intermodal has grown rapidly in recent years and will only continue to grow. Efficient and innovative, it's generating new opportunities for independent owner operators.</p>
                <div className="row">
                    {getOperatorList(OPERATORS_DATA)}
                </div>


            </div>
        </div>
    )
}

export default Operators

