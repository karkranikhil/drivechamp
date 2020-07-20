import React from "react"
import './style.scss'
const REQUIREMENT_LIST = [
    "Applicants must provide a Driver Abstract and CVOR indicating a clean driving record, or a record with minimal safety related violations",
    "Complete a background check in compliance with US FMCSA policy (Canada and U.S.)",
    "All applicants must complete and pass a US pre-employment Drug and Alcohol test, and be added to the random testing pool for CNTL (Canada and U.S.)",
    "Applicants must demonstrate and pass an evaluation of their pre-trip inspection and a road test.",
    "Trucks must be aerodynamic, with roof and side fairings.",
]
const Requirements = () => {

    return (
        <div className="container-fluid p-0" id="requirement">
            <div className="container pt-5 pb-5">
                <div class="container">
                    <div class="wrapper">
                        <h1>REQUIREMENTS </h1>
                        <ul class="sessions">
                            {REQUIREMENT_LIST.map((item, index) => <li key={index}>
                                <div class="time">{index + 1}. {item}</div>
                            </li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Requirements