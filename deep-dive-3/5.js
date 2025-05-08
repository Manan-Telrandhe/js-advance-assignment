var somelist = readVeryLongList();

var nextItem = function() {

   var item = somelist.pop();

   if (item) {

       // process the list item...
      
    //    setTimeout(nextItem,0); 

    //    setImmediate(nextItem); it is prefered in nodejs because it queues the function to execute after I/O events.

   }

};

// nextItem();