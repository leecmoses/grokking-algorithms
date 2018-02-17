# 1 - Introduction to Algorithms
"""
Resource:
https://www.pythontutor.com
* Algorithm is a set of instructions for accomplishing a task.

Binary Search
    * Binary search is an algorithm; its input is a sorted list of elements.
    * If an element you're looking for is in that list, binary search returns the position where its located.
    * Otherwise, binary search returns null.

Logarithms
Resource - Intro to logarithms: 
https://www.khanacademy.org/math/algebra2/exponential-and-logarithmic-functions/introduction-to-logarithms/v/logarithms
    * Logs are the flip of exponentials
    * Anything to the power of zero is equal to 1.
    * Log, base anything of 1 is equal to zero
"""

def binary_search(list, item):
    low = 0
    high = len(list)-1

    while low <= high:
        mid = int((low + high) / 2)
        guess = list[mid]
        if guess == item:
            return mid
        if guess > item:
            high = mid - 1
        else:
            low = mid + 1
    return None

my_list = [1, 3, 5, 7, 9]

print(binary_search(my_list, 3)) # => 1
print(binary_search(my_list, -1)) # => None

"""
1.1 Suppose you have a sorted list of 128 names, and you're searching through it using binary search. What's the maximum number of steps it would take?
    A: 7

1.2 Suppose you double the size of the list. What's the maximum number of steps now?
    A: 8

Running Time
    * Generally you want to choose the most efficient algorithm - whether you're trying to optimize for time or space.
    * Simple search - for any list of n, it takes n seps to run in the worst case.
        * Linear time
        * O(n)
    * Binary search - takes log base 2 of n steps to run in the worst case.
        * Logarithmic time (or log time)
        * O(log n)

Big O Notation
    * Big O notation tells you how fast an algorithm is.
        * Big O notation lets you compare the number of operations!
        * Big O notation is about the worst-case scenario.
    * As the number of items increases, binary search takes a little more time to run.
    * But simple search takes a lot more time to run.
    * So as the list of numbers gets bigger, binary search suddenly becomes a lot faster than simple search.

Some Common Big O Run times
    * Sorted from fastest to slowest:
        * O(log n), also known as log time. Example: Binary search.
        * O(n), also known as linear time. Example: Simple search.
        * O(n * log n). Example: A fast sorting algorithm, like quicksort.
        * O(n^2). Example: A slow sorting algorithm, like selection sort.
        * O(n!). Example: A really slow algorithm, like the traveling salesperson.        

1.3 You have a name, and you want to find the person's phone number in the phone book.
    A: O(log n)

1.4 You have a phone number, and you want to find the person's name in the phone book. (Hint: You'll have to search through the whole book!)
    A: O(n)

1.5 You want to read the numbers of every person in the phone book.
    A: O(n)

1.6 You want to read the numbers of just the As. (This is a tricky one! It involves concepts that are covered more in chapter 4. Read the answer-you may be surprised!)
    A: O(n)

The Traveling Salesperson
    * O(n!) time or factorial time.
    * In general, for n items, it will take n! (n factorial) operatons to compute the result.

Recap
    * Algorithm speed isn't measured in seconds, but in growth of the number of operations.
    * Instead, we talk about how quickly the run time of an algorithm increases as the size of the input increses.
    * Run time of algorithms is expressed in Big O notation.
    * O(log n) is faster than O(n), but it gets a lot faster as the list of items you're searching grows.
"""