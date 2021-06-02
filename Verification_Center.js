class Verification_Center
{
    constructor(parraycars)
    {
        this.arraycars=parraycars;
    }
    avg_polluting_spotss=()=>
    {
        let sum=0;
        let higher=0;
        let less=0;
        let avg=0;
        let spots=0;

    this.arraycars.map(
        car=>{
            spots=car.carbondioxidespots;
            sum=sum+spots;
            if(car===this.arraycars[0])
            {
                higher=spots;
                less=spots;

            }
            else
            {
                if(higher>=spots)
                {
                    if(less>spots)
                    {
                        less=spots;
                    }
                }
                else
                {
                    higher=spots;
                    if(less>spots)
                    {
                        less=spots;
                    }
                }
            }
        }
    )
   avg=sum/this.arraycars.length;
   return {avg,higher,less}
    }
   
}
module.exports={Verification_Center}