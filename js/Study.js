var nsCanvasVideo = {
    ctx1: null,
    ctx2: null,
    canvas1: null,
    canvas2: null,
    inter: 0,
    video: null,
    doIt: function () {
        var id = 'nsCanvasVideo';

        var html = '<video id="video" width="640" height="360" >'
        html += '<source src="vid/VID_20130927_164911.mp4" type="video/mp4">';
        html += '</video>';
        html += '<div>';
        html += '<canvas id="' + id + '1" width="320" height="180" >Canvas not supported</canvas>';
        html += '<canvas id="' + id + '2" width="320" height="180" >Canvas not supported</canvas>';
        html += '</div>';
        html += '<input type="button" value="Play" onclick="video.play();">';
        html += '<input type="button" value="Pause" onclick="video.pause();">';
        html += '<input type="button" value="Stop" onclick="video.currentTime=0; video.pause();">';
        Tools.pushHtml(html);

        nsCanvasVideo.canvas1 = document.getElementById(id+'1');
        nsCanvasVideo.canvas2 = document.getElementById(id+'2');
        if (nsCanvasVideo.canvas1.getContext && nsCanvasVideo.canvas2.getContext) {
            nsCanvasVideo.ctx1 = nsCanvasVideo.canvas1.getContext('2d');
            nsCanvasVideo.ctx2 = nsCanvasVideo.canvas2.getContext('2d');
            nsCanvasVideo.main();
        }
    },
    main: function () {
        nsCanvasVideo.video = document.getElementById('video');
        nsCanvasVideo.ctx1.scale(0.5,0.5);
        nsCanvasVideo.ctx2.translate(-nsCanvasVideo.video.width/4,-nsCanvasVideo.video.height/4);
        nsCanvasVideo.inter = setInterval(nsCanvasVideo.drawVideo,40);
    },
    drawVideo: function () {
        if(!isNaN(nsCanvasVideo.video.duration)){
            nsCanvasVideo.ctx1.drawImage(nsCanvasVideo.video,0,0)
            nsCanvasVideo.ctx2.drawImage(nsCanvasVideo.video,0,0,nsCanvasVideo.video.width,nsCanvasVideo.video.height);
        }
    }
};

var nsRequestAnimationFrame = {
    ctx: null,
    canvas: null,
    index: 0,
    doIt: function () {
        var id = 'nsRequestAnimationFrame';

        var html = '<canvas id="' + id + '" width="640" height="480" >Canvas not supported</canvas>';
        Tools.pushHtml(html);

        nsRequestAnimationFrame.canvas = document.getElementById(id);
        if (nsRequestAnimationFrame.canvas.getContext) {
            nsRequestAnimationFrame.ctx = nsRequestAnimationFrame.canvas.getContext('2d');
            nsRequestAnimationFrame.main();
        }
    },
    main: function () {
        nsRequestAnimationFrame.ctx.lineWidth = 5;
        nsRequestAnimationFrame.ctx.strokeStyle = 'rgba(206,0,0,255';
        nsRequestAnimationFrame.ctx.shadowOffsetX = 0;
        nsRequestAnimationFrame.ctx.shadowOffsetY = 0;
        nsRequestAnimationFrame.ctx.shadowBlur = 15;
        nsRequestAnimationFrame.ctx.shadowColor = '#000';

        nsRequestAnimationFrame.ctx.translate(nsRequestAnimationFrame.canvas.width / 2, nsRequestAnimationFrame.canvas.height / 2);
        nsRequestAnimationFrame.index = 0;

        window.requestAnima = Tools.requestAnimationFrame();

        nsRequestAnimationFrame.draw();
    },
    draw: function () {
        nsRequestAnimationFrame.ctx.translate(3, 1);
        nsRequestAnimationFrame.ctx.rotate(0.2);
        nsRequestAnimationFrame.ctx.beginPath();
        nsRequestAnimationFrame.ctx.moveTo(0, nsRequestAnimationFrame.index)
        nsRequestAnimationFrame.ctx.lineTo(nsRequestAnimationFrame.index + 1, nsRequestAnimationFrame.index);
        nsRequestAnimationFrame.ctx.lineTo(nsRequestAnimationFrame.index, nsRequestAnimationFrame.index + 10);
        nsRequestAnimationFrame.ctx.closePath();
        nsRequestAnimationFrame.ctx.stroke();
        //nsRequestAnimationFrame.ctx.strokeStyle = 'rgba(206,' + nsRequestAnimationFrame.index + ',0,255)';
        nsRequestAnimationFrame.ctx.strokeStyle = 'rgba(' + nsRequestAnimationFrame.index + ',' + nsRequestAnimationFrame.index + ',' + nsRequestAnimationFrame.index + ',255)';
        //nsRequestAnimationFrame.ctx.strokeStyle = 'rgba(255-' + nsRequestAnimationFrame.index + ',255-' + nsRequestAnimationFrame.index + ',255-' + nsRequestAnimationFrame.index + ',255)';
        nsRequestAnimationFrame.index++;

        requestAnima(nsRequestAnimationFrame.draw);
    }
};

