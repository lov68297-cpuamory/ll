let pages = ["message", "counter", "videos", "music", "gift"];
let currentPage = 0;

// كلمة السر
function checkPassword() {

    let pass = document.getElementById("password").value;

    if (pass == "Bakr2hk") {

    const black = document.getElementById("blackScreen");

black.classList.add("show");

setTimeout(() => {


document.getElementById("login").classList.remove("active");

document.getElementById("message").classList.add("active");

typeWriter();

startFlowers();

black.classList.remove("show");

},500);
document.title = "🤍 Happy 2 Years, Amory 🌸";
        const music = document.getElementById("bgMusic");

        if (music) {
            music.play().catch(() => {});
        }

        startCounter();

    } else {

        alert("❌ كلمة السر غلط");

    }
}
// التنقل بين الصفحات
function nextPage() {

    document.getElementById(pages[currentPage]).classList.remove("active");

    currentPage++;

    if (currentPage < pages.length) {
        document.getElementById(pages[currentPage]).classList.add("active");
    }

}
// الهديه
function openGift(){

const white = document.getElementById("whiteScreen");
const box = document.querySelector(".gift-box");
const message = document.getElementById("finalMessage");

box.style.transform = "scale(1.4)";
box.style.opacity = "0";

if(navigator.vibrate){
    navigator.vibrate([200,100,200]);
}

// فتح الظرف
setTimeout(()=>{

box.style.display="none";

message.style.display="block";
message.style.transition="opacity 1s";
message.style.opacity="1";

},500);

// بعد 20 ثانية
setTimeout(()=>{

// اختفاء الرسالة
message.style.opacity="0";

// بعد ثانية تظهر الشاشة البيضا
setTimeout(()=>{

white.classList.add("show");

// إنشاء النهاية
const end=document.createElement("div");

end.className="the-end";

end.innerHTML = `
<span style="
font-family:'Cormorant Garamond',serif;
font-size:20px;
font-weight:500;
font-style:italic;
letter-spacing:.5px;
white-space: nowrap;
color:#5E4634;
display:block;
width:90%;
margin:auto;
text-align:center;
">
🤍 Every moment with you is my favorite
</span>
`;

white.appendChild(end);

// بعد 5 ثواني
setTimeout(()=>{

end.style.transition="opacity 1s";
end.style.opacity="0";

// بعد ثانية يظهر Fin.
setTimeout(()=>{

end.innerHTML=`
<span style="font-size:42px;font-family:'Cormorant Garamond',serif;">
.♡Fin
</span>
`;

end.style.opacity="1";
end.style.animation="fade 1s";

// بعد 4 ثواني يرجع للبداية
setTimeout(()=>{

white.classList.remove("show");

end.remove();

document.getElementById("gift").classList.remove("active");
document.getElementById("login").classList.add("active");

currentPage=0;

// رجوع الظرف
box.style.display="block";
box.style.opacity="1";
box.style.transform="scale(1)";

// إخفاء الرسالة
message.style.display="none";
message.style.opacity="1";

// تجهيز الكتابة من جديد
document.getElementById("typing").innerHTML="";
i=0;

},4000);

},1000);

},5000);

},1000);

},20000);

}


// العداد
function startCounter() {

    const startDate = new Date("2024-07-25T00:00:00");

    setInterval(() => {

        const now = new Date();

        const diff = now - startDate;

        let days = Math.floor(diff / (1000 * 60 * 60 * 24));

        let years = Math.floor(days / 365);

        let hours = Math.floor((diff / (1000 * 60 * 60)) % 24);

        let minutes = Math.floor((diff / (1000 * 60)) % 60);

        let seconds = Math.floor((diff / 1000) % 60);

        document.getElementById("years").innerHTML = years;
document.getElementById("days").innerHTML = days;
document.getElementById("hours").innerHTML = hours;
document.getElementById("minutes").innerHTML = minutes;
document.getElementById("seconds").innerHTML = seconds;
        `
            ❤️ ${years} سنه <br><br>
        📅 ${days} يوم <br><br>
        🕒 ${hours} ساعة <br><br>
        ⏰ ${minutes} دقيقة <br><br>
        💖 ${seconds} ثانية
        `;

    },1000);

}
const text = `بما انك حيوان ومفكرتش فيا ولا اي نيله قلت افكر فيك انا واعمل اي ذكري لينا وبالمره نبقا رجعنا ف نفس اليوم اللي ارتبطنا في عارفه انك هتقول تافهه بس انا بعمل فيه من يوم 15 والله وتعبت فيه اوي ياريت تخلي عندك دم وتقدر تعبي😭 كان المفروض احط صورنا بس ملناش صور مع بعض وحتي مفيش شات عشان اعرف احط اسكرينات بس مش مهم المهم اننا سوا وعوزاك تعرف اني بحبك اوي اويييي مع انك بيض وغلس ورخم وكل حاجه بس بردو بحبك ربنا يخليك ليا يروحي🩷`;

let i = 0;

function typeWriter() {

    if (i < text.length) {

        document.getElementById("typing").innerHTML +=
text.charAt(i) === "\n" ? "<br>" : text.charAt(i);

        i++;

        setTimeout(typeWriter, 90);

    }

}
const icons = ["🌸","🤍"];

function startFlowers(){

setInterval(()=>{

const item=document.createElement("div");

item.className="fall";

item.innerHTML=Math.random()>0.5?"🌸":"🤍";

item.style.left=Math.random()*100+"vw";

item.style.fontSize=(20+Math.random()*25)+"px";

item.style.animationDuration=(5+Math.random()*4)+"s";

document.body.appendChild(item);

setTimeout(()=>{
item.remove();
},9000);

},350);

}
window.onload = function(){

setTimeout(()=>{

document.getElementById("loading").classList.remove("active");

document.getElementById("login").classList.add("active");

},2000);

};