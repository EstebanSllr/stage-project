import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  test: string = '123';
  myFonction(texte:string):string{
    const simon :string = texte + '456'
    return simon
  }
  oui = this.myFonction(this.test);
// ---------------------------------
 maVariable = 0;
 incrementer():void { 
  this.maVariable = this.maVariable+10;
}
//------------------------------------

oui2: number[] = [1,2,3,4,5,6,7,8,9];

myfc(): void{
  for (let i=0; i< this.oui2.length ; i++){
      console.log('i : ',i)
      console.log('length : ',this.oui2.length)

      console.log(this.oui2[i])
  }
}

oui3=this.myfc()







}
