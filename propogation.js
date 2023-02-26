let gp = document.getElementById("gp")
gp.addEventListener("click",(e)=>{
    e.stopPropagation()
    console.log("Grandparent clicked");
}
)
let pt = document.getElementById("pt")
pt.addEventListener("click",(e)=>{
    e.stopPropagation()

    console.log( "parent clicked");
})
let cd = document.getElementById("cd")
cd.addEventListener("click",(e)=>{
    e.stopPropagation()

    console.log("child clicked");
})