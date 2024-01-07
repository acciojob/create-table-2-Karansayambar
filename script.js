const table = document.getElementById("myTable");

function createTable() {
	let row = prompt("enter row");
	let column = prompt("enter column");
	createRow(row);
	createColumn(column);
}

function createRow(row){
	for (let i = 0; i < row; i++) {
		const tr = document.createElement("tr");
		table.appendChild(tr);
	}
}
function createColumn(column){
	const rows = document.getElementsByTagName("tr");
	for (let i = 0; i < rows.length; i++) {
		for (let j = 0; j < column; j++) {
			const td = document.createElement("td");
			td.innerText=`Row-${i} Column-${j}`;
			rows[i].appendChild(td);
		}
	}
}
