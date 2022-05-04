import './Style.css'

import { Story } from '../Story/Index'
import { Post } from '../post/Index'
import { Suggestion } from '../Suggestion/Index'

export function Layout(){
    return(
        <>

        <div className="maingrid">

        <div className="first-column" style={{gridArea:"firstColumn"}}>
        <div className="box">
             <Story />
         </div>

         <div className="box" style={{margin:"30px 0"}}>
             <Post />
         </div>


        </div>    
       
         <div style={{gridArea:"secondColumn"}}>
             <div className="suggestionbox">
                  <Suggestion />
             </div>
         
         </div>

        </div>
         

        </>
    )

}