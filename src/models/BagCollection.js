export default function BagCollection(){

    let arr = []

    arr.addToBag = function(item){
        this.push(item);

        return this;
    }

    arr.checkOutBag = function(){

        for(let i=0; i <= this.length; i++) {
            this.item.checkOut()
        }

        this.slice(this.length);
    }

    return arr;
}
