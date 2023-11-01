var tl = gsap.timeline({scrollTrigger:{
    trigger: ".two",
    start: "0%, 95%",
    end: "50%, 50%",
    scrub: true, //scrub means reverse effect jab dubara scroll up kare to reverse animation bhi hoo
    // markers: true,
}})

tl.to("#fanta",{
    top: "105%",
    left: "0%"
}, 'orange')

tl.to("#orange-cut",{
    top: "160%",
    left: "28%",
}, 'orange')

tl.to("#orange",{
    width: "15%",
    top: "160%",
    right: "10%"
}, 'orange')

tl.to("#leaf",{
    top: "110%",
    left: "80%",
    rotate: "20deg",
}, 'orange')

tl.to("#leaf2",{
    top: "110%",
    left: "0%",
    rotate: "20deg",
}, 'orange')

var tl2 = gsap.timeline({scrollTrigger:{
    trigger: ".three",
    start: "0%, 95%",
    end: "50%, 50%",
    scrub: true, 
    // markers: true,
}})

tl2.from(".lemon1",{
    rotate: "-90deg",
    left: "0%",
    top: "100%"
}, 'cans')

tl2.from("#sprite",{
    rotate: "-90deg",
    left: "-130%",
    top: "60%"
}, 'cans')

tl2.from(".lemon2",{
    rotate: "90deg",
    left: "0%",
    top: "110%"
}, 'cans')

tl2.from("#cola",{
    rotate: "90deg",
    left: "60%",
    top: "60%"
}, 'cans')

tl2.to("#orange-cut",{
    left: "43%",
    top: "212%"
}, 'fanta')

tl2.to("#fanta",{
    width: "55%",
    left: "45%",
    top: "205%"
}, 'fanta')