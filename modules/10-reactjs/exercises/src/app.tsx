import React from 'react'
import { BrowserRouter, Link, Route } from 'react-router-dom'
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
import { MyExTen } from './my-ex-ten';
import { ExerciseTwo } from './exercise-two';
import { ExerciseThree } from './exercise-three';
import { ExerciseFour } from './exercise-four';
import { ExerciseFive } from './exercise-five';
import { ExerciseSix } from './exercise-six';
import { ExerciseSeven } from './exercise-seven';
import { ExerciseEight } from './exercise-eight';



export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Link to="/my-ex-one">My exercise one</Link>
      <Link to="/my-ex-two">My exercise two</Link>
      <Link to="/my-ex-three">My exercise three</Link>
      <Link to="/my-ex-four">My exercise four</Link>
      <Link to="/my-ex-five">My exercise five</Link>
      <Link to="/my-ex-six">My exercise six</Link>
      <Link to="/my-ex-seven">My exercise seven</Link>
      <Link to="/my-ex-eight">My exercise eight</Link>
      <Link to="/my-ex-nine">My exercise nine</Link>
      <Link to="/my-ex-ten">My exercise ten</Link>

      <Link to="/exercise-one">Exercise one</Link>
      <Link to="/exercise-two">Exercise two</Link>
      <Link to="/exercise-three">Exercise three</Link>
      <Link to="/exercise-four">Exercise four</Link>
      <Link to="/exercise-five">Exercise five</Link>
      <Link to="/exercise-six">Exercise six</Link>
      <Link to="/exercise-seven">Exercise seven</Link>
      <Link to="/exercise-eight">Exercise eight</Link>

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
         <Route path="/my-ex-ten">
         <MyExTen />
         </Route>
      <Route path="/exercise-two">
        <ExerciseTwo />
      </Route>
      <Route path="/exercise-three">
        <ExerciseThree />
      </Route>
      <Route path="/exercise-four">
        <ExerciseFour />
      </Route>
      <Route path="/exercise-five">
        <ExerciseFive />
      </Route>
      <Route path="/exercise-six">
        <ExerciseSix />
      </Route>
      <Route path="/exercise-seven">
        <ExerciseSeven />
      </Route>
      <Route path="/exercise-eight">
        <ExerciseEight percentage={70} />
        </Route>

  

    </BrowserRouter>

  )
}
