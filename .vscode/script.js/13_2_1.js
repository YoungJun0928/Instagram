document.addEventListener("DOMContentLoaded",
    function(e){
        let input = this.documentElement.querySelector("input")
        input.addEventListener("click", 
            function(e){
                console.log(e.target.getAttribute("type"))
                //getAttribute()를 사용하여 'type' 속성을 확인해냄 = button이 출력됨
            }
        )
    }
)