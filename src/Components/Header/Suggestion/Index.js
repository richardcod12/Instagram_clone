import './Style.css'

export function Suggestion(){
    return(
        <div className="container-suggestion">
           <div className="header-suggestion">
                <img src={'https://avatars.githubusercontent.com/u/100446038?s=400&u=cdcdc1497f247f40de73a5c2b178f407c0fcb41d&v=4'} />

                <div className="user-infos-suggestion">

                    <div className="infos">
                        <spam>richardsilva_18</spam>
                        <p>richard chagas</p>

                    </div>

                    <button className="switch">Mudar</button>

                </div>
           </div>

           <div className="header-main-suggestion">

               <p>Sugestões para você</p>

               <spam>Ver tudo</spam>

           </div>

           <div className="user-suggestion">

               <div className="infos-suggestion">
                   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgJc66D3P6PhNTq7BaV-pBMjQuExdp2aMz_LmUs2c7JFX5j__G4UoTKSb6iWzhCQqJ5a8&usqp=CAU" />

                   <div className="info-suggestion">

                       <spam>corinthians</spam>
                       <p>Seguido por craque_neto </p>
                   </div>

                   <button className="follow">Seguir</button>
               </div>

               <div className="infos-suggestion">
                   <img src="https://i0.statig.com.br/bancodeimagens/imgalta/7q/66/96/7q6696yqi3hh8y82b0ggpxkbc.jpg" />

                   <div className="info-suggestion">

                       <spam>gabigol</spam>
                       <p>Seguido por flamengo </p>
                   </div>

                   <button className="follow">Seguir</button>
               </div>

               <div className="infos-suggestion">
                   <img src="https://s.yimg.com/ny/api/res/1.2/t9gsB_2leUXGolLZM7QBDQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://s.yimg.com/os/creatr-uploaded-images/2021-12/09b7c000-64b8-11ec-bf7e-a277896b3e9f" />

                   <div className="info-suggestion">

                       <spam>hamilton</spam>
                       <p>Seguido por formula1 </p>
                   </div>

                   <button className="follow">Seguir</button>
               </div>

               <div className="infos-suggestion">
                   <img src="https://canalnapista.com/wp-content/uploads/2021/06/Logo-F1-696x435.jpg" />

                   <div className="info-suggestion">

                       <spam>formula1</spam>
                       <p>Seguido por hamilton </p>
                   </div>

                   <button className="follow">Seguir</button>
               </div>

               <div className="infos-suggestion">
                   <img src="https://upload.wikimedia.org/wikipedia/pt/9/9e/Logotipo_da_TV_Globo.png" />

                   <div className="info-suggestion">

                       <spam>globo</spam>
                       <p>Seguido por lucianohulk </p>
                   </div>

                   <button className="follow">Seguir</button>
               </div>

           </div>

           <footer className="footer-suggestion">
           <p>Sobre &bull; Ajuda &bull; Imprensa &bull; API &bull; Carreiras &bull; Privacidade &bull; Termos &bull; Localizações &bull; Principais contas &bull; Hashtags &bull; idioma</p>

           <p>&copy; 2021 INSTAGRAM FROM META</p>

           </footer>
        </div>
    )
}