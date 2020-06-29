export const formateDate = (date) => {
	if (!date) return '';
	let strDate = date.getFullYear() + '-';
	strDate += (date.getMonth() + 1 < 10 ? ('0' + (date.getMonth() + 1)) : date.getMonth() + 1) + '-';
	strDate += (date.getDate() < 10 ? ('0' + date.getDate()) : date.getDate()) + ' ';
	strDate += (date.getHours() < 10 ? ('0' + date.getHours()) : date.getHours()) + ':';
	strDate += (date.getMinutes() < 10 ? ('0' + date.getMinutes()) : date.getMinutes()) + ':';
	strDate += (date.getSeconds() < 10 ? ('0' + date.getSeconds()) : date.getSeconds());
	return strDate;
}