package be.oddella.codewars;

import java.nio.ByteBuffer;

import static java.lang.Long.toBinaryString;

public class LongToIp {
    public static String longToIP(long ip) {
        //normalize
        StringBuilder stringBuilder = new StringBuilder(toBinaryString(ip));
        stringBuilder.insert(0, "0".repeat(Math.max(0, 32 - stringBuilder.length())));
        String binary = stringBuilder.toString();

        //convert
        int bytes = binary.toCharArray().length / 8;
        StringBuilder result = new StringBuilder();
        for(int i=0; i<bytes; i++) {
            result.append(Integer.parseInt(binary.substring(i*8, (i+1)*8), 2));
            if(i<bytes-1) result.append(".");
        }
        return result.toString();
    }
}
