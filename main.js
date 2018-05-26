  var mas=[[11,22],[44,55]];
  function Trans(mas) {
  var newmas = [];
  for (var i = 0; i < mas[0].length; i++){ 
   newmas[i] = [];
   for (var j = 0; j < mas.length; j++) newmas[i][j] = mas[j][i];
   }
  console.log(newmas);
}
  
 Trans(mas);
