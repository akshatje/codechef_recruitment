$(document).ready(()=>{
    
    $.post("/timerAcknowledge",{count:localStorage.getItem("count")},(resp)=>{
        alert(resp);
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
        
        $.ajax({
            url:"/answers",
            data:JSON.stringify({answers, technical, design, management, content_writing}),
            type:"post",
            contentType:"application/json",
            success:(resp)=>{
                if(resp.message)
                    alert(resp.message);
                else{
                    alert("Exam successfully saved");
                    $("body").html('');
                    window.location.replace("/");
                }
            }
        })
    })
})


$(".final-submit").on("click", (e)=>{
    console.log("clicasnmkc")
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
    
    $.ajax({
        url:"/answers",
        data:JSON.stringify({answers, technical, design, management, content_writing}),
        type:"post",
        contentType:"application/json",
        success:(resp)=>{
            if(resp.message)
                alert(resp.message);
            else{
                alert("Exam successfully saved");
                $("body").html('');
                window.location.replace("/");
            }
        }
    })
})