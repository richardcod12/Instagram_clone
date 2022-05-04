import './Style.css'
import {FiMoreHorizontal} from 'react-icons/fi'
import {IoMdHeartEmpty} from 'react-icons/io'
import {BsChat, BsEmojiSmile} from 'react-icons/bs'
import {FiSend} from 'react-icons/fi'
import {BsBookmark} from 'react-icons/bs'
import { IconContext } from 'react-icons/lib'


export function Post(){
    return(
        <>
           <header className="header-post">

               <div className="infos-post">
               <img className="img-header-post" src="https://pbs.twimg.com/media/FDW_Lz9XEAMaUmH.jpg" />

                   <p>mbappe</p>
               </div>

               <FiMoreHorizontal />

           </header>

           <div className="img-post">
               <img src="https://www.lance.com.br/files/article_main/uploads/2021/10/08/616099d561f73.jpeg" />
           </div>

           <div className="footer-post">
               <IconContext.Provider value={{size:"30px"}}>

               <section className="engagement-post">
                   <div className="icons-1">
                       <div className="icon"><IoMdHeartEmpty /></div>
                       <div className="icon"><BsChat /></div>
                       <div className="icon"><FiSend /></div>                     

                   </div>

                   <div className="icon"><BsBookmark /></div>


                
               </section>

               </IconContext.Provider>

               <section className="like">
                   <span> 1.200.340 curtidas</span>
               </section>

               <div className="legend">
                    <p>
                        <span>mbappe</span> Depois dessa grande vitoria!, foto com os manos

                    </p>
                    </div>

                    <div className="time-post">
                        <time>Há 36min </time>

                    </div>

                    <div className="comment">

                        <div className="fake-comment">
                            <IconContext.Provider value={{size:'25px'}}>
                                <div className="icon">
                                    <BsEmojiSmile />
                                </div>
                              
                            </IconContext.Provider>

                            <input placeholder="Adicione um comentario.." />                                            
                        </div>

                        <button>Publicar</button>

                    </div>
           </div>

           <header className="header-post">

<div className="infos-post">
<img className="img-header-post" src="https://yt3.ggpht.com/ytc/AKedOLSGvtkTBgaXkmMgyvSy10FiiI2ld6B98OUgmoL6Aw=s900-c-k-c0x00ffffff-no-rj" />

    <p>netflix</p>
</div>

<FiMoreHorizontal />

</header>

<div className="img-post">
<img src="https://cdn.folhape.com.br/img/pc/1100/1/dn_arquivo/2020/07/the-witcher-1581973170947-v2-1920x1080-1.jpg" />
</div>

<div className="footer-post">
<IconContext.Provider value={{size:"30px"}}>

<section className="engagement-post">
    <div className="icons-1">
        <div className="icon"><IoMdHeartEmpty /></div>
        <div className="icon"><BsChat /></div>
        <div className="icon"><FiSend /></div>                     

    </div>

    <div className="icon"><BsBookmark /></div>


 
</section>

</IconContext.Provider>

<section className="like">
    <span> 438.123 curtidas</span>
</section>

<div className="legend">
     <p>
         <span>netflix</span> Já assistiram the witcher hoje ?

     </p>
     </div>

     <div className="time-post">
         <time>Há 1 Hora </time>

     </div>

     <div className="comment">

         <div className="fake-comment">
             <IconContext.Provider value={{size:'25px'}}>
                 <div className="icon">
                     <BsEmojiSmile />
                 </div>
               
             </IconContext.Provider>

             <input placeholder="Adicione um comentario.." />                                            
         </div>

         <button>Publicar</button>

     </div>
</div>

<header className="header-post">

<div className="infos-post">
<img className="img-header-post" src="https://static.globalnoticias.pt/jn/image.jpg?brand=JN&type=generate&guid=61104205-0ddd-4ef5-b9d3-293e679600a3&w=744&h=495&t=20210921103111" />

    <p>ronaldo</p>
</div>

<FiMoreHorizontal />

</header>

<div className="img-post">
<img src="https://conteudo.imguol.com.br/c/esporte/51/2021/12/02/cristiano-ronaldo-comemora-gol-800-na-carreira-em-jogo-do-united-1638481241820_v2_3x4.jpg" />
</div>

<div className="footer-post">
<IconContext.Provider value={{size:"30px"}}>

<section className="engagement-post">
    <div className="icons-1">
        <div className="icon"><IoMdHeartEmpty /></div>
        <div className="icon"><BsChat /></div>
        <div className="icon"><FiSend /></div>                     

    </div>

    <div className="icon"><BsBookmark /></div>


 
</section>

</IconContext.Provider>

<section className="like">
    <span> 5.290.374 curtidas</span>
</section>

<div className="legend">
     <p>
         <span>ronaldo</span> siiiii !!!

     </p>
     </div>

     <div className="time-post">
         <time>Há 2 Hora </time>

     </div>

     <div className="comment">

         <div className="fake-comment">
             <IconContext.Provider value={{size:'25px'}}>
                 <div className="icon">
                     <BsEmojiSmile />
                 </div>
               
             </IconContext.Provider>

             <input placeholder="Adicione um comentario.." />                                            
         </div>

         <button>Publicar</button>

     </div>
</div>

<header className="header-post">

<div className="infos-post">
<img className="img-header-post" src="https://i1.wp.com/surgiu.com.br/wp-content/uploads/2022/03/iran-luva-de-pedreiro-1.jpg?fit=400%2C400&ssl=1" />

    <p>luvadepedreiro</p>
</div>

<FiMoreHorizontal />

</header>

<div className="img-post">
<img src="https://seucreditodigital.com.br/wp-content/uploads/2022/04/imagem_2022-04-27_075603041.png" />
</div>

<div className="footer-post">
<IconContext.Provider value={{size:"30px"}}>

<section className="engagement-post">
    <div className="icons-1">
        <div className="icon"><IoMdHeartEmpty /></div>
        <div className="icon"><BsChat /></div>
        <div className="icon"><FiSend /></div>                     

    </div>

    <div className="icon"><BsBookmark /></div>


 
</section>

</IconContext.Provider>

<section className="like">
    <span> 1.134.234 curtidas</span>
</section>

<div className="legend">
     <p>
         <span>ronaldo</span> RECEBA !!

     </p>
     </div>

     <div className="time-post">
         <time>Há 2 Hora </time>

     </div>

     <div className="comment">

         <div className="fake-comment">
             <IconContext.Provider value={{size:'25px'}}>
                 <div className="icon">
                     <BsEmojiSmile />
                 </div>
               
             </IconContext.Provider>

             <input placeholder="Adicione um comentario.." />                                            
         </div>

         <button>Publicar</button>

     </div>
</div>



           
        </>

    )
}