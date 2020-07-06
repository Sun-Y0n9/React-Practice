import jsonp from 'jsonp';
export const JsonP = (options) => {
	return new Promise((reslove, reject) => {
		jsonp(options.url, {
			param: 'callback'
		}, (err, res) => {
			if (res.status === 'success') {
				reslove(res);
			} else {
				reject(err);
			}
		})
	});
}