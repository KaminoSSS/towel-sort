
// You should implement your task here.

module.exports =  function towelSort (matrix) {
	let resultArr = [];
	let flatArr = [];
	if (matrix === undefined){
		return resultArr
	}
  	for (let i = 0; i < matrix.length; i++){
		if ((i + 1) % 2 == 0){
			resultArr.push(matrix[i].reverse())
		} else {
			resultArr.push(matrix[i])
		}
  }

  resultArr.forEach(arrElement => {
	arrElement.forEach(element => {
		flatArr.push(element)
	});
  });
  return flatArr
}
