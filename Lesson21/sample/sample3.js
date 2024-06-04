 function postInfo() {

	var usr = document.getElementById("usr").value;//получим значения полей
	var passwd = document.getElementById("passwd").value;
	var msg = "usr=" + usr + "&passwd=" + passwd;//тело сообщения
	
	var protocol = "https://";
	var host = "zamt19.000webhostapp.com";
	var resourcePath = "/pr08post.php";
	var uri = protocol + host + resourcePath;
	
	var xhr = new XMLHttpRequest(); //создаём новый экземляр объекта
	
	console.log("Адрес ресурса\n" + uri);
	console.log("Тело сообщения\n" + msg);
	
	//метод запроса, адрес URL ресурса, асинхроность/синхроность
	xhr.open("POST", uri, true);//
	
	//при POST обязателен заголовок Content-Type, содержащий кодировку
	//это указание для сервера – как обрабатывать пришедший запрос.
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	
	//отправка параметров через тело сообщения
	xhr.send(msg);//это же POST
	console.dir(xhr);
	
	document.getElementById("output").innerHTML = "<p>" + xhr.responseText + "<p>";
	
}
