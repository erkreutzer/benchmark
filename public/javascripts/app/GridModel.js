var GridModel = function() {

};

GridModel.prototype.getItem = function(i) {
    throw new Error('Unimplemented method getItem');
};

GridModel.getColumns = function() {
    throw new Error('Unimplemented method getColumns');
};

GridModel.getLength = function() {
    throw new Error('Unimplemented method getLength');
};

var CampaignGridModel = function() {

};

angular.extend(CampaignGridModel, GridModel);

CampaignGridModel.prototype.getItem = function(i) {
    return {
        publisher: 'publisher - ' + i,
        cost: ' cost - ' + i
    };
};

CampaignGridModel.prototype.getLength = function() {
    return 1000;
};

CampaignGridModel.prototype.getColumns = function() {
    return [
        {
            name: 'Publisher',
            field: 'publisher'
        },
        {
            name: 'Cost',
            field: 'cost'
        }
    ]
};


var DripDropModel = function(DripDropService) {
    this.service = DripDropService;
};

angular.extend(DripDropModel, GridModel);

DripDropModel.prototype.getItem = function(i) {
    return this.service.fetchData(i, i);
};

DripDropModel.prototype.getLength = function() {
    return 1000;
};

DripDropModel.prototype.getColumns = function() {
    return this.service.getColumnsForRowType('test');
};

