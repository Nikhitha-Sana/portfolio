var typed=new Typed(".typewriter-text",
{
    strings:[" ",
        "Web Designer",

    ],
    typespeed:100,
    backspeed:70,
    loop:true
    }
)
let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

let section=document.querySelectorAll('.section');
let navlinks=document.querySelectorAll('.header nav a');

window.onscroll=()=>{
    SpeechRecognitionResult.fotEach(sec=>{
        let top=window.scrollY;
        let offset=window.offsetTop-150;
        let height=window.offsetHeight;
        let id=sec.getAttribute('id');
        if(top>=offset && top<offset+height){
            navlinks.forEach(links=>{
                links.classlist.remove('active');
                document.querySelector('header nav a[href+='+id +']').classlist.add('active');
               
            
            })
        }
    })
}
menuIcon.onclick=()=>{
    menuIcon.classlist.toggle('bx=x');
    navbar.classlist.toggle('active');
    
}
