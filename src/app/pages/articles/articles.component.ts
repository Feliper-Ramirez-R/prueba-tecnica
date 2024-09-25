import { Component } from '@angular/core';
import { articles } from 'src/articulos';


@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent {

  articles:any = articles

  constructor(){
    console.log(articles);
    
  }

}
