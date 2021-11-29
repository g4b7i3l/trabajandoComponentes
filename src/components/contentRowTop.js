import React from "react";
import ContentRowMovies from "./contentRowMovies";
import GenresInDb from "./genresInDb";
import LastMovieInDb from "./lastMovieInDb";


    let secciones =[{titulo:"Movies in Data Base", cifra: 21, colorBorde: "border-left-primary",icono: "fa-film"},{titulo:"Total awards", cifra: 79, colorBorde: "border-left-success",icono: "fa-award"},{titulo:"Actors quantity", cifra: 49, colorBorde: "border-left-warning",icono: "fa-user"}]
function ContentRowTop(){
    return (
    <section>
         <ContentRowMovies
         categorias = {secciones}/> 
         <div className="row">
             <LastMovieInDb/>
             <GenresInDb/>
             </div>
</section>
       
    )
}

export default ContentRowTop;