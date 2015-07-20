// GET /quizes/question
exports.question = function(req, res) {
	res.render('quizes/question', {pregunta: '¿Capital de Italia?'}) ;
};

// GET /quizes/answer
exports.answer = function(req, res) {
	var rpt = req.query.respuesta ;
	var clf = '' ;

	if ( rpt.toLowerCase() === 'roma' ) {
		clf = 'Correcto' ;
	}
	else {
		clf = 'Incorrecto' ;
	}

	res.render('quizes/answer', {respuesta: clf}) ;
};