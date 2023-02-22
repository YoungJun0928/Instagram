document.addEventListener("DOMContentLoaded",
    function(e){
        let button = document.querySelector("input")
        /*let HTMLb = document.querySelector("input")*/
        let p = document.querySelector("p")


        button.addEventListener("click",
            function(e){
                p.textContent = "JS로 입력함"
                //버튼 클릭시 html에서 표현된 p값이 화면에 표시됨
            }
        )
        /*HTMLb.addEventListener("click",
            function(e){
                p.textContent = "HTML로 입력함"
            }
        )*/
    }
)