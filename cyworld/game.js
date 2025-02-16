function start(){
    let my_word=document.getElementById("my_word").value
    let word=document.getElementById("word").innerText

    let last_word=word[word.length-1]
    let first_word=my_word[0]

    if(last_word===first_word){
        document.getElementById("result").innerText="정답입니다!"
        document.getElementById("word").innerText=my_word
        document.getElementById("my_word").value=""
    }else{
        document.getElementById("result").innerText="땡!"
        document.getElementById("my_word").value=""

    }
}