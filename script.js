function goRight() {
            document.querySelector(".carousel-container").scrollLeft += 640;
        }
        function goLeft() {
            document.querySelector(".carousel-container").scrollLeft -= 640;
        }

        
        var btn = document.getElementsByClassName("btn");
            var slide = document.getElementById("slide")


            /*btn[0].onclick = function goRight() {
                document.querySelector(".carousel-container").scrollLeft -= 640;
                for (i = 0; i < 0; i++) {
                    btn[i].classList.remove("active");
                }
                this.classList.add("active");
            }
            btn[1].onclick = function goLeft() {
                document.querySelector(".carousel-container").scrollLeft = 640;
                for (i = 0; i < 1; i++) {
                    btn[i].classList.remove("active");
                }
                this.classList.add("active");
            }
            btn[1].onclick = function goRight() {
                document.querySelector(".carousel-container").scrollLeft = 640;
                for (i = 0; i < 1; i++) {
                    btn[i].classList.remove("active");
                }
                this.classList.add("active");
            }
            btn[2].onclick = function goLeft() {
                document.querySelector(".carousel-container").scrollLeft = 640;
                for (i = 0; i < 2; i++) {
                    btn[i].classList.remove("active");
                }
                this.classList.add("active");
            }
            btn[2].onclick = function goRight() {
                document.querySelector(".carousel-container").scrollLeft += 640;
                for (i = 0; i < 2; i++) {
                    btn[i].classList.remove("active");
                }
                this.classList.add("active");
            }
            btn[3].onclick = function goLeft() {
                document.querySelector(".carousel-container").scrollLeft += 640;
                for (i = 0; i < 4; i++) {
                    btn[i].classList.remove("active");
                }
                this.classList.add("active");
            }*/


                let blink = document.getElementById('blink');
                setInterval(function () {
                    blink.style.opacity = (blink.style.opacity == 0 ? 1 : 0);
                }, 900);

                // function doBlink() {
                //     // Blink, Blink, Blink...
                //     var blink = document.all.tags("blink")
                //     for (var i=0; i < blink.length; i++)
                //       blink[i].style.visibility = blink[i].style.visibility == "" ? "hidden" : "" 
                //   }
                  
                //   function startBlink() {
                  
                //     if (document.all)
                //       setInterval("doBlink()",500)
                //   }
                //   window.onload = startBlink;