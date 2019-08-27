import {linkToExternalSearchSystemConfig} from './prmBriefResultContainerAfter/linkToExternalSearchSystem'
let app = angular.module('viewCustom',[]);
if (app){
    app.component('prmBriefResultContainerAfter', linkToExternalSearchSystemConfig);
} 

