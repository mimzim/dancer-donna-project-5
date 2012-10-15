// define a SCORM object to interface with LMS
var oScorm = pipwerks.SCORM;  

// This function starts the course.  This function should be called first to ensure that
// all session variables are created
function loadOLM()
{
	// check to see if cookies is enabled, otherwise, this won't work
	if( typeof sessionStorage == "undefined" || sessionStorage.disabled )
	{
		alert( "You must enable cookies for this course to work properly." );
	}
	else
	{
		// if it is enabled, checked to see if this course was started
		// if it was not able to retrieve, the key "course_started", then
		// then this is the first time we are running the course
        if( !sessionStorage.getItem( "course_started" ) )
        {
        	// clear the session storage
            sessionStorage.clear();
            // set the "key" by giving it a value.  all values are strings!
            // course_started indicated that this OLM has started
    		sessionStorage.setItem( "course_started", "1" );
    			
			// set the values you want to persist throughout the website here
    		sessionStorage.setItem( "botswana", "0" );
    		sessionStorage.setItem( "finland", "0" );
    		sessionStorage.setItem( "palau", "0" );
    		sessionStorage.setItem( "uae", "0" );
        
        }
	}
	
	// initializeSCORM after the OLM environment has been set up
	initializeSCORM();
}

// This function initializes the course by connecting the OLM to the LMS 
// The SCORM connection is done once at the beginning of the course
// Another function, reportScores(), will connect again when the 
// user is done with the online learning module
function initializeSCORM()
{
	var lmsConnected = oScorm.init();
	
	// we only want to run initializeSCORM once, so use course_started
	// to keep track of how many times we have initialized 
	var getStarted = sessionStorage.getItem( "course_started" );
	
	// only do the following if we are connected to the LMS and
	// if course_started has a value of 1
	if( lmsConnected && getStarted == "1" )
	{
        // always set the status to incomplete
		oScorm.set( "cmi.success_status", "unknown" );
		oScorm.set( "cmi.lesson_status", "incomplete" );
		oScorm.set( "cmi.completion_status", "incomplete" );
		
		// change course_started to another value so that this initializeSCORM
		// does not run the initialization code again; otherwise, this OLM
		// will be incomplete if the user goes back to the first page even after
		// passing the exam 
		sessionStorage.setItem( "course_started", "2" );
    		
		// retrieve the LMS values here and integrate them into your course
		
	}
}

// This function reports the score from the assessment to the LMS
// This should only be called when the user submits the answers to the quiz
function reportScores()
{	
	// these are some test values
	oScorm.set("cmi.score.raw", 83 );
	oScorm.set("cmi.score.min", 0 );
	oScorm.set("cmi.score.max", 100 );
	oScorm.set("cmi.score.scaled", .83 );
	
	// Set the values and status here
	// for now, just set it to passed and completed
	oScorm.set( "cmi.success_status", "passed" );
	oScorm.set( "cmi.completion_status", "completed" );
	oScorm.set( "cmi.lesson_status", "passed" );

	oScorm.save();
}

// This function is called when the window is closed.  It saves and quits the course.
function finishOLM()
{
	oScorm.save();
	oScorm.quit();
}

function visitBotswana()
{
	sessionStorage.setItem( "botswana", "visited" );
	showTest();
}

function visitFinland()
{
	sessionStorage.setItem( "finland", "visited" );
	showTest();
}

function visitPalau()
{
	sessionStorage.setItem( "palau", "visited" );
	showTest();
	
}

function visitUae()
{
	sessionStorage.setItem ( "uae", "visited" );
	showTest();
}
function visitHome()
{
	sessionStorage.setItem( "home", "visited" );
	showTest();
}

// this function will check to see if every page was visited
// if so, show the Test link
function showTest()
{
	var homeVisited = sessionStorage.getItem( "home" );
	var botswanaVisited = sessionStorage.getItem( "botswana" );
	var finlandVisited = sessionStorage.getItem( "finland" );
	var palauVisited = sessionStorage.getItem( "palau" );
	var uaeVisited = sessionStorage.getItem( "uae" );
	
	if( homeVisited == "visited" && botswanaVisited == "visited" && finlandVisited == "visited" && palauVisited == "visited" && uaeVisited == "visited" )
	{
		document.getElementById( "quiz-link" ).style.display = "inline";
	}
	
}