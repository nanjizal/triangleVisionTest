package nanjizal.visionTriangle.pixelplus;

inline function boundChannel( f: Float ): Int {
    var i = Std.int( f );
    if( i > 0xFF ) i = 0xFF;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
    if( i < 0 ) i = 0;
    return i;
  }
inline function colBlendFunc( x1: Float, x2: Float, a3: Float, a2: Float ): Int
    return Std.int( 255 * ( x1 * a3 + x2 * a2 ) );
inline function alphaBlendFunc( a3: Float, a2: Float ): Int
    return Std.int( 255 * ( a3 + a2 ) );
inline function channelFloat( color: Int ): Float
return ( color == 0 )? 0.: color/255;