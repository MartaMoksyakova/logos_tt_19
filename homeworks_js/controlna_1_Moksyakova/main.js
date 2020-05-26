let firstElement = (sel) => document.querySelector(sel);
let arrayElement = (sel) => document.querySelectorAll(sel);

//buttons//
let edit = firstElement(".edit");
let style = firstElement(".style");
let add = firstElement(".add");
let save = firstElement(".save");

edit.addEventListener("click", function (){
	firstElement(".textarea_block").style.display = "block";
	firstElement(".style_block").style.display = "none";
})
save.addEventListener("click", function (){
	firstElement(".main_text").innerHTML = `${firstElement("textarea").value}`;
	firstElement(".textarea_block").style.display = "none";
})
style.addEventListener("click", function (){
    firstElement(".style_block").style.display = "flex";
	firstElement(".textarea_block").style.display = "none";
	
})
//font size, font family//

for (let key of arrayElement("input[type='radio']")){
	key.addEventListener("click", function (){
		firstElement(".main_text").style.fontSize = `${key.value}`;
	})
}
firstElement("select").addEventListener("click", function (){
	firstElement(".main_text").style.fontFamily = `${firstElement("select").value}`;
})
//change color//
let colorOfText = firstElement(".color_of_text");
let backgroundColor = firstElement(".background_color");

let colors = ["red", "blue", "green", "gray", "yellow", "pink", "orange", "purple", "aqua"];
for (i = 0; i < colors.length; i++){
	arrayElement(".color_text_block")[i].setAttribute('name', colors[i]);
	arrayElement(".color_text_block")[i].style.backgroundColor = `${colors[i]}`;
	arrayElement(".backgroundColor_block")[i].setAttribute('name', colors[i]);
	arrayElement(".backgroundColor_block")[i].style.backgroundColor = `${colors[i]}`;
}
colorOfText.addEventListener("click", function () {
	firstElement(".colors_of_text").style.display = "block";
	firstElement(".colors_background").style.display = "none";
	for (let key of arrayElement(".color_text_block")) {
		key.addEventListener("click", function () {
			firstElement(".main_text").style.color = `${key.getAttribute('name')}`;
			firstElement(".colors_of_text").style.display = "none";
		})
	}
})

backgroundColor.addEventListener("click", function (){
	firstElement(".colors_background").style.display = "block";
	firstElement(".colors_of_text").style.display = "none";
	for (let key of arrayElement(".backgroundColor_block")) {
		key.addEventListener("click", function () {
			firstElement(".main_text").style.backgroundColor = `${key.getAttribute('name')}`;
			firstElement(".colors_background").style.display = "none";
		})
	}
})
//bold, italic//
firstElement("input[name='bold']").addEventListener("click", function (){
	if (firstElement("input[name='bold']").checked) {
		firstElement(".main_text").style.fontWeight = `${firstElement("input[name='bold']").value}`;
	} else {
		firstElement(".main_text").style.fontWeight = ``;
	}
})
firstElement("input[name='italic']").addEventListener("click", function () {
	if (firstElement("input[name='italic']").checked) {
		firstElement(".main_text").style.fontStyle = `${firstElement("input[name='italic']").value}`;
	} else {
		firstElement(".main_text").style.fontStyle = ``;
	}
})


add.addEventListener("click", function () {
	firstElement(".choose_content").style.display = "block";
	firstElement(".main_info").style.display = "none";
})
firstElement("input[value='table']").addEventListener("click", function () {
	firstElement(".table").style.display = "block";
	firstElement(".list").style.display = "none";
})
firstElement("input[value='list']").addEventListener("click", function () {
	firstElement(".table").style.display = "none";
	firstElement(".list").style.display = "block";
})

//Create table
firstElement("button[name='table']").addEventListener("click", function () {

	let countTr = firstElement("input[placeholder='Count TR:']").value;
	let countTd = firstElement("input[placeholder='Count TD:']").value;
	let widthTableDataCell = firstElement("input[placeholder='Width of TD:']").value;
	let heightTableDataCell = firstElement("input[placeholder='Height of TD:']").value;
	let widthBorderTableDataCell = firstElement("input[name='border_width']").value;
	let typeBorderTableDataCell = firstElement("select[name='border_type']").value;
	let colorBorderTableDataCell = firstElement("select[name='border_color']").value;

	let div = document.createElement("div");
	let tagTable = document.createElement("table");
//Створення ячейок//
	function getTableData() {
		let fragmentData = new DocumentFragment();
			for(let i=1; i<=`${countTd}`; i++) {
				let tagTd = document.createElement('td');
				tagTd.append("TD");
				tagTd.setAttribute("style", `width: ${widthTableDataCell}px; height: ${heightTableDataCell}px; border: ${widthBorderTableDataCell}px ${typeBorderTableDataCell} ${colorBorderTableDataCell}`);
				fragmentData.append(tagTd);
			}
		return fragmentData;
	}

// створення рядків//
	function getTableRow() {
		let fragmentRow = new DocumentFragment();
			for(let i=1; i<=`${countTr}`; i++) {
				let tagTr = document.createElement('tr');
				tagTr.append(getTableData());
				fragmentRow.append(tagTr);
			}
		return fragmentRow;
	}

	tagTable.append(getTableRow());
	div.appendChild(tagTable);
	firstElement(".text_area").innerHTML += `${div.innerHTML}`;


	firstElement(".table").style.display = "none";
	firstElement(".list").style.display = "none";
	firstElement(".main_info").style.display = "block";
	firstElement(".choose_content").style.display = "none";
})

firstElement("button[name='list']").addEventListener("click", function () {

	let div = document.createElement("div");
	let countLi = firstElement("input[placeholder='Count Li:']").value;
	let typeOfMarks = firstElement("select[name='type_of_marks']").value;

	let ul = document.createElement("ul")
	ul.setAttribute("type", `${typeOfMarks}`)

//створення пунктів//
	function getList() {
		let fragment = new DocumentFragment();
		for(let i=1; i<=`${countLi}`; i++) {
			let li = document.createElement('li');
			li.append("item" + i);
			fragment.append(li);
		}
		return fragment;
	}

	ul.append(getList());
	div.appendChild(ul);
	firstElement(".text_area").innerHTML += `${div.innerHTML}`;
	firstElement(".table").style.display = "none";
	firstElement(".list").style.display = "none";
	firstElement(".main_info").style.display = "block";
	firstElement(".choose_content").style.display = "none";
})