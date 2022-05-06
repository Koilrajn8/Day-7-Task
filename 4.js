class uberPrice{
    constructor(distanceTravelled,pricePerKm)
    {
        this.distanceTravelled = distanceTravelled;
        this.pricePerKm = pricePerKm;
    }
    getuberPrice(){
        let baseprice=100;
        let cost=baseprice +parseInt(`${this.distanceTravelled*this.pricePerKm}`)
        return cost;
    }
}
let uberPrice1 = new uberPrice(20,20);
let uberPrice2 = new uberPrice(30,20);
console.log(uberPrice1.getuberPrice());
console.log(uberPrice2.getuberPrice());