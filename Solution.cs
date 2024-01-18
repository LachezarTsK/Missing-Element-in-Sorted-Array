
using System;

public class Solution
{
    public int MissingElement(int[] input, int target)
    {
        int left = 0;
        int right = input.Length - 1;

        while (left <= right)
        {
            int middlePoint = left + (right - left) / 2;

            if (target > MissingElementsTillCurrentIndex(input, middlePoint))
            {
                left = middlePoint + 1;
            }
            else
            {
                right = middlePoint - 1;
            }
        }
        return input[0] + right + target;
    }

    private int MissingElementsTillCurrentIndex(int[] input, int index)
    {
        int expectedNumberOfPreceedingElements = input[index] - input[0];
        return expectedNumberOfPreceedingElements - index;
    }
}
