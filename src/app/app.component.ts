import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Modeler, OriginalPropertiesProvider, PropertiesPanelModule, InjectionNames, OriginalPaletteProvider} from "./bpmn-js/bpmn-js";
import {CustomPropsProvider} from './props-provider/CustomPropsProvider';
import {CustomPaletteProvider} from "./props-provider/CustomPaletteProvider";
import {WineryService} from "./services/winery.service";
import { ActivatedRoute } from '@angular/router';
import { PageParameter } from './model/page-parameter';

//import { DOMParserImpl as dom } from 'xmldom-ts';
//import * as dom from 'xmldom-ts';
import * as xpath from 'xpath-ts';
//import * as fs from 'fs';
//import * as path from 'path';
import {BpelService} from './services/bpelparser.service';
import {BpmnCreator} from './services/BpmnCreator.service';

const customModdle = {
  name: "customModdle",
  uri: "http://example.com/custom-moddle",
  prefix: "custom",
  xml: {
    tagAlias: "lowerCase"
  },
  associations: [],
  types: [
    {
      "name": "ExtUserTask",
      "extends": [
        "bpmn:UserTask"
      ],
      "properties": [
        {
          "name": "worklist",
          "isAttr": true,
          "type": "String"
        }
      ]
    },
  ]
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'bpmn.io bpel plan visualizer ';
  modeler;

  constructor(private http: HttpClient, private route: ActivatedRoute,private wineryService: WineryService,private bpelservice: BpelService, private bpmncreator: BpmnCreator) {
  }

  ngOnInit(): void {
    this.modeler = new Modeler({
      container: '#canvas',
      width: '100%',
      height: '800px',
      additionalModules: [
        PropertiesPanelModule,
        OriginalPropertiesProvider,

        //{[InjectionNames.bpmnPropertiesProvider]: ['type', OriginalPropertiesProvider.propertiesProvider[1]]},
        //{[InjectionNames.propertiesProvider]: ['type', CustomPropsProvider]},

        {[InjectionNames.originalPaletteProvider]: ['type', OriginalPaletteProvider]},
        {[InjectionNames.paletteProvider]: ['type', CustomPaletteProvider]},
      ],
      propertiesPanel: {
        parent: '#properties'
      },
      moddleExtension: {
        custom: customModdle
      }
    });
    this.route.queryParams.subscribe(params => {this.wineryService.setRequestParam(<PageParameter>params);});
    this.initiate();
    
  }

  
  visualize(){
    this.bpelservice.parseBpel(this.modeler);
    console.log('BPEEEEEEEEEEEEEEEEL');
    //const testxml = "<scope name=\"MyTinyToDoDockerContainer_PROVISIONING_scope\"></scope>";
    //const xml = fs.readFileSync("/Users/timmp/Desktop/Bachelor/plänezumtesten/MyTinyToDo_Bare_Docker_buildPlan/MyTinyToDo_Bare_Docker_buildPlan/MyTinyToDo_Bare_Docker_buildPlan.bpel", "UTF-8");
    //const xml = path.dirname("/Users/timmp/Desktop/Bachelor/plänezumtesten/MyTinyToDo_Bare_Docker_buildPlan/MyTinyToDo_Bare_Docker_buildPlan/MyTinyToDo_Bare_Docker_buildPlan.bpel");
    //const doc = new dom.DOMParserImpl().parseFromString(xml);
    //const name = xpath.select1('/scope/@name', doc);
    //console.log(name);
    //window.alert(name);
    //this.createTest2();
    //this.bpmncreator.createBpmn(this.modeler); //yaaaaaaay :D
  
  }

  //geht wohl nicht anders... also kommt hier alles rein.
  createTest2(){

    let bf2 = this.modeler.get('bpmnFactory');
    let ef2 = this.modeler.get('elementFactory');
    let m = this.modeler.get('modeling');
    let cv = this.modeler.get('canvas');
    //return function (event) {
      const businessObject = bf2.create('bpmn:ServiceTask');

      const shape = ef2.createShape({
        type: 'bpmn:ServiceTask',
        businessObject: businessObject
      });

      const position = {
        x: 100,
        y: 100
      };  

      m.createShape(shape, position, cv.getRootElement());

   // };

 }

  handleError(err: any) {
    if (err) {
      console.warn('Ups, error: ', err);
    }
  }

  initiate(){
    const url = '/assets/bpmn/initial.bpmn';
    //const url2 = '/assets/MyTinyToDo_Bare_Docker_buildPlan.bpel';
    this.http.get(url, {
      headers: {observe: 'response'}, responseType: 'text'
    }).subscribe(
      (x: any) => {
        console.log('Fetched XML, now importing: ', x);
        this.modeler.importXML(x, this.handleError);
        
      },
      this.handleError
    );
  }
  load(){
    
    this.wineryService.loadPlan2(this.modeler);
    
  }

  save(): void {
    //this.modeler.saveXML((err: any, xml: any) => {console.log('Result of saving XML: ', err, xml);
    this.modeler.saveSVG((err: any, svg: any) => {console.log('Result of saving SVG: ', err, svg);
    //let temp = JSON.stringify(xml);
    //this.wineryService.save(temp);});
    this.wineryService.downloadSVG(svg);
  });

    
    
}}
