
function getInfo() {
	
	var xhr = new XMLHttpRequest(); //создаём новый экземляр объекта
	
	var out = document.getElementById("output");
	
	var cmd = "ping";
	var query = "?cmd=" + cmd;//параметры через строку запроса
	var protocol = "http://";
	var host = "ильяалександрович.рф";
	var resourcePath = "/zamt000webhostappcom/pr08get.php";
	var uri = protocol + host + resourcePath + query;

	console.log(uri);
	
	//метод запроса, адрес URL ресурса, асинхроность/синхроность
	xhr.open("GET", uri, false);//синхроно

	//отправка тела сообщения - в данном случаии оно пустое
	xhr.send();
	console.dir(xhr);
	
	//выведем код состояния ответа и краткое его описания
	out.innerHTML = "<b>Status:</b> " + xhr.status + "<br><b>Status text:</b> " + xhr.statusText;
	
	// добавим к выводу полученый ответ
	out.innerHTML += "<p>" + xhr.responseText + "<p>";
	
}

