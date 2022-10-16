import java.util.*;
import java.io.*;
import java.math.*;

/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/
class Solution {

    public static void main(String args[]) {
        Scanner in = new Scanner(System.in);
        int n = in.nextInt(); // the number of temperatures to analyse
        int min = 10001;

        if (n == 0) {
            System.out.println(0);
            return;
        };
        for (int i = 0; i < n; i++) {
            int t = in.nextInt(); // a temperature expressed as an integer ranging from -273 to 5526
            int temp = t;
            int tempMin = min;

            if (t < 0) t = t * -1;
            if (min < 0) tempMin = tempMin * -1;

            // If two numbers are equally close to zero, positive integer has to be considered closest to zero
            if (t == tempMin && temp > 0) {
                min = temp;
            }
            else if(t < tempMin) min = temp;
        }


        // Write an answer using System.out.println()
        // To debug: System.err.println("Debug messages...");

        System.out.println(min);
    }
}
