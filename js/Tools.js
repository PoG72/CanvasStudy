var Tools={
    pushHtml: function(html){
        $('#container').append(html);
    },
    backGroundGrid: function(ctx,width,height){
        ctx.fillStyle = "#FF2A00";
        for (var i = 0; i < width; i = i + 20) {
            ctx.beginPath();
            ctx.lineWidth = 1;
            ctx.strokeStyle = "#ccc";
            ctx.moveTo(i,0);
            ctx.lineTo(i,height);
            ctx.stroke();
            if (i > 0)
                ctx.fillText(i,i,10);
        }
        
        for (i = 0; i < height; i = i + 20) {
            ctx.beginPath();
            ctx.lineWidth = 1;
            ctx.strokeStyle = "#ccc";
            ctx.moveTo(0,i);
            ctx.lineTo(width,i);
            ctx.stroke();
            
            if (i > 0)
                ctx.fillText(i,0,i);
        }
    },
    switzerlandFlag: function(ctx,x,y){
        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.strokeStyle = "#ccc";
        ctx.fillStyle = "#f00";
        ctx.fillRect(x, y, 200, 100);
        ctx.fillStyle = "#fff";
        ctx.fillRect(x+90, y+10, 20, 80);
        ctx.fillStyle = "#fff";
        ctx.fillRect(x+60, y+40, 80, 20);            
        ctx.strokeRect(x-9, y-9, 220, 120);
    },
    drawImage: function(ctx,src){
        var loadImage = function () {
            ctx.drawImage(this, 0, 0);
        };

        var img = new Image();
        img.onload = loadImage;
        img.src = src;
    },
    launcher:function(firstOnly){
        var all = ['nsAnimation'
            , 'nsKeyBoardPaint'
            ,'nsPaint'
            ,'nsClip'
            ,'nsCompositeOperation'
            ,'nsAlpha'
            ,'nsShadow'
            ,'nsText'
            ,'nsMario'
            ,'nsPattern'
            ,'nsWritePixel'
            ,'nsReadPixel'
            ,'nsCreatePixel'
            ,'nsDrawImage'
            ,'nsTransform'
            ,'nsGradient'
            ,'nsLine'
            ,'nsHouse'
            ,'nsTriangle'
            ,'nsSwitzerlandFlag'
            ,'nsRedRectangle'];

        if(firstOnly)
            all = [all[0]];
        else
            all.reverse();
        for(var index in all){
            (function(i){
                var toDo = function(){eval(all[i] + '.doIt()');};
                setTimeout(toDo,100*i);
            })(index);
        }
    }
};