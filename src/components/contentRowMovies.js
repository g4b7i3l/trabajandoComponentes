import React from 'react';
import PropTypes from 'prop-types';
function ContentRowMovies(props){
    return(
		
			<div className="row" >
				{props.categorias.map((categorias, i) => 
			<div className="col-md-4 mb-4" key={categorias + i}>
			  <div className={`card ${categorias.colorBorde} shadow h-100 py-2`}>
				  <div className="card-body">
					  <div className="row no-gutters align-items-center">
						  <div className="col mr-2">
							  <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">{categorias.titulo}</div>
							  <div className="h5 mb-0 font-weight-bold text-gray-800">{categorias.cifra}</div>
						  </div>
						  <div className="col-auto">
							  <i className={`fas ${categorias.icono} fa-2x text-gray-300`}></i>
						  </div>
					  </div>
				  </div>
			  </div>
		  </div>)
		  }

	  </div>
		
       
       
    )
	ContentRowMovies.propTypes ={
		titulo: PropTypes.string,
		colorBorde: PropTypes.string,
		cifra:PropTypes.number,
		icono:PropTypes.oneOf(['border-left-primary',' border-left-success', 'border-left-warning']),
	}
}
ContentRowMovies.defaultProps={
	titulo: "No hay titulo",
		colorBorde: null,
		cifra:0,
		icono:null,
}
export default ContentRowMovies;