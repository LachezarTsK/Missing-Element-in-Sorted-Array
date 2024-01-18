
#include <span>
#include <vector>
using namespace std;

class Solution {
    
public:
    int missingElement(const vector<int>& input, int target) const {
        size_t left = 0;
        size_t right = input.size() - 1;

        while (left <= right) {
            size_t middlePoint = left + (right - left) / 2;

            if (target > missingElementsTillCurrentIndex(input, middlePoint)) {
                left = middlePoint + 1;
            } else {
                right = middlePoint - 1;
            }
        }
        return input[0] + right + target;
    }

private:
    int missingElementsTillCurrentIndex(span<const int> input, size_t index) const {
        int expectedNumberOfPreceedingElements = input[index] - input[0];
        return expectedNumberOfPreceedingElements - index;
    }
};
