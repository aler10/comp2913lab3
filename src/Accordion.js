/* -It is important to note that the following code is not completely
  in accordance to the lab however it demonstrates the use of containers 
  in another form that is fully consistent with the concepts outlined
  in the lesson
   -Custom css was implemented in app.css
*/

import { useState } from "react";
import User2 from "./User2";
import User3 from "./User3";
import User4 from "./User4";
import User5 from "./User5";

export default function Accordion() {
  const [shownIndex, setShownIndex] = useState(0);
  return (
    <div>
      <Container 
      onShow={() => setShownIndex(0)} 
      isShown={shownIndex === 0} 
      title="Abbey Road"><User2 />Abbey Road
      </Container>

      <Container 
       onShow={() => setShownIndex(1)}
       isShown={shownIndex === 1} 
       title="With the Beatles"><User3 />With the Beatles
       </Container>

       <Container 
       onShow={() => setShownIndex(2)}
       isShown={shownIndex === 2}
       title="Let it be"><User4 /> Let it be
       </Container>

       <Container
       onShow={() => setShownIndex(3)}
       isShown={shownIndex === 3}
       title="Sgt. Peppers Lonely Hearts Club Band"><User5 />Sgt. Peppers Lonely Hearts Club Band
       </Container>
    </div>
  );
}


export function Container({title, children, onShow, isShown}) {
  return (
    <div>
    <h3>{title}</h3>
    { isShown ? <p>{children}</p> 
    : 
    <button onClick={onShow}>Show me this album!</button>}
    </div>
  )
}