document.addEventListener("DOMContentLoaded",
    function(e){
        
        let keydown = document.querySelector("#keydown")
        keydown.addEventListener("keydown",
            function(e){
                console.log(e.target.value)
                // keydown 화면에 입력되는 타이밍이 한박자 늦다 ex) 키입력에 맞춰진 효과음
            }
        )

        
        let change = document.querySelector("#change")
        change.addEventListener("change",
            function(e){
                console.log(e.target.value)
                // change 값 입력 후 요소 클릭, enter 키 입력 등
                // 입력 필드가 자신의 역할을 마친 후 값 변경
            }
        )

        let input = document.querySelector("#input")
        input.addEventListener("input", 
            function(e){
                console.log(e.target.value)
                // input 값이 변한 후 실시간으로 값을 받아옴
                // 텍스트를 입력받을 때는 input 이벤트를 활용
            }
        )
    }
)