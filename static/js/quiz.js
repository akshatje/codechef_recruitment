$("final-submit").on("click", (e)=>{
    e.preventDefault();

    let answers = [];

    localStorage.getItem("count");

    for(let i=0;i<count;i++) {
        answers.push({
            question: $(`#q${i}`).text(),
            answer: $(`#a${i}`).val()
        });
    }

    $.post("/answers", {answers}, (resp)=>{
        if(resp.message)
            alert(resp.message);
    });
})