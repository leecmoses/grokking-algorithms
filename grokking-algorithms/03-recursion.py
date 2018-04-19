# 3 - Recursion
"""
Recursion
    * Recursion is where a function calls itself.
    * There’s no performance benefit to using recursion; in fact, loops are sometimes better for performance. 
        * I like this quote by Leigh Caldwell on Stack Overflow: “Loops may achieve a performance gain for
        your program. Recursion may achieve a performance gain for your programmer. Choose which is more important in your situation!”

Base Case and Recursive Case
    * Because a recursive function calls itself, it’s easy to write a function incorrectly that ends up in an in nite loop.
        * To kill your script, press Ctrl-C
    * Every recursive function has two parts: base case, and teh recursive case.
        * The base case is when the function doesn't call itself, so it doesn't go into an infinite loop.
        * Recursive case is when the function calls itself again.
"""

def countdown(i):
    print(i)
    if i <=0: # Base case
        return
    else: # Recursive case
        countdown(i-1)

"""
The Stack
    * Computer uses a stack internally called the call stack.
        * Push (insert) and pop (remove and read).
"""

def greet(name):
    print("Hello, " + name + "!")
    greet2(name)
    print("Getting ready to say bye...")
    bye()

def greet2(name):
    print("How are you, " + name + "?")

def bye():
    print("Ok, bye!")

greet("Maggie")

"""
3.1
Suppose I show you a call stack like this.

greet2
Name: Maggie
----
greet
Name: Maggie

What information can you give me, just based on this call stack?
    A:  * The greet function is called first, with name = maggie.
        * Then the greet function calls the greet2 function, with name = maggie.
        * At this point, the greet function is in an incomplete, suspended state.
        * The current function call is the greet2 function.
        * After this function call completes, the greet function will resume.

The Call Stack with Recursion
    * Recursive functions use the call stack too. The stack plays a big part in recursion.
    * Each function calls takes up some memory, and when your stack is too tall, that means your computer is saving information for many function calls.
    At that point, you have two options:
        * You can rewrite your code to use a loop instead.
        * You can use something called tail recursion. That's an advanced recursion topic that is out of the scope of this book. It's only supported by some languages, not all.

3.2
Suppose you accidently write a recursive function that runs forever. As you saw, your computer allocaates memory on the stack for each functionc all. What happens to the stack when your recursive function runs forever?
    A: The stack grows forever. Each program has a limited amount of space on the call stack. When your program runs out of space (which it eventually will), it will exit with a stack-overflow error.

Recap
    * Recursion is when a function calls itself.
    * Every recursive function has two cases: the base case and the recursive case.
    * A stack has two operations: push and pop.
    * All function calls go onto the call stack.
    The call stack can get very large, which takes up a lot fo memory.