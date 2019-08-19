module.exports.isAuthorized  = function(req, res, next) {
	if(false)
	{
		return next();
	}
	else
	{
		var err = new Error('Not authorized! Go back!');
		err.status = 400;
		return next(err);
	}
	/*User.findById(req.session.userId).exec(function (error, user) {
		if (error) {
			return next(error);
		} else {      
			if (user === null) {     
				var err = new Error('Not authorized! Go back!');
				err.status = 400;
				return next(err);
			} else {
				return next();
			}
		}
	});*/
}