var nsAnimation = {
    ctx: null,
    canvas: null,
    index: 0,
    inter: null,
    doIt: function () {
        var id = 'nsAnimation';

        var html = '<canvas id="' + id + '" width="640" height="480" >Canvas not supported</canvas>';
        Tools.pushHtml(html);

        nsAnimation.canvas = document.getElementById(id);
        if (nsAnimation.canvas.getContext) {
            nsAnimation.ctx = nsAnimation.canvas.getContext('2d');
            nsAnimation.main();
        }
    },
    main: function () {
        nsAnimation.ctx.lineWidth = 2;
        nsAnimation.ctx.fillStyle = 'rgba(206,0,0,255';

        nsAnimation.ctx.translate(nsAnimation.canvas.width / 2, nsAnimation.canvas.height / 2);
        nsAnimation.index = 0;
        nsAnimation.inter = setInterval(nsAnimation.draw, 10);
    },
    draw: function () {
        nsAnimation.ctx.translate(4, 1);
        nsAnimation.ctx.rotate(0.2);
        nsAnimation.ctx.fillRect(nsAnimation.index, 0, 20, 20);
        nsAnimation.index++;
        if (nsAnimation.index > 400)
            clearInterval(nsAnimation.inter);
        nsAnimation.ctx.fillStyle = 'rgba(206,0,' + nsAnimation.index + ',255)';

        nsAnimation.ctx.stroke();
    }
};

var nsKeyBoardPaint = {
    ctx: null,
    canvas: null,
    x: 0,
    y: 0,
    doIt: function () {
        var id = 'nsKeyBoardPaint';

        var html = '<div class="nsKeyBoardPaintBody">';
        html += '<canvas id="' + id + '" width="480" height="360" class="nsKeyBoardPaintCanvas">Canvas not supported</canvas>';
        html += '</div>';
        Tools.pushHtml(html);

        nsKeyBoardPaint.canvas = document.getElementById(id);
        if (nsKeyBoardPaint.canvas.getContext) {
            nsKeyBoardPaint.ctx = nsKeyBoardPaint.canvas.getContext('2d');
            nsKeyBoardPaint.main();
        }
    },
    main: function () {
        nsKeyBoardPaint.ctx.strokeStyle = '#000';
        nsKeyBoardPaint.ctx.lineWidth = 5;
        nsKeyBoardPaint.ctx.lineCap = "round";

        nsKeyBoardPaint.x = nsKeyBoardPaint.canvas.width / 2;
        nsKeyBoardPaint.y = nsKeyBoardPaint.canvas.height / 2;

        nsKeyBoardPaint.ctx.moveTo(nsKeyBoardPaint.x, nsKeyBoardPaint.y);

        if (document.body.onkeydown)
            document.body.onkeydown = nsKeyBoardPaint.draw;
        else if (document)
            document.onkeydown = nsKeyBoardPaint.draw;
    },
    draw: function (e) {
        switch (e.keyCode) {
            case 38:
                e.preventDefault();
                if (nsKeyBoardPaint.y >= 5) nsKeyBoardPaint.y -= 5;
                else {
                    nsKeyBoardPaint.ctx.moveTo(nsKeyBoardPaint.x, nsKeyBoardPaint.canvas.height);
                    nsKeyBoardPaint.y = nsKeyBoardPaint.canvas.height - 5;
                }
                break;
            case 40:
                e.preventDefault();
                if (nsKeyBoardPaint.y < nsKeyBoardPaint.canvas.height) nsKeyBoardPaint.y += 5;
                else {
                    nsKeyBoardPaint.ctx.moveTo(nsKeyBoardPaint.x, 0);
                    nsKeyBoardPaint.y = 5;
                }
                break;
            case 37:
                e.preventDefault();
                if (nsKeyBoardPaint.x >= 5) nsKeyBoardPaint.x -= 5;
                else {
                    nsKeyBoardPaint.ctx.moveTo(nsKeyBoardPaint.canvas.width, nsKeyBoardPaint.y);
                    nsKeyBoardPaint.x = nsKeyBoardPaint.canvas.width - 5;
                }
                break;
            case 39:
                e.preventDefault();
                if (nsKeyBoardPaint.x < nsKeyBoardPaint.canvas.width) nsKeyBoardPaint.x += 5;
                else {
                    nsKeyBoardPaint.ctx.moveTo(0, nsKeyBoardPaint.y);
                    nsKeyBoardPaint.x = 5;
                }
                break;
        }
        nsKeyBoardPaint.ctx.lineTo(nsKeyBoardPaint.x, nsKeyBoardPaint.y);
        nsKeyBoardPaint.ctx.stroke();
    }
};


