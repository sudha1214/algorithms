function makeResilient(object){

    var name,
        method;
    for (name in object){
        method = object[name];
        if (typeof method == "function"){
            object[name] = function(method){
                return function(){
                    try {
                        return method.apply(this, arguments);
                    } catch (ex) {
                        console.log("Exception caught:  "+ ex.message);
                    }
                };

            }(method);
        }
    }
    return object;
}

let view = {
    name: 'test view',
    render: function(options) {
      console.log('message = ' + options.message);
    }
  };
  
  let modifiedView = makeResilient(view);
  console.log(modifiedView.name);
  modifiedView.render(null);