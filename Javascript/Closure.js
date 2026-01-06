function x(){
    let a = 5;
    function y(){
        let b=7;
        console.log(a);
        function z(){
            console.log(b);
            
        }
        z();
    }
    y();
}
x();