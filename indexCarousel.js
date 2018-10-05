 $(document).ready( function(){         
        var mydata = JSON.parse(data);
        var mhtml = '';
        $.each(mydata, function(key, val){
       
        if(mhtml == ''){
          mhtml +='<div class="item active">';
        }else{
          mhtml +='<div class="item">';
        }
        
        mhtml +='<img src='+val.img+' id="image" style="height:350px;width=100%;align:center"/>';
        mhtml +='<div class="carousel-caption">';
        mhtml +='<h3>'+val.title+'</h3>';
        mhtml +='<p>'+val.expert+'</p>';
        mhtml +='</div>';
        mhtml +='</div>';
        
    });
    //var $ul = $('<ul>').append($(mhtml));// append DOM only one time.
    $("div.carousel-inner").empty().html(mhtml);
    //$('.carousel-inner').append($(mhtml));   
         })