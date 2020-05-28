var Product=require('../models/product');
var mongoose=require('mongoose');
//mongoose.connect('mongodb://localhost:27017/onlinedb');
//mongoose.connect('mongodb://localhost:27017/onlinedb', {useUnifiedTopology: true,useNewUrlParser: true});


var products=[
    new Product({
    imagePath:'https://images-na.ssl-images-amazon.com/images/I/81xQBb5jRzL._SY355_.jpg',
    title:'Apple',
    description:'Good for health',
    price: 160
    
    }),
    
    new Product({
        imagePath:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn9szJyYa3JzD7uwNBhLkA5pmmA09cw9BApYkV9pVsqjah5pS8',
        title:'Orange',
        description:'Good for health',
        price: 120
        
        }),
    
        new Product({
            imagePath:'https://5.imimg.com/data5/DQ/PC/MY-44589255/organic-fresh-grape-500x500.jpg',
            title:'Grape',
            description:'Good for health',
            price: 80
            
            }),
    
          
        
    ];
    
    var done=0;
    for(var i=0;i<products.length;i++)
    {
        products[i].save(function(err,result){
            done++;
            if(done===products.length){
                exit();
            }
        });
    }
    
    function exit(){
        mongoose.disconnect();
    }
    
    
