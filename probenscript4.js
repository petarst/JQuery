/**
 * Created by Dalakovi on 04-Mar-16.
 */
var movies = ["Conan", "Star wars", "Speed", "Terminator"];
var txt ="";

function defaultMovies() {
    movies.forEach(function(entry){
        txt += "<li>" + entry + "</li>";
    });
    $("#demo").html(txt);
}
//$(function() {
  //  $( "#resizable" ).resizable({
  //      containment: "#container"
 //   });
  //  $( "#draggable" ).draggable({containment: "#container"});
//});

function fullSort(a, b) {

        var A=a.toLowerCase();
        var B=b.toLowerCase();

        if (A < B){
        return -1;
     }
     else if (A > B){
       return  1;
     }
     else{
       return 0;
     }
}
function addMovie(){

	var insMovie="";
	insMovie=$("#resizable").val();
  
        if (insMovie===""){
            alert ("Your text is empty");
        }

        else if(movies.indexOf(insMovie)!==-1 ){
            alert("This text has already");
        }
                
       // else 
        	
         //   movies.push(insMovie);

           // movies.sort(fullSort);

            //$("#demo").html(movies);

            $("#resizable").click(function() {
        
       // movies.push($("#demo").val());
      });
        $("#demo").html(movies);        
        }
  


