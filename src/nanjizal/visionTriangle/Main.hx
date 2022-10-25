package nanjizal.visionTriangle;
import vision.ds.Image;
import vision.ds.Line2D;
import vision.ds.Point2D;
import vision.ds.Ray2D;
import vision.ds.Color;
import js.Browser;
import nanjizal.visionTriangle.shape.Circle;
import nanjizal.visionTriangle.shape.Line;
import nanjizal.visionTriangle.hxPolyK.PolyK;
import nanjizal.visionTriangle.shape.Triangle;

class Main {
    static function main() {
        
        var image = new Image(250, 250, 0x000000);
        //ellipseFillRadialGradient( image, 130, 50, 30, 40, Color.RED, Color.YELLOW );
        quadrantGradientFill( image, 130, 50, 30, 40, -Math.PI/2, Color.RED, Color.YELLOW );
        lineGradientFill( image, 50, 20, 90, 90, 50, Color.RED, Color.GREEN, Color.YELLOW, Color.BLUE );
        var poly = [ 93., 195., 129., 92., 280., 81., 402., 134., 477., 70., 619., 61., 759., 97., 758., 247., 662., 347., 665., 230., 721., 140., 607., 117., 472., 171., 580., 178., 603., 257., 605., 377., 690., 404., 787., 328., 786., 480., 617., 510., 611., 439., 544., 400., 529., 291., 509., 218., 400., 358., 489., 402., 425., 479., 268., 464., 341., 338., 393., 427., 373., 284., 429., 197., 301., 150., 296., 245., 252., 384., 118., 360., 190., 272., 244., 165., 81., 259., 40., 216.];
        var tgs = PolyK.triangulate( poly ); 
        var triples = new ArrayTriple( tgs );
        var i: Int;
        var ax;
        var ay;
        var bx;
        var by;
        var cx;
        var cy;
        for( tri in triples ){
            i = Std.int( tri.a*2 );
            ax = poly[ i ]/5;
            ay = poly[ i + 1 ]/5 + 100;
            i = Std.int( tri.b*2 );
            bx = poly[ i ]/5;
            by = poly[ i + 1 ]/5 + 100;
            i = Std.int( tri.c*2 );
            cx = poly[ i ]/5;
            cy = poly[ i + 1 ]/5 + 100;
            triangleFill( image, ax, ay, bx, by, cx, cy, 0xFFFF0000 );
        }

/*
        image.drawLine(12, 53, 54, 15, 0xbd0202);
		image.drawLine(56, 248, 181, 95, 0x000355);
		image.drawLine(110, 15, 121, 131, 0x31f300);
		image.drawLine(248, 53, 15, 231, 0xffffff);
		image.drawRect(34, 12, 33, 53, 0xf0ff46);
		image.fillRect(12, 53, 33, 53, 0xffffff);
		image.drawCircle(100, 100, 50, 0x3c896e);
		image.drawCircle(100, 100, 30, 0xff00d4);
		image.fillCircle(200, 200, 40, Color.YELLOW);
		image.drawCircle(180, 190, 5, Color.BROWN);
		image.fillColor(new Point2D(180, 190), Color.BROWN);
		image.drawCircle(220, 190, 5, Color.BROWN);
		image.fillColor(new Point2D(220, 190), Color.BROWN);
		image.drawCircle(200, 225, 8, Color.BROWN);
		image.fillColor(new Point2D(200, 225), Color.BROWN);
		image.drawQuadraticBezier(new Line2D({x: 100, y: 100}, {x: 200, y: 100}), {x: 200, y: 200}, 0x1900ff);
		image.drawCubicBezier(new Line2D({x: 10, y: 10}, {x: 50, y: 100}), {x: 150, y: 200}, {x: 200, y: 75}, 0xff0000);
		image.drawRay2D(new Ray2D({x: 0, y: 0}, 1), 0x00ff00);
		image.drawEllipse(100, 100, 40, 21, 0x9fff9f);
		image.drawRect(20, 200, 60, 40, 0xFF5432);
	    image.fillUntilColor({x: 25, y: 205}, 0xFF48FF, 0xFF5432);
        */
        printImage( image );
    }
    
    public static function printImage( image: Image ) {
		var c = Browser.document.createCanvasElement();
		c.width = image.width;
		c.height = image.height;
		var ctx = c.getContext2d();
		var imageData = ctx.getImageData(0, 0, image.width, image.height);
		var data = imageData.data;
		for (x in 0...image.width) {
			for (y in 0...image.height) {
				var i = (y * image.width + x) * 4;
				data[i] = image.getPixel(x, y).red;
				data[i + 1] = image.getPixel(x, y).green;
				data[i + 2] = image.getPixel(x, y).blue;
				data[i + 3] = 255;
			}
		}
		ctx.putImageData(imageData, 0, 0);
		c.style.padding = "10px";
		Browser.document.body.appendChild(c);
	}
}