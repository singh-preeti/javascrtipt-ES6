function sample()
{
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value
    //alert("welcome" +a)
    var c = parseInt(a)
    var d = parseInt(b)

    var e = c+d;
    document.getElementById("p1").innerHTML = "Welcome to this page"  +e;
}