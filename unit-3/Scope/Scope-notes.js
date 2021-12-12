/**
 * - What is Scope? -
 * - a scope is a section in your program where a name binding is
 *      considered valid.
 *      - A name binding is when a variable (a name) evaluates to a certain
 *          variable.
 *  - when declaring a variable in a certain scope, it will evaluate to 
 *      specific value in the scope.
 */

/**
 * - Function Scope -
 * - when we enter a function, we enter a new scope.
 * - when making different objects in a scope, the object is unique to that
 *      scope at that time.
 *      - in separate scope, we are allowed to reuse variable names without
 *          any issues.
 * - refer to the outermost scope as the 'global scope', and the every
 *      function has it's own 'local scope'
 */

/**
 * - Scoping Variables -
 * - one things to note is that inner scopes have access to variables in 
 *      the out scopes.
 * - if a function does not declare a variable inside of it, and it is meant
 *      to refer to it, then JavaScript will keep searching outer and more
 *      outer scopes until it finds a variable name that matches the one.
 * - one thing to note is that inner functions can only look for things 
 *      outside of them if they have to, but an outer function will not look
 *      inward for the value.
 */

/**
 * - Importance of var -
 * - one thing to note is that 'var' is an optional statement to create a 
 *      variable.
 * - the 'var' keyword attaches the variable to the current scope. Failure
 *      to use 'var' will attach the variable to an outer scope, usually
 *      the global.
 *      - meaning if you use a variable in a function without a 'var' state-
 *          ment, then when the inner variable is called, it will display
 *          the outer variable's value.
 * - a function can change the value of a variable declared outside of the 
 *      function itself.
 */

/**
 * - Polluting the Global Namespace -
 * - Every time a variable is declared on a global scope, the chance of a 
 *      name collision increases. If 
 * - limiting global variables will also help use create code that is easily
 *      maintainable. 
 *      - make functions so that they are self-contained and not reliant on
 *          outer variables.
 * - if 'var' is not begin used within a function, then we are polluting the 
 *      global namespace.
 * - Every time we declare a function globally, we are polluting the gloabl
 *      namespace.
 * - Don't expose variables to the global scope if they don't need to be 
 *      there.
 */

/**
 * - JavaScript Scope Rules -
 * - general rules for scope in JS:
 *  1. Variables declared outside of functions are part of the global scope
 *  2. each function has it's own local scope.
 *  3. The 'var' keyword will attach a variable to the currect scope.
 *  4. An inner scope can access variables in a surrounding, out scope.
 *      But an inner scope cannot access variables in an inner scope.
 *  5. when searchin for a variable's value, JavaScript will search the 
 *      current scope until it find a matching variable declaration.
 */