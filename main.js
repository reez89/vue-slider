/* Istruzioni:
Ricreare lo slider di immagini ma questa volta con Vue
Bonus ufficiale:
Facciamo in modo che il nostro slider scorra automaticamente in avanti,
e ogni 3 secondi visualizzi un immagine differente.
Tip: possiamo usare una lifecycle Hook per inserire un nostro script quando l'istanza Vue é stata caricata. */


let app = new Vue({
    el: '#app', 
    data:{
        counter:0,
        timer: null,
        images: [
            "https://images.pexels.com/photos/371633/pexels-photo-371633.jpeg?cs=srgb&dl=clouds-country-daylight-371633.jpg&fm=jpg",
            "https://static.photocdn.pt/images/articles/2017/04/28/iStock-646511634.jpg",
            "https://cdn.mos.cms.futurecdn.net/FUE7XiFApEqWZQ85wYcAfM.jpg",
            "https://static.photocdn.pt/images/articles/2017/04/28/iStock-546424192.jpg"
        ],
    },
    mounted: function() {
    this.startSlide();
  },
  
    methods:{
        startSlide: function() {
            this.timer = setInterval(this.next, 3000);
        },
        next(){
            this.counter ++;
            if(this.counter === this.images.length){
                this.counter = 0;
            }
        },
        prev(){
            if(this.counter > 0){
                this.counter --;
                
            }else {
                this.counter === this.images.length - 1;
            }
        }
    }
});
