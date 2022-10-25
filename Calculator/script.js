let string = "";
let buttons = document.querySelectorAll(".button");
buttons.forEach((button)=>{
    button.addEventListener("click", (e)=>{
        if(e.target.innerHTML == "="){
            let ok = true;
            let len = string.length;
            for(let i = 1; i < len; i++){
                if((string[i] < '0' || string[i] > '9') && (string[i-1] < '0' || string[i-1] > '9')){
                    ok = false;
                    string = "";
                }
            }
            let count_of_decimal = 0;
            for(let i = 0; i < len; i++){
                if((string[i] < '0' || string[i] > '9') && string[i] != '.'){
                    count_of_decimal = 0;
                    continue;
                }
                if(string[i] == '.') ++count_of_decimal;
            }
            if(count_of_decimal > 1) ok = false;
            if(ok) string = eval(string).toString();
            document.getElementById("input").value = string;
            // console.log(typeof(string));
        } else if(e.target.innerHTML == "AC"){
            string = "";
            document.getElementById("input").value = string;
        }else{
            // console.log(e.target);
            string  = string + e.target.innerHTML;
            // console.log(string);
            document.getElementById("input").value = string;
        }
    })
})
document.getElementById("delete").addEventListener("click", ()=>{
    string = string.substring(0, string.length - 1);
    document.getElementById("input").value = string;
    // console.log(string);
});