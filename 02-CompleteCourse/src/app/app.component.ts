import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  title = 'Hello Jack Angular7';
  mDataArray:any[] = []

  constructor(private http:HttpClient){

  }

  onSubmit(data){
    // alert(JSON.stringify(data))
    this.http.post<any>('http://localhost:3000/api',data).subscribe(result=>{
      this.getFeedBack()
    })
  }

  getFeedBack(){
    this.http.get<any>('http://localhost:3000/api').subscribe(result=>{
      // alert(JSON.stringify(result))
      this.mDataArray = result.data
    })
  }

  ngOnInit(): void {
    this.getFeedBack()
  }

}
