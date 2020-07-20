import React from "react"
import './style.scss'
import MAP from '../../Images/map.png'
import WHERE_WE_GO from '../../Images/where_we_go.png'
const WhereWeGo = () => {

    return (
        <div className="container-fluid p-0" id="where_we_go">
            <div className="container pt-5 pb-5">
                <h1 className="text-white">WHERE WE GO</h1>
                <p>Drive Champ is based at the CN intermodal terminals located in Canada and in the U.S., covering three coasts and five ports. Additional trucks are stationed at strategic locations to further meet customers’ needs.</p>
                <div class="row">
                    <div className="col-12 col-md-9">
                        <img src={MAP} alt="map" height="400px" className="w-100" />
                    </div>
                    <div className="col-12 col-md-3">
                        <img src={WHERE_WE_GO} alt="where we go" />
                        <div className="mt-3">
                            <div className="p-3 d-flex">
                                <div className="circle1"></div>
                                <div className="ml-3">Truck Base</div>
                            </div>
                            <div className="p-3 d-flex">
                                <div className="circle2"></div>
                                <div className="ml-3">Served Ports</div>
                            </div>
                            <div className="p-3 d-flex">
                                <div className="circle3"></div>
                                <div className="ml-3">Operations</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default WhereWeGo