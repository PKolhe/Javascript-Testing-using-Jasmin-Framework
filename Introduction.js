/*

    Introduction: 

        * Open Source Farmework
        * Behavior Driven Development (BDD)
        * Supports bothe client side & sever side testing

    Behavior Driven Development:
        * Is a super set of TDD
        * Focuses on language
        * In BDD tests are usually called as specs.
        * Test Process :

        Write a failing acceptance test  ==>  Write a failing unit test  ==>  Write a code to pass a Test
                  ||                                                                      ||
              Refactor Code           <==           Refactor Code          <==        Refactor Code

    Setting up a Jasmin:

        * Get a Source Code : https://github.com/jasmine/jasmine ( i.e. Jsamine libraries)
        * Create a spec runner file. ( i.e. html file)
        * Create a Test files. ( i.e. js file which contains test code)
    
    Organizing Tests, Files & Folders:

        * Project Root
            Scripts
                Module 1
                    -Source1.js
                Module 2
                    -Source2.js
            Tests
                Libs
                Module 1
                    -Source1.spec.js
                Module 2
                    -Source2.spec.js
    
    Grouping with Test runner files :

        TestFile1.html
            TestFile1.js
            SourceFile1.js
        TestFile2.html
            TestFile2.js
            SourceFile2.js
    
    Organizing Jasmine:

        * Describe blocks
            - Can be nested.
        Ex. 
            describe('user', function() {
                // tests 
            });

        Ex. describe('user', function() {
                describe('when new', function() {
                    // tests 
                });
            });
    
    Writing Jasmine Tests:

        * it() - Takes 2 parametrs: 
                1. a test description, 
                2. a callback function which contains code & test assertions.

            Ex. describe('Player', function() {
                    it('should be able to play a song', function() {
                        // Code and assertions
                    });
                });

        * beforeEach() & afterEach() -

            Ex. describe('User', function() {
                    var sut; 

                    beforeEach(function(){
                        sut = new SUT();
                    });

                    afterEach(function() {
                        // Clean up Code
                    })

                    it('should be able to play a song', function() {
                        // Code and assertions
                    });
                });

        * Matchers: ( Built in Matchers )

            * expect(x).toEqual(y);
            * expect(x).toBe(y);
            * expect(x).toMatch(y);
            * expect(x).toBeDefined(y);
            * expect(x).toBeUnDefined(y);
            * expect(x).toBeNull(y);
            * expect(x).toBeTruthy(y);
            * expect(x).toBeFalsy(y);
            * expect(x).toContain(y);
            * expect(x).toBeLessThan(y);
            * expect(x).toBeGreaterThan(y);
            * expect(function(){fun();}).toThrow(ex); 

        We can negate each of above matcher :

            * expect(x).not.toEqual(y);
            * expect(x).not.toBe(y);
            * expect(x).not.toMatch(y);
            * expect(x).not.toBeDefined(y);
            * expect(x).not.toBeUnDefined(y);
            * expect(x).not.toBeNull(y);
            * expect(x).not.toBeTruthy(y);
            * expect(x).not.toBeFalsy(y);
            * expect(x).not.toContain(y);
            * expect(x).not.toBeLessThan(y);
            * expect(x).not.toBeGreaterThan(y);
            * expect(function(){fun();}).toThrow(ex); 

        * Custom Matchers:
            * Custom matchers are created in beforeEach
            * this.addMAtchers() : use to add matcher 
            * The error message can be customised

            Ex.
                describe('Player', function() {
                    this.addMatchers( {
                        tobeFive: function() {
                            return this.actual === 5;
                        }
                    })        
                });
            Ex. Customise error message
                
                describe('Player', function() {
                    this.addMatchers( {
                        tobeFive: function() {
                            this.message = function() {
                                return this.actual + " is not 5, dummy."
                            }
                            return this.actual < 5;
                        }
                    })        
                });
            
    Running a Jasmine Tests:

        * Run in a browser
        * Hide & Display passed tests
        * Hide & display skipped tests
        * Filter tests
    
    Skipping a Tests:

        * Add a 'x' in front of the describe function of it function.
            Ex. xdescribe('Player', function() {
                        
                });
            Ex. xit('should be able to play a song', function() {
                    // Code and assertions
                });
    
    Integrating Jasmine with the DOM:

        * Test the DOM only when appropriate.
        * Requires additional setup & teardown.

    * Integrating with CI :

    * Asynchronous Tests:
        
 */