/*[33PUDB_NETWORK_AFA] - Customisation de la toplevel facette  */
/*Suprime les entrées 'peer_reviewed','open_access'et'available'*/

import linkToExternalSearchSystem from './linkToExternalSearchSystem.html'
class linkToExternalSearchSystemController {
    constructor($scope, $window, favSession){
        console.log(this.parentCtrl.storageUtil.localStorage.testLocal)
        console.log('----> 33PUDB linkToExternalSearchSystemController');
        var lastResult = this.parentCtrl.searchStateService.resultObject.info.last;
        var resultIndex = this.parentCtrl.index;
        console.log(this.parentCtrl.searchStateService.resultObject.info);
        console.log(this);
        if (resultIndex == lastResult && this.parentCtrl.isExpanded == false) {
          // this.setData('true');
          if (this.parentCtrl.storageUtil.localStorage.getItem('viewExternalSearchMessage') != 'false'){
            this.showExternalSiteList = true;
            this.parentCtrl.storageUtil.localStorage.setItem('viewExternalSearchMessage','true');
          }
        } 

        console.log("COUNTER : " + resultIndex + " / "  + lastResult);
    
        $scope.queryTerm = encodeURIComponent(this.parentCtrl.searchService.searchFieldsService._mainSearch);
    }

    externalSearchMsgOnClick (){
      console.log("It's time to kick ass and chew bubble gum, and I'm all outta gum!");
      this.showExternalSiteList = false;
      this.parentCtrl.storageUtil.localStorage.setItem('viewExternalSearchMessage','false');
    };
  
  }


  linkToExternalSearchSystemController.$inject = ['$scope', '$rootScope', '$element']
  export let linkToExternalSearchSystemConfig = {
    bindings: {parentCtrl:'<'},
    controller: linkToExternalSearchSystemController,
    template:  linkToExternalSearchSystem,
  }