var nsPaint = {
    ctx: null,
    doIt: function () {
        var id = 'nsPaint';

        var html = '<div class="nsPaintBody">';
        html += '<div class="nsPaintPallette">';

        var color = ['#206BA4', '#54A4DE', '#BBD9EE', '#BEDF5D', '#D6EB9A', '#FF9834', '#FFBF80', '#F6E896', '#B07D42', '#FF5349'];
        for (var i in color) {
            html += '<span onclick=\"nsPaint\.changeColor(\'' + color[i] + '\');\" style="background-color: ' + color[i] + '" />';
        }

        html += '</div>';
        html += '<canvas id="' + id + '" width="480" height="360" class="nsPaintCanvas">Canvas not supported</canvas>';
        html += '</div>';
        Tools.pushHtml(html);
        var canvas = document.getElementById(id);
        if (canvas.getContext) {
            nsPaint.ctx = canvas.getContext('2d');
            nsPaint.main(canvas);
        }
    },
    main: function (canvas) {
        var drawInProgress = false;

        nsPaint.ctx.strokeStyle = "#000";
        nsPaint.ctx.lineWidth = 2;

        canvas.onmousedown = function (e) {
            drawInProgress = true;
            nsPaint.ctx.beginPath();
            nsPaint.ctx.moveTo(e.offsetX, e.offsetY);
        };
        canvas.onmouseup = function (e) {
            drawInProgress = false;
            nsPaint.ctx.closePath();
        };
        canvas.onmousemove = function (e) {
            if (drawInProgress) nsPaint.draw(e.offsetX, e.offsetY);
        };
    },
    draw: function (x, y) {
        nsPaint.ctx.lineTo(x, y);
        nsPaint.ctx.stroke();
    },
    changeColor: function (color) {
        if (color) nsPaint.ctx.strokeStyle = color;
    }
};

var nsClip = {
    doIt: function () {
        nsClip.clip1();
        nsClip.clip2();
        nsClip.clip3();
        nsClip.clip4();
    },
    clip1: function () {
        var id = 'clip1';
        Tools.pushHtml('<canvas id="' + id + '">Canvas not supported</canvas>');
        var canvas = document.getElementById(id);
        if (canvas.getContext) {
            var ctx = canvas.getContext('2d');

            var size = Tools.drawImage(ctx, 'img/flyingburningtreant.jpg');
            canvas.width = 308;
            canvas.height = 385;

            ctx.beginPath();
            ctx.arc(100, 100, 80, 0, Math.PI * 2, true);
            ctx.arc(150, 200, 80, 0, Math.PI * 2, true);
            ctx.arc(200, 300, 80, 0, Math.PI * 2, true);
            ctx.moveTo(0, 150);
            ctx.lineTo(400, 0);
            ctx.lineTo(400, 300);
            ctx.fill();
            ctx.closePath();
            ctx.clip();
        }
    },
    clip2: function () {
        var id = 'clip2';
        Tools.pushHtml('<canvas id="' + id + '">Canvas not supported</canvas>');
        var canvas = document.getElementById(id);
        if (canvas.getContext) {
            var ctx = canvas.getContext('2d');

            var size = Tools.drawImage(ctx, 'img/flyingburningtreant.jpg');
            canvas.width = 308;
            canvas.height = 385;

            ctx.beginPath();
            ctx.arc(100, 150, 150, 0, Math.PI * 2, true);
            ctx.closePath();
            ctx.clip();

            ctx.beginPath();
            ctx.arc(200, 200, 150, 0, Math.PI * 2, true);
            ctx.closePath();
            ctx.clip();
        }
    },
    clip3: function () {
        var id = 'clip3';
        Tools.pushHtml('<canvas id="' + id + '">Canvas not supported</canvas>');
        var canvas = document.getElementById(id);
        if (canvas.getContext) {
            var ctx = canvas.getContext('2d');

            var loadImage = function () {
                ctx.save();

                ctx.beginPath();
                ctx.arc(150, 150, 50, 0, Math.PI * 2, true);
                ctx.closePath();
                ctx.clip();

                ctx.drawImage(this, 0, 0);
                ctx.restore();
            };

            var img = new Image();
            img.onload = loadImage;
            img.src = 'img/flyingburningtreant.jpg';
            canvas.width = 308;
            canvas.height = 385;

            canvas.onmousemove = function (e) {
                ctx.save();
                ctx.beginPath();
                ctx.arc(e.offsetX, e.offsetY, 50, 0, Math.PI * 2, true);
                ctx.closePath();
                ctx.clip();

                ctx.drawImage(img, 0, 0);
                ctx.restore();
            };
        }
    },
    clip4: function () {
        var id = 'clip4';
        Tools.pushHtml('<canvas id="' + id + '">Canvas not supported</canvas>');
        var canvas = document.getElementById(id);
        if (canvas.getContext) {
            var ctx = canvas.getContext('2d');

            var img = new Image();
            img.src = 'img/flyingburningtreant.jpg';
            canvas.width = img.width;
            canvas.height = img.height;

            canvas.onmousemove = function (e) {
                var loadImage = function () {
                    ctx.save();

                    ctx.beginPath();
                    ctx.arc(e.offsetX, e.offsetY, 50, 0, Math.PI * 2, true);
                    ctx.closePath();
                    ctx.clip();

                    ctx.drawImage(this, 0, 0);
                    ctx.restore();
                };

                var img = new Image();
                img.onload = loadImage;
                img.src = 'img/flyingburningtreant.jpg';
                canvas.width = 308;
                canvas.height = 385;
            };
        }
    }
};

