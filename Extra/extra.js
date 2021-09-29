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
                return  <button value="I'll reserve"></button>

            }else{
                return  `<button value="Sorry, no available nights for ${hotelName}></button> `

            }
        }
}

Hotel1= new Hotel("holdayInn","Vienna",)