import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { ExerciseOne } from './exercise-one'
import { MyExOne } from './my-ex-one';
import { MyExTwo } from './my-ex-two';
import { MyExThree } from './my-ex-three';
import { MyExFour } from './my-ex-four';
import { MyExFive } from './my-ex-five';
import { MyExSix } from './my-ex-six';
import { MyExSeven } from './my-ex-seven';
import { MyExEight } from './my-ex-eight';
import { MyExNine } from './my-ex-nine';



export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Link to="/exercise-one">Exercise one</Link>
      <Link to="/my-ex-one">My exercise one</Link>
      <Link to="/my-ex-two">My exercise two</Link>
      <Link to="/my-ex-three">My exercise three</Link>
      <Link to="/my-ex-four">My exercise four</Link>
      <Link to="/my-ex-five">My exercise five</Link>
      <Link to="/my-ex-six">My exercise six</Link>
      <Link to="/my-ex-seven">My exercise seven</Link>
      <Link to="/my-ex-eight">My exercise eight</Link>
      <Link to="/my-ex-nine">My exercise nine</Link>



      <Route path="/exercise-one">
        <ExerciseOne />
      </Route>
      <Route path="/my-ex-one">
         <MyExOne/>
      </Route>
      <Route path="/my-ex-two">
         <MyExTwo/>
      </Route>
      <Route path="/my-ex-three">
         <MyExThree/>
      </Route>
      <Route path="/my-ex-four">
         <MyExFour/>
      </Route>
      <Route path="/my-ex-five">
         <MyExFive/>
      </Route>
      <Route path="/my-ex-six">
         <MyExSix/>
      </Route>
      <Route path="/my-ex-seven">
         <MyExSeven/>
      </Route>
      <Route path="/my-ex-eight">
         <MyExEight percentage={45}/>
      </Route>
      <Route path="/my-ex-nine">
         <MyExNine />
      </Route>
    </BrowserRouter>
  )
}