var nsCompositeOperation = {
    doIt: function () {
        nsCompositeOperation.main();
    },
    main: function () {
        var w = 180, h = 170;
        var composite = ['source-over', 'source-in', 'source-out', 'source-atop', 'destination-over', 'destination-in'
            , 'destination-out', 'destination-atop', 'lighter', 'darker', 'copy', 'xor'];

        for (var i in composite) {
            Tools.pushHtml('<canvas id="canvas_' + i + '" width="' + w + '" height="' + h + '">Canvas not supported</canvas>');
            var canvas = document.getElementById('canvas_' + i);
            if (canvas.getContext) {
                var ctx = canvas.getContext('2d');
                nsCompositeOperation.draw(ctx, composite[i]);
            }
        }
    },
    draw: function (ctx, compositeOperation) {

        ctx.font = '10pt Comic Sans MS';
        ctx.textBaseline = 'top';
        ctx.strokeText(compositeOperation, 10, 10);

        ctx.fillStyle = 'SteelBlue';
        ctx.fillRect(10, 25, 80, 80);
        ctx.globalCompositeOperation = compositeOperation;

        ctx.beginPath();
        ctx.fillStyle = 'YellowGreen';
        ctx.arc(100, 100, 60, 0, Math.PI * 2, true);
        ctx.fill();
    }
};
var nsAlpha = {
    doIt: function () {
        Tools.pushHtml('<canvas id="nsAlpha" width="400" height="400">Canvas not supported</canvas>');
        var canvas = document.getElementById('nsAlpha');
        if (canvas.getContext) {
            var ctx = canvas.getContext('2d');
            nsAlpha.main(ctx, canvas);
        }
    },
    main: function (ctx, canvas) {
        var height = canvas.height;
        var width = canvas.width;
        ctx.fillStyle = '#789';

        ctx.globalAlpha = 0.1;

        var a = 1;//Math.random()*(width-60)/2;
        var b = 1;//Math.random()*(height-60)/2;
        for (var i = 0; i < 60; i++) {
            a += 10;
            b += 10;
            ctx.fillRect(a, b, a, b);
        }
    }
};
var nsShadow = {
    doIt: function () {
        Tools.pushHtml('<canvas id="nsShadow" width="600" height="200">Canvas not supported</canvas>');
        var canvas = document.getElementById('nsShadow');
        if (canvas.getContext) {
            var ctx = canvas.getContext('2d');
            nsShadow.main(ctx, canvas);
        }
    },
    main: function (ctx, canvas) {
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
        ctx.shadowBlur = 15;
        ctx.shadowColor = 'rgba(204,69,228,1)';

        ctx.fillStyle = "#fff";
        ctx.fillRect(10, 10, 150, 150);

        ctx.fillStyle = "#9f0c9d";
        ctx.fillRect(50, 50, 70, 70);

        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 20;
        ctx.shadowBlur = 10;
        ctx.shadowColor = 'rgba(0,0,0,0.2)';
        ctx.strokeStyle = '#2e6996';

        ctx.lineWidth = 5;
        ctx.fillStyle = '#b2d7f3';

        ctx.moveTo(300, 150);
        ctx.lineTo(350, 100);

        ctx.moveTo(350, 150);
        ctx.lineTo(400, 100);
        ctx.lineTo(450, 150);

        ctx.fill();
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();

        ctx.moveTo(480, 150);
        ctx.lineTo(530, 100);
        ctx.lineTo(580, 150);

        ctx.stroke(); //Reverse
        ctx.fill(); //Reverse

        ctx.shadowOffsetX = 5;
        ctx.shadowOffsetY = 5;
        ctx.shadowBlur = 5;
        ctx.shadowColor = 'rgba(0,0,0,0.2)';

        ctx.fillStyle = '#444';
        ctx.font = 'bold 20pt Arial, verdana';
        ctx.fillText('Oups I eat it', 190, 50);

        ctx.closePath();

        ctx.beginPath();

        var load = function () {
            ctx.translate(150, 30);
            ctx.fillStyle = ctx.createPattern(img, "repeat");
            ctx.fillRect(64, 64, img.width * 3, img.height * 3);
        };

        var img = new Image();
        img.onload = load;
        img.src = 'img/brique.png';


    }
};
var nsText = {
    doIt: function () {
        Tools.pushHtml('<canvas id="nsText" width="520" height="360">Canvas not supported</canvas>');
        var canvas = document.getElementById('nsText');
        if (canvas.getContext) {
            var ctx = canvas.getContext('2d');
            nsText.main(ctx, canvas);
        }
    },
    main: function (ctx, canvas) {
        ctx.font = '30pt Comic Sans MS';
        ctx.textAlign = 'start';
        ctx.textBaseline = 'top';
        ctx.strokeText("Just because I don’t care", 0, 0);

        ctx.font = '50pt Comic Sans MS';
        ctx.lineWidth = 3;
        ctx.strokeText("doesn’t mean", 0, 40);

        ctx.font = '20pt Georgia';
        ctx.textAlign = 'right';
        ctx.strokeText("I don’t understand.", 500, 110);

        ctx.font = '50pt Calibri';
        ctx.textAlign = 'right';
        ctx.textBaseline = 'top';
        ctx.strokeText("Homer Simpson", 500, 200);
    }
};
var nsMario = {
    doIt: function () {
        Tools.pushHtml('<canvas id="nsMario" width="480" height="320">Canvas not supported</canvas>');
        var canvas = document.getElementById('nsMario');
        if (canvas.getContext) {
            var ctx = canvas.getContext('2d');
            nsMario.main(ctx, canvas);
        }
    },
    main: function (ctx, canvas) {

        ctx.fillStyle = '#0064b8';
        ctx.fillRect(0, 0, ctx.width, ctx.height);

        var srcImg = {
            fond: 'img/fond.png',
            sol: 'img/sol.png',
            tuyau1: 'img/tuyau1.png',
            tuyau2: 'img/tuyau2.png',
            brique: 'img/brique.png',
            sprites: 'img/sprites.png'
        };

        var loadedImg = {};
        var nbLoadedImg = 0;
        var nbImg = 0;

        for (var i in srcImg) nbImg++;

        for (var i in srcImg) {
            var load = function () {
                nbLoadedImg++;
                if (nbLoadedImg >= nbImg) {
                    ctx.save();
                    nsMario.draw(ctx, canvas, loadedImg);
                    ctx.restore();
                    Tools.backGroundGrid(ctx, canvas.width, canvas.height);
                }
            };

            loadedImg[i] = new Image();
            loadedImg[i].onload = load;
            loadedImg[i].src = srcImg[i];
        }
    },
    draw: function (ctx, canvas, allImg) {
        ctx.drawImage(allImg.fond, 0, 0);

        ctx.save();

        ctx.translate(0, canvas.height - allImg.sol.height);
        ctx.fillStyle = ctx.createPattern(allImg.sol, 'repeat-x');
        ctx.fillRect(0, 0, canvas.width, allImg.sol.height);

        var heightTuyau1 = 96;
        var heightTuyau2 = 16;
        ctx.translate(304, -1 * (heightTuyau1 - allImg.sol.height));
        ctx.fillStyle = ctx.createPattern(allImg.tuyau1, 'repeat-y');
        ctx.fillRect(0, heightTuyau2, allImg.tuyau1.width, heightTuyau1);

        ctx.fillStyle = ctx.createPattern(allImg.tuyau2, 'no-repeat');
        ctx.fillRect(0, 0, allImg.tuyau2.width, heightTuyau2);

        ctx.translate(-224, -64);
        ctx.fillStyle = ctx.createPattern(allImg.brique, "repeat");
        ctx.fillRect(64, 64, allImg.brique.width * 5, allImg.brique.height * 2);

        ctx.restore();

        var posx = Math.random() * 150 + 100;
        var posy = canvas.height - allImg.sol.height - allImg.sprites.height;
        ctx.drawImage(allImg.sprites, 0, 0, 16, 16, posx, posy, 16, 16);

        posx = 192;
        posy = canvas.height - allImg.sol.height - allImg.sprites.height - 120;
        ctx.drawImage(allImg.sprites, 16, 0, 16, 16, posx, posy, 16, 16);

        posx = Math.random() * 100 + 350;
        posy = canvas.height - allImg.sol.height - allImg.sprites.height;
        ctx.drawImage(allImg.sprites, 32, 0, 16, 16, posx, posy, 16, 16);
    }
};
var nsPattern = {
    doIt: function () {
        Tools.pushHtml('<canvas id="nsPattern" width="400" height="300">Canvas not supported</canvas>');
        var cvCurrent = document.getElementById('nsPattern');
        if (cvCurrent.getContext) {
            var ctx = cvCurrent.getContext('2d');
            Tools.backGroundGrid(ctx, cvCurrent.width, cvCurrent.height);
            nsPattern.main(ctx);
        }
    },
    main: function (ctx) {
        var load = function () {
            var pattern = ctx.createPattern(this, 'repeat');
            //ctx.rect(20,20,380,280);
            ctx.arc(150, 40, 100, 0, 2 * Math.PI, true);
            ctx.fillStyle = pattern;
            ctx.fill();
        };

        var img = new Image();
        img.onload = load;
        img.src = 'img/brique.png';
    }
};
var nsWritePixel = {
    doIt: function () {
        Tools.pushHtml('<canvas id="nsWritePixel" width="400" height="300">Canvas not supported</canvas>'
            + '<div>'
            + '<input type="button" value="No red" id="effectNoRed"/>'
            + '<input type="button" value="Negative" id="effectNegatif"/>'
            + '<input type="button" value="Black & White" id="effectBlackWhite"/>'
            + '<input type="button" value="Reset" id="effectClear"/>'
            + '</div>');

        var cvCurrent = document.getElementById('nsWritePixel');
        if (cvCurrent.getContext) {
            var ctx = cvCurrent.getContext('2d');
            Tools.backGroundGrid(ctx, cvCurrent.width, cvCurrent.height);

            nsWritePixel.effectLauncher(4, ctx);
        }

        document.getElementById('effectNoRed').onclick = function (e) {
            nsWritePixel.effectLauncher(1, ctx);
        };
        document.getElementById('effectNegatif').onclick = function (e) {
            nsWritePixel.effectLauncher(2, ctx);
        };
        document.getElementById('effectBlackWhite').onclick = function (e) {
            nsWritePixel.effectLauncher(3, ctx);
        };
        document.getElementById('effectClear').onclick = function (e) {
            nsWritePixel.effectLauncher(4, ctx);
        };
    },
    effectLauncher: function (type, ctx) {
        var imgData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
        switch (type) {
            case 1:
                nsWritePixel.effectNoRed(imgData.data);
                break;
            case 2:
                nsWritePixel.effectNegatif(imgData.data);
                break;
            case 3:
                nsWritePixel.effectBlackWhite(imgData.data);
                break;
            case 4:
                Tools.drawImage(ctx, 'img/flyingburningtreant.jpg');
                break;
        }
        ctx.putImageData(imgData, 0, 0);
    },
    effectNoRed: function (data) {
        for (var i = 0; i < data.length; i += 4) {
            data[i] = 0;
//                data[i + 1] = 0;
//                data[i + 2] = 0;
//                data[i + 3] = 0;
        }
        return data;
    },
    effectNegatif: function (data) {
        for (i = 0; i < data.length; i += 4) {
            data[i] = 256 - data[i];
            data[i + 1] = 256 - data[i + 1];
            data[i + 2] = 256 - data[i + 2];
//                data[i + 3] = 0;
        }
        return data;
    },
    effectBlackWhite: function (data) {
        for (i = 0; i < data.length; i += 4) {
            var gray = data[i] * 0.3 + data[i + 1] * 0.59 + data[i + 2] * 0.11;
            data[i] = gray;
            data[i + 1] = gray;
            data[i + 2] = gray;
//                data[i + 3] = 0;
        }
        return data;
    }
};
var nsReadPixel = {
    doIt: function () {
        Tools.pushHtml('<canvas id="readSourcePixel" width="400" height="300">Canvas not supported</canvas>'
            + '<canvas id="readDestinationPixel" width="120" height="120">Canvas not supported</canvas>');

        var cvSource = document.getElementById('readSourcePixel');
        var cvDestination = document.getElementById('readDestinationPixel');
        if (cvSource.getContext && cvDestination.getContext) {
            var ctxSource = cvSource.getContext('2d');
            var ctxDestination = cvDestination.getContext('2d');
            Tools.backGroundGrid(ctxSource, cvSource.width, cvSource.height);
            Tools.backGroundGrid(ctxDestination, cvDestination.width, cvDestination.height);

            var loadImage = function () {
                ctxSource.drawImage(this, 0, 0);
                nsReadPixel.pixelCopy(0, 0, ctxSource, ctxDestination);
            };

            var img = new Image();
            img.onload = loadImage;
            img.src = 'img/flyingburningtreant.jpg';

            cvSource.onmousemove = function (e) {
                nsReadPixel.pixelCopy(e.clientX, e.clientY, ctxSource, ctxDestination)
            }
        }
    },
    pixelCopy: function (x, y, ctxSource, ctxDestination) {
        var imgData = ctxSource.getImageData(x, y, 100, 100);
        ctxDestination.putImageData(imgData, 20, 20)

    }
};
var nsCreatePixel = {
    doIt: function () {
        Tools.pushHtml('<canvas id="nsCreatePixel" width="400" height="300">Canvas not supported</canvas>');

        var cvCurrent = document.getElementById('nsCreatePixel');
        if (cvCurrent.getContext) {
            var ctx = cvCurrent.getContext('2d');
            Tools.backGroundGrid(ctx, cvCurrent.width, cvCurrent.height);

            var newPx = ctx.createImageData(cvCurrent.width, cvCurrent.height);
            var max = newPx.data.length;
            var i;

            for (i = 0; i < max; i += 4) {
                newPx.data[i] = 255;
                newPx.data[i + 3] = 127;
            }

            for (i = 0; i < max * 3 / 4; i += 4) {
                newPx.data[i + 1] = 255;
                newPx.data[i + 3] = 255;
            }

            for (i = 0; i < max / 2; i += 4) {
                newPx.data[i + 2] = 255;
            }

            for (i = 0; i < max / 4; i += 4) {
                newPx.data[i] = 0;
                newPx.data[i + 1] = 0;
                newPx.data[i + 2] = 0;
            }

            ctx.putImageData(newPx, 0, 0);
        }
    }
};
var nsDrawImage = {
    doIt: function () {
        Tools.pushHtml('<canvas id="nsDrawImage" width="400" height="360">Canvas not supported</canvas>');
        var cvCurrent = document.getElementById('nsDrawImage');
        if (cvCurrent.getContext) {
            var ctx = cvCurrent.getContext('2d');
            Tools.backGroundGrid(ctx, cvCurrent.width, cvCurrent.height);

            var loadImage = function () {
                ctx.drawImage(this, 150, 200);
                ctx.drawImage(this, 20, 20, 300, 110);
                ctx.scale(1, -1);
                ctx.drawImage(this, 300, -300, this.width / 2, this.height / 2);
            };

            var img = new Image();
            img.onload = loadImage;
            img.src = 'img/flyingburningtreant.jpg';
        }
    }};
