// <!-- js for togglemenu -->
    var menuitems = document.getElementById("menuitems");
    menuitems.style.maxHeight = "0px";
    function menutoggle() {
        if (menuitems.style.maxHeight == "0px") {
            menuitems.style.maxHeight == "200px"
        }
        else {
            menuitems.style.maxHeight == "0px"
        }
    }

    // <!-- js for account -->
        var loginform = document.getElementById("loginform");
        var regform = document.getElementById("regform");
        var indicator = document.getElementById("indicator");
        function Register() {
            regform.style.transform = "translateX(0px)";
            loginform.style.transform = "translateX(0px)";
            indicator.style.transform = "translateX(100px)";


        }
        function Login() {
            regform.style.transform = "translateX(300px)";
            loginform.style.transform = "translateX(300px)";
            indicator.style.transform = "translateX(0px)";

        }

        // <!-- js for gallery -->
            var productimg = document.getElementById("productimg")
            var smallimg = document.getElementsByClassName("smallimg")
            // console.log(smallimg)
            smallimg[0].onclick = function () {
                productimg.src = smallimg[0].src;
            }
            smallimg[1].onclick = function () {
                productimg.src = smallimg[1].src;
            }
            smallimg[2].onclick = function () {
                productimg.src = smallimg[2].src;
            }
            smallimg[3].onclick = function () {
                productimg.src = smallimg[3].src;
            }   

            

            // cart
            var qunetityTag=document.getElementsByClassNam("qte")
            var uniteprice=document.querySelectorAll(".PrixUn")
            console.log(qunetityTag)
            console.log(document)
            console.log(uniteprice)
