 function postInfo() {
		
		console.time("TimerXHR");//в качестве эксперимента замерим время получения положительного ответа от внешнего источника
		
	var usr = document.getElementById("usr").value;//получим значения полей
	var passwd = document.getElementById("passwd").value;
	var msg = "usr=" + usr + "&passwd=" + passwd;//тело сообщения
	
	var protocol = "http://";
	var host = "ильяалександрович.рф";
	var resourcePath = "/zamt000webhostappcom/pr08post.php";
	var uri = protocol + host + resourcePath;
	
	var xhr = new XMLHttpRequest(); //создаём новый экземляр объекта
		
		//метод запроса, адрес URL ресурса, асинхроность/синхроность
		xhr.open("POST", uri, true);//aсинхроно
		
		xhr.onreadystatechange = function() {
			console.log("Ready state: " + xhr.readyState);
			
			if(xhr.readyState == 4 && xhr.status == 200) {
				document.getElementById("output").innerHTML = "<p>" + xhr.responseText + "<p>";
				
				console.timeEnd("TimerXHR");//замерили ожидание ответа от внешнего источника
			}
		}
		
		//при POST обязателен заголовок Content-Type, содержащий кодировку
		//это указание для сервера – как обрабатывать пришедший запрос.
		xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		
		//отпрака параметров через тело сообщения
		xhr.send(msg);//это же POST
		console.dir(xhr);
		
		
		
}
