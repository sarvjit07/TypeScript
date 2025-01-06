interface IProduct
{
    Name:string;
    Price:number;
    Qty:number;
    Total():number;
    Print():void;
}

abstract class ProductTemplate implements IProduct
{
     public Name:string = "";
     public Price: number = 0;
     public Qty:number =  0;
     abstract Total():number;
     abstract Print(): void;
}

class ProductComponent extends ProductTemplate
{
      Name = "Samsung TV";
      Price = 50000;
      Qty = 2;
      Total(){
        return this.Qty * this.Price;
      }
      Print(){
         console.log(`Name=${this.Name}\nPrice=${this.Price}\nQty=${this.Qty}\nTotal=${this.Total()}`);
      }
}

let obj = new ProductComponent();
obj.Print();