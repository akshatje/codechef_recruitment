$(".final-submit").on("click", (e)=>{
    e.preventDefault();
    let answers = [];

    let count=localStorage.getItem("count");
    let answer='';
    for(let i=0;i<10*count;i++) {
        answer=$(`#a${i}`).val();
        if(!answer)
            continue;
        else{
            answers.push({
                question: $(`#q${i}`).text(),
                answer
            });
        }
       
    }

    let technical = localStorage.getItem("technical");
    let design = localStorage.getItem("design");
    let management = localStorage.getItem("management");
    let content_writing = localStorage.getItem("documentation");
    
    $.post("/answers", {answers:answers, technical, design, management, content_writing}, (resp)=>{
        if(resp.message)
            alert(resp.message);
        else{
            console.log(resp)
        }
    });
})