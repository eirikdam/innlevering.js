
let teller = 0;
let Fvalg = "";
let Avalg = "";

//lager element for alle kort som alle funksjonene er en del av
const AkortEl = document.querySelectorAll(".AlleKort .kort");
AkortEl.forEach((kort) => {
kort.addEventListener("click", () => {
    kort.classList.add("trykket");

    if(teller === 0){
        Fvalg = kort.getAttribute("forer");
        teller++;
    }else{
        Avalg = kort.getAttribute("forer");
        teller = 0;
//sjekker hvis valgene er like
        if(Fvalg === Avalg){
            const RiktigKort = document.querySelectorAll(".kort[forer='" + Fvalg + "'] ");

            RiktigKort[0].classList.add("sjekket");
            RiktigKort[0].classList.remove("trykket");
            RiktigKort[1].classList.add("sjekket");
            RiktigKort[1].classList.remove("trykket");
        }else {
            const FeilKort = document.querySelectorAll(".kort.trykket");


            //tid for hvor lenge kortene er synlige ved feil 
            setTimeout(() => {
                FeilKort[0].classList.remove("trykket")
                FeilKort[1].classList.remove("trykket")
            }, 800);
        }
    }
    });
});
//reset knapp
function reset(){
    location.reload();
}