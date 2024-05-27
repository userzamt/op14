"use strict";
/* Используем строгий стиль написания скрипта. В соответсвии новому стандарту. */

/* Вывод на консоль дочерних элементов BODY */
function exampleChildNodes() {
	var child;
	console.clear();
	
	for(var i=0; i<document.body.childNodes.length; ++i) {
		child = document.body.childNodes[i];
		
		console.log(child);
	}
}

/* Получение первого и последнего элемента HEAD */
function exampleFirstLastChild() {
	var head = document.head;
	var last = head.lastChild;//лучше привести заголовок в нормализованный вид
	var first = head.firstChild;
	
	console.clear();
	console.log(first);
	console.log(last);
}

/* Узнаём родительский элемент и родителя родительского элемента */
function exampleParentNode() {
	var parent = document.body.parentNode;//мама BODY
	var parentParent = parent.parentNode;//бабушка BODY
	
	console.clear();
	console.log(parent);
	console.log(parentParent);
}

/* Выясняем кто соседи */
function exampleSibling1() {
	var body = document.body.childNodes;//список дочерних элементов BODY
	var main = body[1];//должны получить MAIN
	
	console.clear();
	console.log(main);
	console.log("Сосед справа \n %O",main.nextSibling);
	console.log("Сосед слева \n %O",main.previousSibling);
}
//на этот раз должны получить что то осмысленное
function exampleSibling2() {
	var body = document.body.childNodes;//список дочерних элементов BODY
	var main = body[1];//должны получить MAIN
	
	console.clear();
	console.log("main \n %O \nmain.childNodes[2] \n %O", main, main.childNodes[2]);
	console.log("Сосед справа \n %O",main.childNodes[2].nextSibling);
	console.log("Сосед слева \n %O",main.childNodes[2].previousSibling);
}

/* Получение списка ссылок только на узлы образованые тэгами; без текстовых узлов  */
function exampleChildren(elem) {
	var childs = elem.children;//список всех дочерних элементов без висячих текстовых
	
	console.clear();
	
	for(var i=0; i < childs.length; ++i) {
		console.log("Type - %d \t Name - %s \t Value - %s", childs[i].nodeType, childs[i].nodeName, childs[i].nodeValue);		
	}
}