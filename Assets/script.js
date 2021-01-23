//Time Display*

var currentDay = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
$("#currentDay").html(currentDay);

//Document Ready Function
//In the function taking the textarea input and saving it to local 

$(document).ready(function(){

 $("#hour9 .description").val(localStorage.getItem("hour9"));
 $("#hour10 .description").val(localStorage.getItem("hour10"));
 $("#hour11 .description").val(localStorage.getItem("hour11"));
 $("#hour12 .description").val(localStorage.getItem("hour12"));
 $("#hour13 .description").val(localStorage.getItem("hour13"));
 $("#hour14 .description").val(localStorage.getItem("hour14"));
 $("#hour15 .description").val(localStorage.getItem("hour15"));
 $("#hour16 .description").val(localStorage.getItem("hour16"));
 $("#hour17 .description").val(localStorage.getItem("hour17"));

 //Save Button onClick event*

    $(".saveBtn").on("click", function(){
        var input = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, input);
    })

    //Changing Color Depending on time: past/future/present*

    function addColor(){
        var now = moment().hour();
        $(".time-block").each(function (){
            var time = parseInt($(this).attr("id").split("hour")[1]);
            if (time < now) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            } else if (time === now){
                $(this).removeClass("past");
                $(this).removeclass("future");
                $(this).addClass("present");
            } else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }
    addColor()
});
  
  