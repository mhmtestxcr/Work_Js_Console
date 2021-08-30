// Liste oluşturuldu
const list = [
    {
        todoid:1,
        todo:'todo1',
        categoryId:1,
        isFavorite:true

    },
    {
        todoid:2,
        todo:'todo2',
        categoryId:2,
        isFavorite:false

    },
    {
        todoid:3,
        todo:'todo3',
        categoryId:3,
        isFavorite:true

    },
]

const categoryList = [
    {
        categoryName:'category1',
        categoryId:1,

    },
    {
        categoryName:'category2',
        categoryId:2,
    },
    {
        categoryName:'category3',
        categoryId:3,
    }
]
 
// category ıd istenildiği zaman hem fav ı hemde todo getirildi
function todoGrow(categoryId){
    
    for(var i=0 ; i<list.length; i++){

       if(list[i].categoryId == categoryId){

           console.log(list[i].todo)

           console.log(list[i].isFavorite);
        }
    }    
}

// category ıd verildiği zaman category nameyi veriyor
function categoryGrow(categoryId){
    for(var i=0 ; i<categoryList.length; i++){

        if(categoryList[i].categoryId == categoryId){

            console.log(categoryList[i].categoryName);
            return;

        } 
    }
}

console.log(list);
// Eleman ekleme yapıldı.Kontrolleri sağlandı
function addTodos(){

    var todoid = list.length;

    var currentCategory = null;

    var currentTodo = null;

    var currentIsFavo = null;

    currentCategory   =prompt("listenin başına eleman eklemek için bir category giriniz?");
    currentTodo       =prompt("listenin başına eleman eklemek için bir todo giriniz?");
    currentIsFavo     =prompt("listenin başına eleman eklemek için bir fav giriniz?");

    if(currentCategory === "" || currentTodo === "" || currentIsFavo === ""){

            console.error("!!Lütfen gerekli yerleri doldurunuz!!");

    }
    else if(!(currentIsFavo == "true" || currentIsFavo == "false")){

        console.error("Favori bloğuna sadece 'true' veya 'false' girilebilir");

    }
    else{
            list.push(
                {
                    todoid:todoid+1 ,category:currentCategory ,  Todo:currentTodo, isFavorite:currentIsFavo,
                },
            );
            console.log(list);
        
    }        
         
const listItem = JSON.stringify(list);
localStorage.setItem("list",JSON.stringify(list));  

}

// Eleman silme yapıldı.Localde de silindi
function removeTodos(){

    var currentID = null;

    currentID =prompt("Silmek istediğiniz idyi giriniz"); 

    for( var i =0 ; i < list.length ; i++){

        if(list[i].todoid == currentID ){

                list.splice(currentID-1,1);

    console.log(list);

        }
   
    }

const listItem = JSON.stringify(list);
localStorage.setItem("list",JSON.stringify(list));
}

// Personel istediği şekilde id ile değişim yapıldı
function todosUpdate(){   

    var todoid = list.length;

    var currentIsFavo = null;

    var currentCategory = null;

    var currentID = null;

    currentID =prompt("Değiştirmek istediğiniz id değerini giriniz."); 
    currentCategory   =prompt("listenin başına eleman eklemek için bir category giriniz?");
    currentTodo       =prompt("listenin başına eleman eklemek için bir todo giriniz?");
    currentIsFavo     =prompt("listenin başına eleman eklemek için bir fav giriniz?");

    for( var i =0 ; i < list.length ; i++){

        if(list[i].todoid == currentID ){

                list.splice(currentID-1,1);

        }
   
    }
    if(currentCategory === "" || currentTodo === "" || currentIsFavo === ""){

        console.error("!!Lütfen gerekli yerleri doldurunuz!!");

    }
    else if(!(currentIsFavo == "true" || currentIsFavo == "false")){

        console.error("Favori bloğuna sadece 'true' veya 'false' girilebilir");

    }
    else{

        list.unshift(
            {
                todoid:Number(currentID) ,category:currentCategory ,  Todo:currentTodo, isFavorite:Boolean(currentIsFavo),
            },
        );
        console.log(list);
        
    }               
}