var nsTransform = {
    doIt: function () {
        Tools.pushHtml('<canvas id="nsTransform" width="800" height="400">Canvas not supported</canvas>');
        var cvCurrent = document.getElementById('nsTransform');
        if (cvCurrent.getContext) {
            var ctx = cvCurrent.getContext('2d');
            Tools.backGroundGrid(ctx, cvCurrent.width, cvCurrent.height);

            ctx.save();
            Tools.switzerlandFlag(ctx, 30, 30);
            ctx.restore();

            ctx.save();
            ctx.scale(2, 0.5);
            Tools.switzerlandFlag(ctx, 150, 100);
            ctx.restore();

            ctx.save();
            ctx.scale(0.3, 0.5);
            Tools.switzerlandFlag(ctx, 160, 300);
            ctx.restore();

            ctx.save();
            ctx.translate(100, -50);
            Tools.switzerlandFlag(ctx, 30, 220);
            ctx.restore();

            ctx.save();
            ctx.rotate(0.5);
            Tools.switzerlandFlag(ctx, 450, 30);
            ctx.restore();

            ctx.save();
            ctx.transform(1.5, 0.1, 1, 0.9, 0.4, 0.5);
            Tools.switzerlandFlag(ctx, 160, 130);
            ctx.restore();
        }
    }};
