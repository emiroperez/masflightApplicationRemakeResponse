import { Component, OnInit } from '@angular/core';
import { Globals } from '../globals/Globals';
import { AmChart, AmChartsService } from '@amcharts/amcharts3-angular';

@Component({
  selector: 'app-msf-schedule-panel',
  templateUrl: './msf-schedule-panel.component.html',
  styleUrls: ['./msf-schedule-panel.component.css']
})

export class MsfSchedulePanelComponent implements OnInit {
  panelOpenState = false;
  private mapaairports : Map<String, any>;
  constructor(private AmCharts: AmChartsService,public globals: Globals) { }
  aux=this.globals.scheduledata;
  checkarray(aux2){
    return Array.isArray(aux2);
  }
 getPropshtml(json){
   var html="";
  for (var key in json) {
    html +='<tr><td>' + key + '</td><td  style="font-weight: bold;  padding-left: 22px;">' + json[key]+'</td></tr>';
  }
 return html;
 }
  rad2degr(rad) { return rad * 180 / Math.PI; }
  degr2rad(degr) { return degr * Math.PI / 180; }
  calcCrow(lat1, lon1, lat2, lon2) 
  {
    var R = 6371; // km
    var dLat = this.degr2rad(lat2-lat1);
    var dLon = this.degr2rad(lon2-lon1);
    var latb1 = this.degr2rad(lat1);
    var latb2 = this.degr2rad(lat2);

    var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(latb1) * Math.cos(latb2); 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c;
    return d;
  }
  

    expandFligth(index,$event){
      let planeSVG = "m2,106h28l24,30h72l-44,-133h35l80,132h98c21,0 21,34 0,34l-98,0 -80,134h-35l43,-133h-71l-24,30h-28l15,-47";
    let targetSVG = "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z";
    var airportsarray =this.aux[index].airports;
    var airports =[];
    var lines =[];
     var nodeair = {}
     var nodeline ={}
     var countlines =0;
   
      if($event.checked){
        for(var k =0;k<airportsarray.length; k+=1){
          nodeair = { 
            "svgPath": targetSVG,
             "title": airportsarray[k].title,
             "latitude": airportsarray[k].latitude,
             "longitude": airportsarray[k].longitude,
             "label": airportsarray[k].title,
             "labelColor" :"#ffffff",
             "labelFontSize" : 12
          }
          this.mapaairports.set( airportsarray[k].id, nodeair);
          airports.push(nodeair);
         }
      }else{
        for(var k =0;k<airportsarray.length; k+=1){
        this.mapaairports.delete(airportsarray[k].id);
        }
      }
          
    
  
     let mapToArray = Array.from(this.mapaairports.values());
      for (var i = 0; i < mapToArray.length; i += 1) {
     
        if (i+1 <  mapToArray.length){
          countlines++;
          nodeline ={
            "id" :"line"+countlines,
            "arc": -0.85,
            "alpha": 0.3,
            "latitudes": [ mapToArray[i].latitude, mapToArray[i+1].latitude ],
            "longitudes": [ mapToArray[i].longitude, mapToArray[i+1].longitude ]
          }
          lines.push(nodeline);

        }
        
      
      }


     
      var LATIDX = 0;
      var LNGIDX = 1;
      var sumX = 0;
      var sumY = 0;
      var sumZ = 0;
  
      for (var i=0; i<mapToArray.length; i++) {
          var lat = this.degr2rad(mapToArray[i].latitude);
          var lng = this.degr2rad(mapToArray[i].longitude);
          // sum of cartesian coordinates
          sumX += Math.cos(lat) * Math.cos(lng);
          sumY += Math.cos(lat) * Math.sin(lng);
          sumZ += Math.sin(lat);
      }
      console.log(sumX+"-"+sumY+"-"+sumZ);
      var avgX = sumX / mapToArray.length;
      var avgY = sumY / mapToArray.length;
      var avgZ = sumZ / mapToArray.length;
  
      // convert average x, y, z coordinate to latitude and longtitude
      var lng = Math.atan2(avgY, avgX);
      var hyp = Math.sqrt(avgX * avgX + avgY * avgY);
      var lat = Math.atan2(avgZ, hyp);
      var zoomlat =  this.rad2degr(lat);
      var zoomlong =this.rad2degr(lng);
      if(mapToArray.length>0){
        var dist = this.calcCrow(mapToArray[0].latitude,mapToArray[0].longitude,mapToArray[1].latitude,mapToArray[1].longitude);
      }
      
      if(mapToArray.length===0){
        this.globals.scheduleChart.dataProvider.zoomLevel = 1;
        zoomlat =42;
        zoomlong =  -55;
      }
      if(mapToArray.length!=2){
        this.globals.schedulepanelinfo=false;
      }else{
        this.globals.schedulepanelinfo = this.aux[index];
        this.globals.schedulepanelinfo.TotalTime= this.globals.schedulepanelinfo.TotalTime.replace("Hours", "H").replace("Minutes","M");
      }

      for (var i = 0; i < lines.length; i += 1) {
        nodeair = { 
          "svgPath": planeSVG,
          "positionOnLine": 0,
          "color": "#00a3e1",
          "alpha": 0.8,
          "animateAlongLine": true,
          "lineId": lines[i].id,
          "flipDirection": true,
          "loop": true,
          "scale": 0.03,
          "positionScale": 1.3
        }
        mapToArray.push(nodeair);
      }
    
     
      this.AmCharts.updateChart(this.globals.scheduleChart, () => {
      this.globals.scheduleChart.dataProvider.images  = mapToArray;
      this.globals.scheduleChart.dataProvider.lines =lines;
      this.globals.scheduleChart.dataProvider.zoomLevel = 4.0;
       this.globals.scheduleChart.dataProvider.zoomLongitude=Number(zoomlong);
       this.globals.scheduleChart.dataProvider.zoomLatitude=Number(zoomlat);
      
      });
     
   
     
   }
   returnSearch(){
    this.globals.hideParametersPanels=false;
    this.globals.schedulepanelinfo =false;
    this.AmCharts.updateChart(this.globals.scheduleChart, () => {
      this.globals.scheduleChart.dataProvider.images  = [];
      this.globals.scheduleChart.dataProvider.lines =[];
      this.globals.scheduleChart.dataProvider.zoomLevel = 1;
      
      });
   }

   showMap(){
     this.globals.showTabs=false
   }
   
  ngOnInit() {
    this.mapaairports = new Map();
    }

  
  
}
