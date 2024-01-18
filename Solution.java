
public class Solution {

    public int missingElement(int[] input, int target) {
        int left = 0;
        int right = input.length - 1;

        while (left <= right) {
            int middlePoint = left + (right - left) / 2;

            if (target > missingElementsTillCurrentIndex(input, middlePoint)) {
                left = middlePoint + 1;
            } else {
                right = middlePoint - 1;
            }
        }
        return input[0] + right + target;
    }

    private int missingElementsTillCurrentIndex(int[] input, int index) {
        int expectedNumberOfPreceedingElements = input[index] - input[0];
        return expectedNumberOfPreceedingElements - index;
    }
}
