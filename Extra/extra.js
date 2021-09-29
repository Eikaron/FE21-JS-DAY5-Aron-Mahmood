// Extra 

class Hotel {
    hotelName;
    numberOfNights;
    address;
    image;
        constructor(h,a,i){
            this.hotelName=h;
            this.numberOfNights=Math.floor(Math.random()*9 + 1);
            this.address=a;
            this.image=i;
        }
        showAvailability(nights){

            if(this.numberOfNights>nights){
                return `<button type="button" class="btn btn-primary"> I'll reserve </button><img src="${this.image}">`

            }else{
                return `<button type="button" class="btn btn-primary"> Sorry, no nights left at
                 ${this.hotelName}!</button> <img src="${this.image}">`

            }
        }
}

let Hotel1= new Hotel("holdayInn","Vienna","img/hotel1.jpg");
document.getElementById("somebutton").innerHTML = Hotel1.showAvailability(4);