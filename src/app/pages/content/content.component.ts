import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover:string = ''
  contentDescription:string = ''
  contentTitle:string = ''
  private id:string | null = ""
  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
      this.route.paramMap.subscribe(value =>
      this.id = value.get("id"))

      this.setValueToComponent(this.id)
  }
  setValueToComponent(id:string | null){
    const result = dataFake.filter(article => article.id == id)[0]
    this.contentTitle = result.title
    this.photoCover = result.photo
    this.contentDescription = result.description
  }
}
