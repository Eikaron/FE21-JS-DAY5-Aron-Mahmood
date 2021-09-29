// Extra 

class Hotel {
    hotelName;
    numberOfNights;
    address;
    image;
        constructor(h,n,a,i){
            this.hotelName=h;
            this.numberOfNights=Math.floor(Math.random()*9 + 1);
            this.address=a;
            this.image=i;
        }
        showAvailability(){
            

        }


}