
/*
 * GET home page.
 */

//exports.index = function(req, res){
//  res.render('index', { title: 'Express' });
//};

var brand = 'University of San Agustin';
var mainpages =   [{name:'Home', id:'home'},
									{name:'About Us', id:'about'},
									{name:'Academics', id:'academics'},
									{name:'Admissions', id:'admissions'},
									{name:'Administration', id:'administration'},
									{name:'Students', id:'students'},
									{name:'Alumni', id:'alumni'},
									{name:'Publication', id:'publication'}];

exports.index = function(req, res){
    res.redirect('/home');
}

exports.home = function(req, res){
    res.render('home', { title: 'Home', id: 'home', brand: brand, nvlist: mainpages })
};
exports.about = function(req, res){
    res.render('about', { title: 'About', id: 'about', brand: brand, nvlist: mainpages  })
};
exports.academics = function(req, res){
	res.render('about', { title: 'Academics', id: 'academics', brand: brand, nvlist: mainpages  })
};
exports.admissions = function(req, res){
	res.render('about', { title: 'Admissions', id: 'admissions', brand: brand, nvlist: mainpages  })
};
exports.adminpage = function(req, res){
	res.render('about', { title: 'Administration', id: 'administration', brand: brand, nvlist: mainpages  })
};
exports.students = function(req, res){
	res.render('about', { title: 'Students', id: 'students', brand: brand, nvlist: mainpages  })
};
exports.alumni = function(req, res){
	res.render('about', { title: 'Alumni', id: 'alumni', brand: brand, nvlist: mainpages  })
};
exports.publication = function(req, res){
	res.render('about', { title: 'Publication', id: 'publication', brand: brand, nvlist: mainpages  })
};
exports.admin = function(req, res){
	res.render('about', { title: 'About', id: 'about', brand: brand, nvlist: mainpages  })
};