var nsGradient = {
    doIt: function () {
        Tools.pushHtml('<canvas id="nsGradient" width="400" height="300">Canvas not supported</canvas>');
        var cvCurrent = document.getElementById('nsGradient');
        if (cvCurrent.getContext) {
            var ctx = cvCurrent.getContext('2d');
            Tools.backGroundGrid(ctx, cvCurrent.width, cvCurrent.height);

            ctx.beginPath();
            var gradientLineaire = ctx.createLinearGradient(60, 0, 260, 0);
            gradientLineaire.addColorStop(0, '#32CD32');
            gradientLineaire.addColorStop(0.5, '#f00');
            gradientLineaire.addColorStop(1, '#FFA500');
            ctx.fillStyle = gradientLineaire;
            ctx.fillRect(20, 20, 360, 60);

            ctx.beginPath();
            var gradientRadial = ctx.createRadialGradient(100, 150, 40, 300, 150, 40);
            gradientRadial.addColorStop(0, '#f00');
            gradientRadial.addColorStop(0.5, '#0000FF');
            gradientRadial.addColorStop(1, '#008000');
            ctx.fillStyle = gradientRadial;
            ctx.fillRect(20, 120, 360, 60);

            ctx.beginPath();
            var gradientRadialStroke = ctx.createLinearGradient(60, 0, 260, 0);
            gradientRadialStroke.addColorStop(0, '#FF1A75');
            gradientRadialStroke.addColorStop(0.7, '#3E434A');
            gradientRadialStroke.addColorStop(1, '#009EC3');
            ctx.strokeStyle = gradientRadialStroke;
            ctx.lineWidth = 20;
            ctx.strokeRect(30, 230, 340, 40);
        }
    }};
