import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from '../Component/Header/Header'
import Dining from '../Pages/Dining/Dining'
import Fitness from '../Pages/Fitness/Fitness'
import Home from '../Pages/Home/Home'
import Maps from '../Pages/Map/Map'
import Meeting from '../Pages/Meeting/Meeting'
import Photos from '../Pages/Photos/Photos'
import Wedding from '../Pages/Wedding/Wedding'
import Offers from '../Pages/Offers/Offers'
import LocalArea from '../Pages/Local Area/LocalArea'
import Room from '../Pages/Room/Room'
export default function MainRoutes() {
    return (
        <div>
        
            <Route exact path='/' component={Home} />
            <Route exact path='/photos' component={Photos} />
            <Route exact path='/dining' component={Dining} />
            <Route exact path='/fitness' component={Fitness} />
            <Route exact path='/wedding' component={Wedding} />
            <Route exact path='/meetings' component={Meeting} />
            <Route exact path='/map' component={Maps} />
            <Route exact path='/offer' component={Offers} />
            <Route exact path='/room' component={Room} />
            <Route exact path='/local-area' component={LocalArea} />

        </div>
    )
}
