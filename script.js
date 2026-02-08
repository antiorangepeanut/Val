const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");
const btnContainer = document.getElementById("btnContainer");
const card = document.getElementById("card");

function moveNo(){
    const x = Math.random()*200 - 100;
    const y = Math.random()*120 - 60;
    noBtn.style.transform = `translate(${x}px,${y}px)`;
}

noBtn.addEventListener("mouseover", moveNo);
noBtn.addEventListener("click", moveNo);

yesBtn.addEventListener("click", () => {
    btnContainer.classList.add("hide");
    card.classList.add("celebrate");

    setTimeout(()=>{
        btnContainer.style.display="none";
        message.classList.add("show");
    },400);

    startHearts();
});

function startHearts(){
    setInterval(()=>{
        const heart=document.createElement("div");
        heart.className="heart";
        heart.innerHTML="♥";
        heart.style.left=Math.random()*window.innerWidth+"px";
        heart.style.top="100vh";
        document.body.appendChild(heart);
        setTimeout(()=>heart.remove(),4000);
    },250);
}