
Box.Application.addModule('ljudi-list', function(context){

    let myContext;
    let myObject = context.getService('object').serviceOut;

    function createListItems(id, name){
        let output = '';
        myObject.forEach(item =>{
            id = item.id;
            name = item.name;
            output+=`
            <li>${name}
            <button class="buttonDetails" id=${id} data-type="buttonDetails">Details</button>
            </li>
            `   
        })
        return output;
    }

    return{
        init: function(){
            myContext = context.getElement();
            myContext.querySelector('.lista-ul').innerHTML = createListItems(); 
        },
        onclick: function(event, element, elementType){
            if(elementType === "buttonDetails"){
                let id = event.target.id;
                context.broadcast('id', id) 
            }
        },
        destroy: function() {
            myContext = null;
        }
    }
})



