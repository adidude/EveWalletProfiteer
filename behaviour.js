function calculateProfit()
{
  var total = 0
  console.log("Initialized total to ",total);

    var lines = document.getElementById('walletPaste').value.split("\n")
    console.log("lines: ",lines);
    for (var i = 0; i < lines.length; i++)
    {
      console.log("loop no.: ", i);
      var words = lines[i].split("\t")
      console.log("words: ", words)
      var value = words[2].slice(0,-4)
      console.log("value: ", value);
      let toDel = new RegExp(",")

      //// TODO: Support larger numbers with multiple commas.
      var removedComma
      for (var j = 0; j < value.length; j++)
      {
        var firstcomma = false
        if (value.charAt(j) == "," && !firstcomma)
        {
          removedComma = value.replace(toDel,'')
          console.log("removedComma val: ",removedComma)
          firstcomma = true
          j = j+3
        }
        if (value.charAt(j) == "," && firstcomma)
        {
          removedComma = removedComma.replace(toDel,'')
          console.log("removedComma val: ",removedComma)
          j = j+3
        }
      }

      total = +total + +removedComma
      console.log("total: ", total);
    }
    var answer = "TOTAL: " + total
    document.getElementById('sum').innerHTML= answer
}