var nsLine = {
    doIt: function () {
        Tools.pushHtml('<canvas id="nsLine" width="400" height="200">Canvas not supported</canvas>');
        var cvCurrent = document.getElementById('nsLine');
        if (cvCurrent.getContext) {
            var ctx = cvCurrent.getContext('2d');
            Tools.backGroundGrid(ctx, cvCurrent.width, cvCurrent.height);

            var cap = ['butt', 'round', 'square'];
            var i, y;
            for (i = 0; i < cap.length; i++) {
                ctx.beginPath();
                ctx.lineWidth = 5;
                ctx.strokeStyle = '#f00';
                ctx.lineCap = cap[i];
                y = 20 * (i + 1);
                ctx.moveTo(50, y);
                ctx.lineTo(350, y);
                ctx.stroke();
            }

            var join = ['miter', 'round', 'bevel'];
            for (i = 0; i < cap.length; i++) {
                ctx.beginPath();
                ctx.lineWidth = 5;
                ctx.strokeStyle = '#0000FF';
                ctx.lineJoin = join[i];
                y = (40 * (i + 1)) + 40;
                ctx.moveTo(50, y);
                ctx.lineTo(350, y);
                ctx.lineTo(300, y + 30);
                ctx.stroke();
            }
        }
    }};
var nsHouse = {
    doIt: function () {
        Tools.pushHtml('<canvas id="house" width="200" height="200">Canvas not supported</canvas>');
        var cvCurrent = document.getElementById('house');
        if (cvCurrent.getContext) {
            var ctx = cvCurrent.getContext('2d');
            Tools.backGroundGrid(ctx, cvCurrent.width, cvCurrent.height);
            ctx.translate(10, 10);

            ctx.beginPath();
            ctx.lineWidth = 5;
            ctx.strokeStyle = '#f00';

            ctx.moveTo(40.5, 80.5);
            ctx.lineTo(80.5, 40.5);
            ctx.lineTo(120.5, 80.5);

            ctx.moveTo(60.5, 80.5);
            ctx.lineTo(60.5, 120.5);
            ctx.lineTo(100.5, 120.5);
            ctx.lineTo(100.5, 80.5);

            ctx.stroke();

            ctx.rect(75.5, 100.5, 10, 20);
            ctx.stroke();

            ctx.beginPath();
            ctx.strokeStyle = '#32CD32';

            ctx.moveTo(20, 120);
            ctx.arcTo(20, 30, 160, 120, 20);

            ctx.stroke();

            ctx.beginPath();
            ctx.fillStyle = '#FFFF00';
            ctx.strokeStyle = '#FFA500';
            ctx.arc(150, 40, 30, 0, 2 * Math.PI, true);
            ctx.fill();
            ctx.stroke();

            ctx.beginPath();
            ctx.strokeStyle = '#40E0D0';
            ctx.moveTo(20, 150);
            ctx.bezierCurveTo(80, 130, 80, 180, 140, 150);
            ctx.moveTo(20, 170);
            ctx.bezierCurveTo(80, 150, 80, 200, 140, 170);
            ctx.stroke();

            ctx.beginPath();
            ctx.strokeStyle = '#FFA500';
            ctx.moveTo(130, 40);
            ctx.quadraticCurveTo(150, 70, 170, 40);
            ctx.stroke();

            ctx.beginPath();
            ctx.strokeStyle = '#FFA500';
            ctx.moveTo(135, 30);
            ctx.lineTo(140, 25);
            ctx.lineTo(145.5, 30);
            ctx.stroke();

            ctx.beginPath();
            ctx.strokeStyle = '#FFA500';
            ctx.moveTo(155, 30);
            ctx.lineTo(160, 25);
            ctx.lineTo(165, 30);
            ctx.stroke();
        }
    }};
