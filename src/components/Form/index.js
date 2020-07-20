import React from "react"
// import './style.scss'
const LOCATION = [{ "label": "Choose...", "value": "Choose..." }, { "label": "Calgary, AB", "value": "Calgary, AB" }, { "label": "Charlottetown, PE", "value": "Charlottetown, PE" }, { "label": "Edmonton, AB", "value": "Edmonton, AB" }, { "label": "Halifax, NS", "value": "Halifax, NS" }, { "label": "Kamloops, BC", "value": "Kamloops, BC" }, { "label": "Moncton, NB", "value": "Moncton, NB" }, { "label": "Montreal, QC", "value": "Montreal, QC" }, { "label": "Porte aux Basques, NL", "value": "Porte aux Basques, NL" }, { "label": "Prince George, BC", "value": "Prince George, BC" }, { "label": "Regina, SK", "value": "Regina, SK" }, { "label": "Saskatoon, SK", "value": "Saskatoon, SK" }, { "label": "Toronto, ON", "value": "Toronto, ON" }, { "label": "Vancouver, BC", "value": "Vancouver, BC" }, { "label": "Victoria, BC", "value": "Victoria, BC" }, { "label": "Winnipeg, MB", "value": "Winnipeg, MB" }, { "label": "Chicago, IL", "value": "Chicago, IL" }, { "label": "Detroit, MI", "value": "Detroit, MI" }, { "label": "Jackson, MS", "value": "Jackson, MS" }, { "label": "Memphis, TN", "value": "Memphis, TN" }, { "label": "New Orleans, LA", "value": "New Orleans, LA" }]
const Form = () => {

    return (
        <div className="container-fluid p-0" id="ApplyForm">
            <div className="container pt-5 pb-5">
                <h1 className="text-center">APPLY NOW</h1>
                <div>
                    <form>
                        <div class="form-group">
                            <label for="name">Name:</label>
                            <input type="name" class="form-control" placeholder="Enter your name" id="name" />
                        </div>
                        <div class="form-group">
                            <label for="company">Company Name:</label>
                            <input type="company" class="form-control" placeholder="Enter your company name" id="company" />
                        </div>
                        <div class="form-group">
                            <label for="telephone">Telephone:</label>
                            <input type="number" class="form-control" placeholder="Enter your telephone number" id="telephone" />
                        </div>
                        <div class="form-group">
                            <label for="truck">Truck Information(Year, make, model, fairings):</label>
                            <input type="truck" class="form-control" placeholder="Enter your truck information" id="truck" />
                        </div>
                        <div class="form-group">
                            <label for="sel1">Location:</label>
                            <select class="form-control" id="sel1">
                                {LOCATION.map(item => <option value={item.value}>{item.label}</option>)}
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="experience">Number of years of driving experience:</label>
                            <input type="experience" class="form-control" placeholder="Enter your driving experience" id="experience" />
                        </div>
                        <div class="form-group">
                            <label for="email">Email:</label>
                            <input type="email" class="form-control" placeholder="Enter you Email id" id="email" />
                        </div>
                        <div className="text-center">
                            <button type="submit" class="btn btn-warning">Submit</button>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Form