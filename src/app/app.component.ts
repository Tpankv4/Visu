import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Modeler, OriginalPropertiesProvider, PropertiesPanelModule, InjectionNames, OriginalPaletteProvider} from "./bpmn-js/bpmn-js";
//import {CustomPropsProvider} from './props-provider/CustomPropsProvider';
import {CustomPaletteProvider} from "./props-provider/CustomPaletteProvider";
import {WineryService} from "./services/winery.service";
import { ActivatedRoute } from '@angular/router';
import { PageParameter } from './model/page-parameter';

import {BpelService} from './services/bpelparser.service';

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
  title = 'bpmn-js BPEL plan visualizer ';
  modeler;

  constructor(private http: HttpClient, private route: ActivatedRoute,private wineryService: WineryService,private bpelservice: BpelService) {
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

  /**
   * start visualization
   */
  visualize(){
    const url1 = '/assets/MyTinyToDo_Bare_Docker_buildPlan.bpel';
    const url2 = '/assets/MyTinyToDo_Docker_On_VM_buildPlan.bpel';
    this.bpelservice.parseBpel(this.modeler, url1);
  
  }

  handleError(err: any) {
    if (err) {
      console.warn('Ups, error: ', err);
    }
  }

  initiate(){
    const url = '/assets/bpmn/initial.bpmn';
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

  /**
   * save the plans as XML
   */
  save1(): void {
    this.modeler.saveXML((err: any, xml: any) => {console.log('Result of saving XML: ', err, xml);
    //let temp = JSON.stringify(xml);
    //this.wineryService.save(temp);});
    this.wineryService.downloadXML(xml);
  });
  
  }

  /**
   * save the plan as SVG
   */
  save2(): void {
    this.modeler.saveSVG((err: any, svg: any) => {
    this.wineryService.downloadSVG(svg);
  });

    
    }
}
