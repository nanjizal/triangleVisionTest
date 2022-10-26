package nanjizal.visionTriangle.pixelplus;

/**
 not working well need to revise or remove
 just leaving incase get round to debug reconsider
 think it works better in pixelimage
 **/
import vision.ds.Image;
import vision.ds.Color;
import nanjizal.visionTriangle.pixelplus.ChannelHelp;

inline function maskPixel( lhs: Color, rhs: Color ): Color {
    return if( rhs*1 == 0 ){
        return lhs;
    } else {
        // source
        var a1: Float = channelFloat( lhs.alpha  );
        var r1: Float = channelFloat( lhs.red );
        var g1: Float = channelFloat( lhs.green );
        var b1: Float = channelFloat( lhs.blue );
        // mask
        var a2: Float = channelFloat( rhs.alpha );
        var r2: Float = channelFloat( rhs.red );
        var g2: Float = channelFloat( rhs.green );
        var b2: Float = channelFloat( rhs.blue );

        var a = Std.int( (1.-a2)*a1 );
        var r = Std.int( (1.-r2)*r1 );
        var g = Std.int( (1.-g2)*g1 );
        var b = Std.int( (1.-b2)*b1 );
        /*
        var a = boundChannel( (1.-a2)*a1 );
        var r = boundChannel( (1.-r2)*r1 );
        var g = boundChannel( (1.-g2)*g1 );
        var b = boundChannel( (1.-b2)*b1 );
        */
        return Color.fromRGBA( r, g, b, a );
    }
}