var nsTriangle = {
    doIt: function () {
        Tools.pushHtml('<canvas id="triangle" width="400" height="200">Canvas not supported</canvas>');
        var cvCurrent = document.getElementById('triangle');
        if (cvCurrent.getContext) {
            var ctx = cvCurrent.getContext('2d');
            Tools.backGroundGrid(ctx, cvCurrent.width, cvCurrent.height);
            ctx.fillStyle = '#9ACD32';
            ctx.strokeStyle = '#4682B4';
            ctx.lineWidth = 20;

            ctx.translate(40, 40);

            ctx.beginPath();
            ctx.moveTo(25, 25);
            ctx.lineTo(100, 100);
            ctx.lineTo(25, 100);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(300, 100);
            ctx.lineTo(220, 100);
            ctx.lineTo(220, 25);
            ctx.lineTo(300, 100);
            //ctx.closePath(); <- To sees difference with&without closing path
            ctx.fill();
            ctx.stroke();
        }
    }};
var nsSwitzerlandFlag = {
    doIt: function () {
        Tools.pushHtml('<canvas id="switzerlandFlag" width="250" height="150">Canvas not supported</canvas>');
        var cvCurrent = document.getElementById('switzerlandFlag');
        if (cvCurrent.getContext) {
            var ctx = cvCurrent.getContext('2d');
            Tools.backGroundGrid(ctx, cvCurrent.width, cvCurrent.height);
            ctx.lineWidth = 2;
            ctx.fillStyle = '#f00';
            ctx.strokeStyle = '#ccc';
            ctx.fillRect(30, 30, 200, 100);
            ctx.clearRect(120, 40, 20, 80);
            ctx.clearRect(90, 70, 80, 20);
            ctx.strokeRect(20, 20, 220, 120);
        }
    }};
var nsRedRectangle = {
    doIt: function () {
        Tools.pushHtml('<canvas id="redRectangle" width="220" height="120">Canvas not supported</canvas>');
        var cvCurrent = document.getElementById('redRectangle');
        if (cvCurrent.getContext) {
            var ctx = cvCurrent.getContext('2d');
            Tools.backGroundGrid(ctx, cvCurrent.width, cvCurrent.height);
            ctx.fillStyle = '#f00';
            ctx.fillRect(20, 20, 190, 90);
        }
    }};