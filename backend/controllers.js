












var all = function (req, res)  
{  
    Book.find(  
    {}, function (err, books)  
    {  
        if (!err)  
        {  
            res.json(200,  
            {  
                books: books  
            });  
        }  
        else  
        {  
            res.json(500,  
            {  
                message: err  
            });  
        }  
    });  
} 