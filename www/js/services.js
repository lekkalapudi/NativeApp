angular.module('shelf.services', []).service('notificationWorkerService', function () {
    var localWorker;
    this.setWorker = function (worker) {
        localWorker = worker;
    };

    this.getWorker = function () {
        return localWorker;
    };

}).service('shelfService', function () {

    var shelves = [
        {
            name: 'RFP:Reliable Telecom',
            docs: 10,
            isLocked:true,
            totalDocs: 100,
            tasks: 10,
            totalTasks: 20,
            scheduled: 5,
            calender: 10


        }, {
            name: 'RFP:Reliable Telecom',
            docs: 10,
            isLocked:false,
            totalDocs: 100,
            tasks: 10,
            totalTasks: 20,
            scheduled: 5,
            calender: 10

        }, {

            name: 'RFP: Acclerea',
            docs: 10,
            totalDocs: 100,
            isLocked:false,
            tasks: 10,
            totalTasks: 20,
            scheduled: 5,
            calender: 10
        }, {
            name: 'RFP:Cable Network',
            docs: 10,
            isLocked:true,
            totalDocs: 100,
            tasks: 10,
            totalTasks: 20,
            scheduled: 5,
            calender: 10
        },
        {
            name: 'RFP:Reliable Telecom-1',
            docs: 10,
            isLocked:true,
            totalDocs: 100,
            tasks: 10,
            totalTasks: 20,
            scheduled: 5,
            calender: 10
        }, {
            name: 'RFP:Reliable Telecom-2',
            docs: 10,
            totalDocs: 100,
            isLocked:false,
            tasks: 10,
            totalTasks: 20,
            scheduled: 5,
            calender: 10
        },
        {
            name: 'RFP:Cable Network-2',
            docs: 10,
            totalDocs: 100,
            isLocked:true,
            tasks: 10,
            totalTasks: 20,
            scheduled: 5,
            calender: 10
        },
        {
            name: 'RFP:Cable Network-4',
            docs: 10,
            isLocked:false,
            totalDocs: 100,
            tasks: 10,
            totalTasks: 20,
            scheduled: 5,
            calender: 10
        }
    ];
    this.getShelves = function () {

        return shelves;
    };
    this.getShelveDetails = function (index) {

        return shelves[i];
    };

    this.getDummyTaskList= function(){

    return dummyTaskData;

    };

   var dummyTaskData=[{
      "image_url":"http://api.randomuser.me/portraits/thumb/men/8.jpg","user_name":"Kylianle Maire",
           "event_type":"user_joined","message":"Joined the RFP activity group","date":"2015-07-14T14:10:57.336Z"

   },{
       "image_url":"http://api.randomuser.me/portraits/thumb/men/53.jpg","user_name":"Matthis Zanting","event_type":"user_joined",
       "message":"Uploaded Document sample.doc","date":"2015-07-14T14:11:15.378Z"


   }]


});