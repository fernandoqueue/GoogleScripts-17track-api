 function FetchJson() {
             var trackingNumber = '9374889676090651166265';

             var trackerObj = {
                          'num': trackingNumber
                };

             var data = {
                          'guid': '',
                          'data': [trackerObj]
                };

             var options = {
                         'method' : 'post',
                         'contentType': 'application/json',
                         'payload' : JSON.stringify(data)
                };

             var response =  UrlFetchApp.fetch('https://t.17track.net/restapi/track', options).getContentText();
             var dataAll = JSON.parse(response);
             var updates = dataAll.dat[0].track.z1;

             //From here it's up to you to choose which way to consume the data.
             updates.forEach(function(element) {
                         // a = date
                         // d = location
                         // z = message
                         var date = element.a;
                         var location = element.d;
                         var message = element.z;
                });
        }