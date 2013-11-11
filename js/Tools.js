var Tools={
    BackGroundGrid: function(ctx,width,height){
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
    SwitzerlandFlag: function(ctx,x,y){
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
    }
};