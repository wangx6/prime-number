var PrimeGen = function(){
    this.range = 1000000;
    this.prime = [ 2, 3 , 5 , 7 ];
}; 

PrimeGen.prototype.setRange = function( range ){
    this.range =  range; 
    return this;
};

PrimeGen.prototype.getPrime = function(){
    var l, i, j, isPrime,
        t1 = new Date().getTime(), t2;

    for( i = 11 ; i < this.range ; i += 2){
        isPrime = true;
        l = this.prime.length;
        j = 1;

        if( i % 5 === 0 ){
            continue;
        }
        
        while( j < l ){
            if( i % this.prime[ j ] === 0 ){
                isPrime = !isPrime;
                break;
            }
            j+=1;
        }
        if( isPrime ){
            this.prime.push( i );
        }
    }

    tDiff = new Date().getTime() - t1;
    console.log( (tDiff / 1000) + ' sec' );
    console.log( this.prime );
    return this.prime;
};

var p = new PrimeGen().getPrime();