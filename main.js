
function getmenu(){
    var pizza_list =["Veggie Pizza","Cheese Pizza","Pepperoni Pizza", "Meat Pizza", "Hawaiian Pizza"];

    pizza_list.sort();
    var pizza_list_arrey = "";
    for(i=0;i<pizza_list.length;i++){
    console.log(pizza_list[i]);
    pizza_list_arrey=pizza_list_arrey+pizza_list[i]+"<br>";}
    document.getElementById("display_menu").innerHTML= pizza_list_arrey;
    } 

    

    var New_pizza_list =["Veggie Pizza","Cheese Pizza","Pepperoni Pizza", "Meat Pizza", "Hawaiian Pizza"];   
    function gettopping(){
         
        
        var testvar = New_pizza_list.push;
        testvar.call(New_pizza_list,document.getElementById("textbox").value);

        var pizza_arrey = "";
        for(i=0;i<New_pizza_list.length;i++){
        console.log(New_pizza_list[i]);
        pizza_arrey=pizza_arrey+New_pizza_list[i]+"<br>";}
        document.getElementById("display_addedmenu").innerHTML= pizza_arrey;
        New_pizza_list
        } 

        