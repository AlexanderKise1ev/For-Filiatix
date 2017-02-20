function createSelectList(array_of_textfields, id_of_create_selectList){
	var insertOption = document.getElementById(id_of_create_selectList);
	for(let i=0; i < array_of_textfields.length; i++){
		let newOption = document.createElement('option');
		newOption.setAttribute("value", [i+1]);
		newOption.appendChild(document.createTextNode(array_of_textfields[i]));
		insertOption.appendChild(newOption)
	}
}