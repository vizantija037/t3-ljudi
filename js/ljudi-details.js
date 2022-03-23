
Box.Application.addModule('ljudi-details', function(context){
    let moduleContext;
    let myObject = context.getService('object').serviceOut;
   
    return {
        init: function(){
            moduleContext = context.getElement();
             
        },

        onmessage: {
            'id': function(myid){
                let output ='';
                myObject.find(element => {
                    if(element.id==myid){
                        console.log(element)
                       output += `
                       <li class="detalisListItem">Id od kliknutog ljuda: <strong>${element.id}</strong></li>
                       <li class="detalisListItem">Ime od kliknutog ljuda:  <strong>${element.name}</strong></li>
                       <li class="detalisListItem">Starost od kliknutog ljuda: <strong>${element.age}</strong></li>
                       <li class="detalisListItem">E-mail od kliknutog ljuda:  <strong>${element.mail}</strong></li>
                       `
                        moduleContext.querySelector('.details-list').innerHTML = output;
                    }
                })
            }
            
        },
        destroy: function() {
            moduleContext = null;
        }
    }
})


Box.Application.init();


