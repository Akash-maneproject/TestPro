import { Component, OnInit } from '@angular/core';
// import * as CanvasJS from './canvas.min';
var CanvasJS = require('./canvas.min.js');
declare var require: any
import { Router,ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public _router: Router,public activatedRoute:ActivatedRoute) { }
  data:any;
 ngOnInit() {
	console.log("Dashboarsd");
	// console.log(this.activatedRoute.data['pagenotfoundData']);
	// this.activatedRoute.data['pagenotfoundData']
    // console.log(this.data);

  let isLoggedIn:any =  window.localStorage.getItem('isLoggedIn');
  // if(isLoggedIn != '1'  && isLoggedIn != 1 ){
  //   this._router.navigate(['/login'])
  // }
	let chart = new CanvasJS.Chart("chartContainer", {
		theme: "light2",
		animationEnabled: true,
		exportEnabled: true,
		title:{
			text: "Monthly Expense"
		},
		data: [{
			type: "pie",
			showInLegend: true,
			toolTipContent: "<b>{name}</b>: ${y} (#percent%)",
			indexLabel: "{name} - #percent%",
			dataPoints: [
				{ y: 100, name: "Food" },
				{ y: 120, name: "Insurance" },
				{ y: 300, name: "Traveling" },
				{ y: 800, name: "Housing" },
				{ y: 150, name: "Education" },
				{ y: 150, name: "Shopping"},
				{ y: 250, name: "Others" }
			]
		}]
	});
		
	chart.render();
    }

}