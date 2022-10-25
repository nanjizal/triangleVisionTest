// Generated by Haxe 4.3.0-rc.1+
(function ($global) { "use strict";
var $estr = function() { return js_Boot.__string_rec(this,''); },$hxEnums = $hxEnums || {},$_;
function $extend(from, fields) {
	var proto = Object.create(from);
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
var IntIterator = function(min,max) {
	this.min = min;
	this.max = max;
};
IntIterator.__name__ = true;
IntIterator.prototype = {
	hasNext: function() {
		return this.min < this.max;
	}
	,next: function() {
		return this.min++;
	}
};
Math.__name__ = true;
var Std = function() { };
Std.__name__ = true;
Std.string = function(s) {
	return js_Boot.__string_rec(s,"");
};
var haxe_Exception = function(message,previous,native) {
	Error.call(this,message);
	this.message = message;
	this.__previousException = previous;
	this.__nativeException = native != null ? native : this;
};
haxe_Exception.__name__ = true;
haxe_Exception.thrown = function(value) {
	if(((value) instanceof haxe_Exception)) {
		return value.get_native();
	} else if(((value) instanceof Error)) {
		return value;
	} else {
		var e = new haxe_ValueException(value);
		return e;
	}
};
haxe_Exception.__super__ = Error;
haxe_Exception.prototype = $extend(Error.prototype,{
	get_native: function() {
		return this.__nativeException;
	}
});
var haxe_ValueException = function(value,previous,native) {
	haxe_Exception.call(this,String(value),previous,native);
	this.value = value;
};
haxe_ValueException.__name__ = true;
haxe_ValueException.__super__ = haxe_Exception;
haxe_ValueException.prototype = $extend(haxe_Exception.prototype,{
});
var haxe_io_Bytes = function(data) {
	this.length = data.byteLength;
	this.b = new Uint8Array(data);
	this.b.bufferValue = data;
	data.hxBytes = this;
	data.bytes = this.b;
};
haxe_io_Bytes.__name__ = true;
haxe_io_Bytes.prototype = {
	getInt32: function(pos) {
		if(this.data == null) {
			this.data = new DataView(this.b.buffer,this.b.byteOffset,this.b.byteLength);
		}
		return this.data.getInt32(pos,true);
	}
	,setInt32: function(pos,v) {
		if(this.data == null) {
			this.data = new DataView(this.b.buffer,this.b.byteOffset,this.b.byteLength);
		}
		this.data.setInt32(pos,v,true);
	}
	,getString: function(pos,len,encoding) {
		if(pos < 0 || len < 0 || pos + len > this.length) {
			throw haxe_Exception.thrown(haxe_io_Error.OutsideBounds);
		}
		if(encoding == null) {
			encoding = haxe_io_Encoding.UTF8;
		}
		var s = "";
		var b = this.b;
		var i = pos;
		var max = pos + len;
		switch(encoding._hx_index) {
		case 0:
			var debug = pos > 0;
			while(i < max) {
				var c = b[i++];
				if(c < 128) {
					if(c == 0) {
						break;
					}
					s += String.fromCodePoint(c);
				} else if(c < 224) {
					var code = (c & 63) << 6 | b[i++] & 127;
					s += String.fromCodePoint(code);
				} else if(c < 240) {
					var c2 = b[i++];
					var code1 = (c & 31) << 12 | (c2 & 127) << 6 | b[i++] & 127;
					s += String.fromCodePoint(code1);
				} else {
					var c21 = b[i++];
					var c3 = b[i++];
					var u = (c & 15) << 18 | (c21 & 127) << 12 | (c3 & 127) << 6 | b[i++] & 127;
					s += String.fromCodePoint(u);
				}
			}
			break;
		case 1:
			while(i < max) {
				var c = b[i++] | b[i++] << 8;
				s += String.fromCodePoint(c);
			}
			break;
		}
		return s;
	}
	,toString: function() {
		return this.getString(0,this.length);
	}
};
var haxe_io_Encoding = $hxEnums["haxe.io.Encoding"] = { __ename__:true,__constructs__:null
	,UTF8: {_hx_name:"UTF8",_hx_index:0,__enum__:"haxe.io.Encoding",toString:$estr}
	,RawNative: {_hx_name:"RawNative",_hx_index:1,__enum__:"haxe.io.Encoding",toString:$estr}
};
haxe_io_Encoding.__constructs__ = [haxe_io_Encoding.UTF8,haxe_io_Encoding.RawNative];
var haxe_io_Error = $hxEnums["haxe.io.Error"] = { __ename__:true,__constructs__:null
	,Blocked: {_hx_name:"Blocked",_hx_index:0,__enum__:"haxe.io.Error",toString:$estr}
	,Overflow: {_hx_name:"Overflow",_hx_index:1,__enum__:"haxe.io.Error",toString:$estr}
	,OutsideBounds: {_hx_name:"OutsideBounds",_hx_index:2,__enum__:"haxe.io.Error",toString:$estr}
	,Custom: ($_=function(e) { return {_hx_index:3,e:e,__enum__:"haxe.io.Error",toString:$estr}; },$_._hx_name="Custom",$_.__params__ = ["e"],$_)
};
haxe_io_Error.__constructs__ = [haxe_io_Error.Blocked,haxe_io_Error.Overflow,haxe_io_Error.OutsideBounds,haxe_io_Error.Custom];
var haxe_iterators_ArrayIterator = function(array) {
	this.current = 0;
	this.array = array;
};
haxe_iterators_ArrayIterator.__name__ = true;
haxe_iterators_ArrayIterator.prototype = {
	hasNext: function() {
		return this.current < this.array.length;
	}
	,next: function() {
		return this.array[this.current++];
	}
};
var js_Boot = function() { };
js_Boot.__name__ = true;
js_Boot.__string_rec = function(o,s) {
	if(o == null) {
		return "null";
	}
	if(s.length >= 5) {
		return "<...>";
	}
	var t = typeof(o);
	if(t == "function" && (o.__name__ || o.__ename__)) {
		t = "object";
	}
	switch(t) {
	case "function":
		return "<function>";
	case "object":
		if(o.__enum__) {
			var e = $hxEnums[o.__enum__];
			var con = e.__constructs__[o._hx_index];
			var n = con._hx_name;
			if(con.__params__) {
				s = s + "\t";
				return n + "(" + ((function($this) {
					var $r;
					var _g = [];
					{
						var _g1 = 0;
						var _g2 = con.__params__;
						while(true) {
							if(!(_g1 < _g2.length)) {
								break;
							}
							var p = _g2[_g1];
							_g1 = _g1 + 1;
							_g.push(js_Boot.__string_rec(o[p],s));
						}
					}
					$r = _g;
					return $r;
				}(this))).join(",") + ")";
			} else {
				return n;
			}
		}
		if(((o) instanceof Array)) {
			var str = "[";
			s += "\t";
			var _g = 0;
			var _g1 = o.length;
			while(_g < _g1) {
				var i = _g++;
				str += (i > 0 ? "," : "") + js_Boot.__string_rec(o[i],s);
			}
			str += "]";
			return str;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( _g ) {
			return "???";
		}
		if(tostr != null && tostr != Object.toString && typeof(tostr) == "function") {
			var s2 = o.toString();
			if(s2 != "[object Object]") {
				return s2;
			}
		}
		var str = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		var k = null;
		for( k in o ) {
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
			continue;
		}
		if(str.length != 2) {
			str += ", \n";
		}
		str += s + k + " : " + js_Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str += "\n" + s + "}";
		return str;
	case "string":
		return o;
	default:
		return String(o);
	}
};
var nanjizal_visionTriangle_Main = function() { };
nanjizal_visionTriangle_Main.__name__ = true;
nanjizal_visionTriangle_Main.main = function() {
	var color = 0;
	if(color == null) {
		color = 0;
	}
	var this1 = new haxe_io_Bytes(new ArrayBuffer(250000 + vision_ds_Image.OFFSET));
	var this2 = this1;
	this2.setInt32(0,250);
	var i = 4;
	while(i < this2.length) {
		this2.b[i] = color >> 24 & 255;
		this2.b[i + 1] = color >> 16 & 255;
		this2.b[i + 2] = color >> 8 & 255;
		this2.b[i + 3] = color & 255;
		i += 4;
	}
	var image = this2;
	var rotation = -Math.PI / 2;
	var colorIn = -65536;
	var colorOut = -256;
	var rSmall = 30;
	var targetE = 0.5;
	if(targetE == null) {
		targetE = 0.5;
	}
	var result = Math.ceil(Math.PI / Math.acos(1 - targetE / rSmall));
	var noSides = result < 12 ? 12 : result > 500 ? 500 : result;
	var sides = Math.ceil(noSides / 4) * 4;
	var theta = 2 * Math.PI / sides + 0.01;
	var lastX = 130 + 30 * Math.cos((sides + 1) * theta + rotation);
	var lastY = 50 + 40 * Math.sin((sides + 1) * theta + rotation);
	var _g = 0;
	var _g1 = (sides / 4 | 0) + 1;
	while(_g < _g1) {
		var i = _g++;
		var nextX = 130 + 30 * Math.cos(i * theta + rotation);
		var nextY = 50 + 40 * Math.sin(i * theta + rotation);
		var aA = colorOut >> 24 & 255;
		var rA = colorOut >> 16 & 255;
		var gA = colorOut >> 8 & 255;
		var bA = colorOut & 255;
		var aB = colorIn >> 24 & 255;
		var rB = colorIn >> 16 & 255;
		var gB = colorIn >> 8 & 255;
		var bB = colorIn & 255;
		var aC = colorOut >> 24 & 255;
		var rC = colorOut >> 16 & 255;
		var gC = colorOut >> 8 & 255;
		var bC = colorOut & 255;
		var bcx = lastX - nextX;
		var bcy = lastY - nextY;
		var acx = 130 - nextX;
		var acy = 50 - nextY;
		var dot11 = bcx * bcx + bcy * bcy;
		var dot12 = bcx * acx + bcy * acy;
		var dot22 = acx * acx + acy * acy;
		var denom1 = 1 / (dot11 * dot22 - dot12 * dot12);
		var _g2 = nextX > lastX ? nextX > 130 ? new IntIterator(lastX > 130 ? Math.floor(130) : Math.floor(lastX),Math.ceil(nextX)) : new IntIterator(Math.floor(lastX),Math.ceil(130)) : lastX > 130 ? new IntIterator(nextX > 130 ? Math.floor(130) : Math.ceil(nextX),Math.ceil(lastX)) : new IntIterator(Math.floor(nextX),Math.ceil(130));
		while(_g2.min < _g2.max) {
			var px = _g2.min++;
			var pcx = px - nextX;
			var _g3 = nextY > lastY ? nextY > 50 ? new IntIterator(lastY > 50 ? Math.floor(50) : Math.floor(lastY),Math.ceil(nextY)) : new IntIterator(Math.floor(lastY),Math.ceil(50)) : lastY > 50 ? new IntIterator(nextY > 50 ? Math.floor(50) : Math.ceil(nextY),Math.ceil(lastY)) : new IntIterator(Math.floor(nextY),Math.ceil(50));
			while(_g3.min < _g3.max) {
				var py = _g3.min++;
				var pcy = py - nextY;
				var dot31 = pcx * bcx + pcy * bcy;
				var dot32 = pcx * acx + pcy * acy;
				var ratioA = (dot22 * dot31 - dot12 * dot32) * denom1;
				var ratioB = (dot11 * dot32 - dot12 * dot31) * denom1;
				var ratioC = 1.0 - ratioB - ratioA;
				if(ratioA >= 0 && ratioB >= 0 && ratioC >= 0) {
					var i1 = aA * ratioA + aB * ratioB + aC * ratioC | 0;
					if(i1 > 255) {
						i1 = 255;
					}
					if(i1 < 0) {
						i1 = 0;
					}
					var a = i1;
					var i2 = rA * ratioA + rB * ratioB + rC * ratioC | 0;
					if(i2 > 255) {
						i2 = 255;
					}
					if(i2 < 0) {
						i2 = 0;
					}
					var r = i2;
					var i3 = gA * ratioA + gB * ratioB + gC * ratioC | 0;
					if(i3 > 255) {
						i3 = 255;
					}
					if(i3 < 0) {
						i3 = 0;
					}
					var g = i3;
					var i4 = bA * ratioA + bB * ratioB + bC * ratioC | 0;
					if(i4 > 255) {
						i4 = 255;
					}
					if(i4 < 0) {
						i4 = 0;
					}
					var b = i4;
					var Alpha = a;
					if(Alpha == null) {
						Alpha = 255;
					}
					var this1 = 0;
					var color = this1;
					var Alpha1 = Alpha;
					if(Alpha1 == null) {
						Alpha1 = 255;
					}
					color &= -16711681;
					color |= (r > 255 ? 255 : r < 0 ? 0 : r) << 16;
					color &= -65281;
					color |= (g > 255 ? 255 : g < 0 ? 0 : g) << 8;
					color &= -256;
					color |= b > 255 ? 255 : b < 0 ? 0 : b;
					color &= 16777215;
					color |= (Alpha1 > 255 ? 255 : Alpha1 < 0 ? 0 : Alpha1) << 24;
					var color1 = color;
					if(!(px >= 0 && py >= 0 && px < image.getInt32(0) && py < Math.ceil((image.length - vision_ds_Image.OFFSET) / (image.getInt32(0) * 4)))) {
						var this_x = px;
						var this_y = py;
						throw haxe_Exception.thrown(new vision_exceptions_OutOfBounds(image,new vision_ds_Point2D(this_x,this_y)));
					}
					var position = (py * image.getInt32(0) + px) * 4;
					position += vision_ds_Image.OFFSET;
					image.b[position] = color1 >> 24 & 255;
					image.b[position + 1] = color1 >> 16 & 255;
					image.b[position + 2] = color1 >> 8 & 255;
					image.b[position + 3] = color1 & 255;
				}
			}
		}
		lastX = nextX;
		lastY = nextY;
	}
	var colorA = -65536;
	var colorB = -16711936;
	var colorC = -256;
	var colorD = -16776961;
	var o = 70;
	var a = 70;
	var h = Math.pow(o * o + a * a,0.5);
	var theta = Math.atan2(o,a);
	var sin = Math.sin(theta);
	var cos = Math.cos(theta);
	var radius = 25.;
	var dx = 0.1;
	var dy = radius;
	var cx = h;
	var cy = radius;
	var bx = h;
	var by = -radius;
	var ax = 0.1;
	var ay = -radius;
	var temp = 0.;
	temp = 50 + (ax * cos - ay * sin);
	ay = 20 + (ay * cos + ax * sin);
	ax = temp;
	temp = 50 + (bx * cos - by * sin);
	by = 20 + (by * cos + bx * sin);
	bx = temp;
	temp = 50 + (cx * cos - cy * sin);
	cy = 20 + (cy * cos + cx * sin);
	cx = temp;
	temp = 50 + (dx * cos - dy * sin);
	dy = 20 + (dy * cos + dx * sin);
	dx = temp;
	var aA = colorB >> 24 & 255;
	var rA = colorB >> 16 & 255;
	var gA = colorB >> 8 & 255;
	var bA = colorB & 255;
	var aB = colorA >> 24 & 255;
	var rB = colorA >> 16 & 255;
	var gB = colorA >> 8 & 255;
	var bB = colorA & 255;
	var aC = colorD >> 24 & 255;
	var rC = colorD >> 16 & 255;
	var gC = colorD >> 8 & 255;
	var bC = colorD & 255;
	var bcx = bx - dx;
	var bcy = by - dy;
	var acx = ax - dx;
	var acy = ay - dy;
	var dot11 = bcx * bcx + bcy * bcy;
	var dot12 = bcx * acx + bcy * acy;
	var dot22 = acx * acx + acy * acy;
	var denom1 = 1 / (dot11 * dot22 - dot12 * dot12);
	var _g = dx > bx ? dx > ax ? new IntIterator(bx > ax ? Math.floor(ax) : Math.floor(bx),Math.ceil(dx)) : new IntIterator(Math.floor(bx),Math.ceil(ax)) : bx > ax ? new IntIterator(dx > ax ? Math.floor(ax) : Math.ceil(dx),Math.ceil(bx)) : new IntIterator(Math.floor(dx),Math.ceil(ax));
	while(_g.min < _g.max) {
		var px = _g.min++;
		var pcx = px - dx;
		var _g1 = dy > by ? dy > ay ? new IntIterator(by > ay ? Math.floor(ay) : Math.floor(by),Math.ceil(dy)) : new IntIterator(Math.floor(by),Math.ceil(ay)) : by > ay ? new IntIterator(dy > ay ? Math.floor(ay) : Math.ceil(dy),Math.ceil(by)) : new IntIterator(Math.floor(dy),Math.ceil(ay));
		while(_g1.min < _g1.max) {
			var py = _g1.min++;
			var pcy = py - dy;
			var dot31 = pcx * bcx + pcy * bcy;
			var dot32 = pcx * acx + pcy * acy;
			var ratioA = (dot22 * dot31 - dot12 * dot32) * denom1;
			var ratioB = (dot11 * dot32 - dot12 * dot31) * denom1;
			var ratioC = 1.0 - ratioB - ratioA;
			if(ratioA >= 0 && ratioB >= 0 && ratioC >= 0) {
				var i = aA * ratioA + aB * ratioB + aC * ratioC | 0;
				if(i > 255) {
					i = 255;
				}
				if(i < 0) {
					i = 0;
				}
				var a = i;
				var i1 = rA * ratioA + rB * ratioB + rC * ratioC | 0;
				if(i1 > 255) {
					i1 = 255;
				}
				if(i1 < 0) {
					i1 = 0;
				}
				var r = i1;
				var i2 = gA * ratioA + gB * ratioB + gC * ratioC | 0;
				if(i2 > 255) {
					i2 = 255;
				}
				if(i2 < 0) {
					i2 = 0;
				}
				var g = i2;
				var i3 = bA * ratioA + bB * ratioB + bC * ratioC | 0;
				if(i3 > 255) {
					i3 = 255;
				}
				if(i3 < 0) {
					i3 = 0;
				}
				var b = i3;
				var Alpha = a;
				if(Alpha == null) {
					Alpha = 255;
				}
				var this1 = 0;
				var color = this1;
				var Alpha1 = Alpha;
				if(Alpha1 == null) {
					Alpha1 = 255;
				}
				color &= -16711681;
				color |= (r > 255 ? 255 : r < 0 ? 0 : r) << 16;
				color &= -65281;
				color |= (g > 255 ? 255 : g < 0 ? 0 : g) << 8;
				color &= -256;
				color |= b > 255 ? 255 : b < 0 ? 0 : b;
				color &= 16777215;
				color |= (Alpha1 > 255 ? 255 : Alpha1 < 0 ? 0 : Alpha1) << 24;
				var color1 = color;
				if(!(px >= 0 && py >= 0 && px < image.getInt32(0) && py < Math.ceil((image.length - vision_ds_Image.OFFSET) / (image.getInt32(0) * 4)))) {
					var this_x = px;
					var this_y = py;
					throw haxe_Exception.thrown(new vision_exceptions_OutOfBounds(image,new vision_ds_Point2D(this_x,this_y)));
				}
				var position = (py * image.getInt32(0) + px) * 4;
				position += vision_ds_Image.OFFSET;
				image.b[position] = color1 >> 24 & 255;
				image.b[position + 1] = color1 >> 16 & 255;
				image.b[position + 2] = color1 >> 8 & 255;
				image.b[position + 3] = color1 & 255;
			}
		}
	}
	var aA = colorC >> 24 & 255;
	var rA = colorC >> 16 & 255;
	var gA = colorC >> 8 & 255;
	var bA = colorC & 255;
	var aB = colorB >> 24 & 255;
	var rB = colorB >> 16 & 255;
	var gB = colorB >> 8 & 255;
	var bB = colorB & 255;
	var aC = colorD >> 24 & 255;
	var rC = colorD >> 16 & 255;
	var gC = colorD >> 8 & 255;
	var bC = colorD & 255;
	var bcx = cx - dx;
	var bcy = cy - dy;
	var acx = bx - dx;
	var acy = by - dy;
	var dot11 = bcx * bcx + bcy * bcy;
	var dot12 = bcx * acx + bcy * acy;
	var dot22 = acx * acx + acy * acy;
	var denom1 = 1 / (dot11 * dot22 - dot12 * dot12);
	var _g = dx > cx ? dx > bx ? new IntIterator(cx > bx ? Math.floor(bx) : Math.floor(cx),Math.ceil(dx)) : new IntIterator(Math.floor(cx),Math.ceil(bx)) : cx > bx ? new IntIterator(dx > bx ? Math.floor(bx) : Math.ceil(dx),Math.ceil(cx)) : new IntIterator(Math.floor(dx),Math.ceil(bx));
	while(_g.min < _g.max) {
		var px = _g.min++;
		var pcx = px - dx;
		var _g1 = dy > cy ? dy > by ? new IntIterator(cy > by ? Math.floor(by) : Math.floor(cy),Math.ceil(dy)) : new IntIterator(Math.floor(cy),Math.ceil(by)) : cy > by ? new IntIterator(dy > by ? Math.floor(by) : Math.ceil(dy),Math.ceil(cy)) : new IntIterator(Math.floor(dy),Math.ceil(by));
		while(_g1.min < _g1.max) {
			var py = _g1.min++;
			var pcy = py - dy;
			var dot31 = pcx * bcx + pcy * bcy;
			var dot32 = pcx * acx + pcy * acy;
			var ratioA = (dot22 * dot31 - dot12 * dot32) * denom1;
			var ratioB = (dot11 * dot32 - dot12 * dot31) * denom1;
			var ratioC = 1.0 - ratioB - ratioA;
			if(ratioA >= 0 && ratioB >= 0 && ratioC >= 0) {
				var i = aA * ratioA + aB * ratioB + aC * ratioC | 0;
				if(i > 255) {
					i = 255;
				}
				if(i < 0) {
					i = 0;
				}
				var a = i;
				var i1 = rA * ratioA + rB * ratioB + rC * ratioC | 0;
				if(i1 > 255) {
					i1 = 255;
				}
				if(i1 < 0) {
					i1 = 0;
				}
				var r = i1;
				var i2 = gA * ratioA + gB * ratioB + gC * ratioC | 0;
				if(i2 > 255) {
					i2 = 255;
				}
				if(i2 < 0) {
					i2 = 0;
				}
				var g = i2;
				var i3 = bA * ratioA + bB * ratioB + bC * ratioC | 0;
				if(i3 > 255) {
					i3 = 255;
				}
				if(i3 < 0) {
					i3 = 0;
				}
				var b = i3;
				var Alpha = a;
				if(Alpha == null) {
					Alpha = 255;
				}
				var this1 = 0;
				var color = this1;
				var Alpha1 = Alpha;
				if(Alpha1 == null) {
					Alpha1 = 255;
				}
				color &= -16711681;
				color |= (r > 255 ? 255 : r < 0 ? 0 : r) << 16;
				color &= -65281;
				color |= (g > 255 ? 255 : g < 0 ? 0 : g) << 8;
				color &= -256;
				color |= b > 255 ? 255 : b < 0 ? 0 : b;
				color &= 16777215;
				color |= (Alpha1 > 255 ? 255 : Alpha1 < 0 ? 0 : Alpha1) << 24;
				var color1 = color;
				if(!(px >= 0 && py >= 0 && px < image.getInt32(0) && py < Math.ceil((image.length - vision_ds_Image.OFFSET) / (image.getInt32(0) * 4)))) {
					var this_x = px;
					var this_y = py;
					throw haxe_Exception.thrown(new vision_exceptions_OutOfBounds(image,new vision_ds_Point2D(this_x,this_y)));
				}
				var position = (py * image.getInt32(0) + px) * 4;
				position += vision_ds_Image.OFFSET;
				image.b[position] = color1 >> 24 & 255;
				image.b[position + 1] = color1 >> 16 & 255;
				image.b[position + 2] = color1 >> 8 & 255;
				image.b[position + 3] = color1 & 255;
			}
		}
	}
	var poly = [93.,195.,129.,92.,280.,81.,402.,134.,477.,70.,619.,61.,759.,97.,758.,247.,662.,347.,665.,230.,721.,140.,607.,117.,472.,171.,580.,178.,603.,257.,605.,377.,690.,404.,787.,328.,786.,480.,617.,510.,611.,439.,544.,400.,529.,291.,509.,218.,400.,358.,489.,402.,425.,479.,268.,464.,341.,338.,393.,427.,373.,284.,429.,197.,301.,150.,296.,245.,252.,384.,118.,360.,190.,272.,244.,165.,81.,259.,40.,216.];
	var n = poly.length >> 1;
	var tgs;
	if(n < 3) {
		tgs = [];
	} else {
		var tgs1 = [];
		var avl = [];
		var _g = 0;
		var _g1 = n;
		while(_g < _g1) {
			var i = _g++;
			avl.push(i);
		}
		var i = 0;
		var al = n;
		var i0;
		var i1;
		var i2;
		var ax;
		var ay;
		var bx;
		var by;
		var cx;
		var cy;
		var earFound;
		while(al > 3) {
			i0 = avl[i % al];
			i1 = avl[(i + 1) % al];
			i2 = avl[(i + 2) % al];
			ax = poly[2 * i0];
			ay = poly[2 * i0 + 1];
			bx = poly[2 * i1];
			by = poly[2 * i1 + 1];
			cx = poly[2 * i2];
			cy = poly[2 * i2 + 1];
			earFound = false;
			if((ay - by) * (cx - bx) + (bx - ax) * (cy - by) >= 0) {
				earFound = true;
				var _g = 0;
				var _g1 = al;
				while(_g < _g1) {
					var j = _g++;
					var vi = avl[j];
					if(vi == i0 || vi == i1 || vi == i2) {
						continue;
					}
					var v0x = cx - ax;
					var v0y = cy - ay;
					var v1x = bx - ax;
					var v1y = by - ay;
					var v2x = poly[2 * vi] - ax;
					var v2y = poly[2 * vi + 1] - ay;
					var dot00 = v0x * v0x + v0y * v0y;
					var dot01 = v0x * v1x + v0y * v1y;
					var dot02 = v0x * v2x + v0y * v2y;
					var dot11 = v1x * v1x + v1y * v1y;
					var dot12 = v1x * v2x + v1y * v2y;
					var invDenom = 1 / (dot00 * dot11 - dot01 * dot01);
					var u = (dot11 * dot02 - dot01 * dot12) * invDenom;
					var v = (dot00 * dot12 - dot01 * dot02) * invDenom;
					if(u >= 0 && v >= 0 && u + v < 1) {
						earFound = false;
						break;
					}
				}
			}
			if(earFound) {
				tgs1.push(i0);
				tgs1.push(i1);
				tgs1.push(i2);
				avl.splice((i + 1) % al,1);
				--al;
				i = 0;
			} else if(i++ > 3 * al) {
				break;
			}
		}
		tgs1.push(avl[0]);
		tgs1.push(avl[1]);
		tgs1.push(avl[2]);
		tgs = tgs1;
	}
	var triples = nanjizal_visionTriangle_hxPolyK_ArrayTriple._new(tgs);
	var i;
	var ax;
	var ay;
	var bx;
	var by;
	var cx;
	var cy;
	var _g = 0;
	while(_g < (triples.length / 3 | 0)) {
		var i1 = _g * 3 | 0;
		var tri_a = triples[i1];
		var tri_b = triples[i1 + 1];
		var tri_c = triples[i1 + 2];
		++_g;
		i = tri_a * 2 | 0;
		ax = poly[i] / 5;
		ay = poly[i + 1] / 5 + 100;
		i = tri_b * 2 | 0;
		bx = poly[i] / 5;
		by = poly[i + 1] / 5 + 100;
		i = tri_c * 2 | 0;
		cx = poly[i] / 5;
		cy = poly[i + 1] / 5 + 100;
		var bx1 = bx;
		var by1 = by;
		var cx1 = cx;
		var cy1 = cy;
		var adjustWinding = ax * by1 - bx1 * ay + (bx1 * cy1 - cx1 * by1) + (cx1 * ay - ax * cy1) > 0;
		if(!adjustWinding) {
			var bx_ = bx1;
			var by_ = by1;
			bx1 = cx1;
			by1 = cy1;
			cx1 = bx_;
			cy1 = by_;
		}
		var s0 = ay * cx1 - ax * cy1;
		var sx = cy1 - ay;
		var sy = ax - cx1;
		var t0 = ax * by1 - ay * bx1;
		var tx = ay - by1;
		var ty = bx1 - ax;
		var A = -by1 * cx1 + ay * (-bx1 + cx1) + ax * (by1 - cy1) + bx1 * cy1;
		var ii = ay > by1 ? ay > cy1 ? new IntIterator(by1 > cy1 ? Math.floor(cy1) : Math.floor(by1),Math.ceil(ay)) : new IntIterator(Math.floor(by1),Math.ceil(cy1)) : by1 > cy1 ? new IntIterator(ay > cy1 ? Math.floor(cy1) : Math.ceil(ay),Math.ceil(by1)) : new IntIterator(Math.floor(ay),Math.ceil(cy1));
		var this1 = new nanjizal_visionTriangle_iter_IntIterStart(ii.min,ii.max);
		var yIter3 = this1;
		var foundY = false;
		var s = 0.;
		var t = 0.;
		var sxx = 0.;
		var txx = 0.;
		var _g1 = ax > bx1 ? ax > cx1 ? new IntIterator(bx1 > cx1 ? Math.floor(cx1) : Math.floor(bx1),Math.ceil(ax)) : new IntIterator(Math.floor(bx1),Math.ceil(cx1)) : bx1 > cx1 ? new IntIterator(ax > cx1 ? Math.floor(cx1) : Math.ceil(ax),Math.ceil(bx1)) : new IntIterator(Math.floor(ax),Math.ceil(cx1));
		while(_g1.min < _g1.max) {
			var x = _g1.min++;
			sxx = sx * x;
			txx = tx * x;
			foundY = false;
			var _g_min = yIter3.start;
			var _g_max = yIter3.max;
			while(_g_min < _g_max) {
				var y = _g_min++;
				s = s0 + sxx + sy * y;
				t = t0 + txx + ty * y;
				if(s <= 0 || t <= 0) {
					if(foundY) {
						break;
					}
				} else if(s + t < A) {
					if(!(x >= 0 && y >= 0 && x < image.getInt32(0) && y < Math.ceil((image.length - vision_ds_Image.OFFSET) / (image.getInt32(0) * 4)))) {
						var this_x = x;
						var this_y = y;
						throw haxe_Exception.thrown(new vision_exceptions_OutOfBounds(image,new vision_ds_Point2D(this_x,this_y)));
					}
					var position = (y * image.getInt32(0) + x) * 4;
					position += vision_ds_Image.OFFSET;
					image.b[position] = 255;
					image.b[position + 1] = 255;
					image.b[position + 2] = 0;
					image.b[position + 3] = 0;
					foundY = true;
				} else if(foundY) {
					break;
				}
			}
		}
	}
	nanjizal_visionTriangle_Main.printImage(image);
};
nanjizal_visionTriangle_Main.printImage = function(image) {
	var c = window.document.createElement("canvas");
	c.width = image.getInt32(0);
	c.height = Math.ceil((image.length - vision_ds_Image.OFFSET) / (image.getInt32(0) * 4));
	var ctx = c.getContext("2d",null);
	var imageData = ctx.getImageData(0,0,image.getInt32(0),Math.ceil((image.length - vision_ds_Image.OFFSET) / (image.getInt32(0) * 4)));
	var data = imageData.data;
	var _g = 0;
	var _g1 = image.getInt32(0);
	while(_g < _g1) {
		var x = _g++;
		var _g2 = 0;
		var _g3 = Math.ceil((image.length - vision_ds_Image.OFFSET) / (image.getInt32(0) * 4));
		while(_g2 < _g3) {
			var y = _g2++;
			var i = (y * image.getInt32(0) + x) * 4;
			if(!(x >= 0 && y >= 0 && x < image.getInt32(0) && y < Math.ceil((image.length - vision_ds_Image.OFFSET) / (image.getInt32(0) * 4)))) {
				var this_x = x;
				var this_y = y;
				throw haxe_Exception.thrown(new vision_exceptions_OutOfBounds(image,new vision_ds_Point2D(this_x,this_y)));
			}
			var position = (y * image.getInt32(0) + x) * 4;
			position += vision_ds_Image.OFFSET;
			var value = image.b[position] << 24 | image.b[position + 1] << 16 | image.b[position + 2] << 8 | image.b[position + 3];
			if(value == null) {
				value = 0;
			}
			var this1 = value;
			data[i] = this1 >> 16 & 255;
			if(!(x >= 0 && y >= 0 && x < image.getInt32(0) && y < Math.ceil((image.length - vision_ds_Image.OFFSET) / (image.getInt32(0) * 4)))) {
				var this_x1 = x;
				var this_y1 = y;
				throw haxe_Exception.thrown(new vision_exceptions_OutOfBounds(image,new vision_ds_Point2D(this_x1,this_y1)));
			}
			var position1 = (y * image.getInt32(0) + x) * 4;
			position1 += vision_ds_Image.OFFSET;
			var value1 = image.b[position1] << 24 | image.b[position1 + 1] << 16 | image.b[position1 + 2] << 8 | image.b[position1 + 3];
			if(value1 == null) {
				value1 = 0;
			}
			var this2 = value1;
			data[i + 1] = this2 >> 8 & 255;
			if(!(x >= 0 && y >= 0 && x < image.getInt32(0) && y < Math.ceil((image.length - vision_ds_Image.OFFSET) / (image.getInt32(0) * 4)))) {
				var this_x2 = x;
				var this_y2 = y;
				throw haxe_Exception.thrown(new vision_exceptions_OutOfBounds(image,new vision_ds_Point2D(this_x2,this_y2)));
			}
			var position2 = (y * image.getInt32(0) + x) * 4;
			position2 += vision_ds_Image.OFFSET;
			var value2 = image.b[position2] << 24 | image.b[position2 + 1] << 16 | image.b[position2 + 2] << 8 | image.b[position2 + 3];
			if(value2 == null) {
				value2 = 0;
			}
			var this3 = value2;
			data[i + 2] = this3 & 255;
			data[i + 3] = 255;
		}
	}
	ctx.putImageData(imageData,0,0);
	c.style.padding = "10px";
	window.document.body.appendChild(c);
};
var nanjizal_visionTriangle_hxPolyK_ArrayTriple = {};
nanjizal_visionTriangle_hxPolyK_ArrayTriple._new = function(arr) {
	var this1 = arr;
	return this1;
};
var nanjizal_visionTriangle_iter_IntIterStart = function(min_,max_) {
	this.start = min_;
	this.max = max_;
};
nanjizal_visionTriangle_iter_IntIterStart.__name__ = true;
var vision_ds_Image = {};
var vision_ds_Line2D = function(start,end) {
	this.end = new vision_ds_Point2D(0,0);
	this.start = new vision_ds_Point2D(0,0);
	this.start.x = start.x;
	this.start.y = start.y;
	this.end.x = end.x;
	this.end.y = end.y;
	var x = end.x - start.x;
	var y = end.y - start.y;
	this.radians = Math.atan2(x,y);
	this.slope = Math.tan(this.radians);
	this.degrees = this.radians * 180 / Math.PI;
};
vision_ds_Line2D.__name__ = true;
vision_ds_Line2D.prototype = {
	toString: function() {
		return "\n (" + Std.string(this.start) + ".x, " + Std.string(this.start) + ".y) --> (" + Std.string(this.end) + ".x, " + Std.string(this.end) + ".y)";
	}
};
var vision_ds_Point2D = function(x,y) {
	if(y == null) {
		y = 0;
	}
	if(x == null) {
		x = 0;
	}
	this.x = x;
	this.y = y;
};
vision_ds_Point2D.__name__ = true;
vision_ds_Point2D.prototype = {
	toString: function() {
		return "(" + this.x + ", " + this.y + ")";
	}
};
var vision_exceptions_VisionException = function(message,type) {
	throw "Exception - " + type + ":\n\n\t" + message + "\n";
};
vision_exceptions_VisionException.__name__ = true;
var vision_exceptions_OutOfBounds = function(image,position) {
	vision_exceptions_VisionException.call(this,"pixel " + Std.string(position) + " is outside the bounds of the image (size: " + image.getInt32(0) + "x" + Math.ceil((image.length - vision_ds_Image.OFFSET) / (image.getInt32(0) * 4)) + ", position: " + Std.string(position) + ")","Pixel Coordinates Out Of Bounds");
};
vision_exceptions_OutOfBounds.__name__ = true;
vision_exceptions_OutOfBounds.__super__ = vision_exceptions_VisionException;
vision_exceptions_OutOfBounds.prototype = $extend(vision_exceptions_VisionException.prototype,{
});
if( String.fromCodePoint == null ) String.fromCodePoint = function(c) { return c < 0x10000 ? String.fromCharCode(c) : String.fromCharCode((c>>10)+0xD7C0)+String.fromCharCode((c&0x3FF)+0xDC00); }
String.__name__ = true;
Array.__name__ = true;
js_Boot.__toStr = ({ }).toString;
vision_ds_Image.OFFSET = 4;
nanjizal_visionTriangle_Main.main();
})({});