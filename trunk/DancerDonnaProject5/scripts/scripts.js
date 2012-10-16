function startCourse()
{
	// check to see if cookies is enabled, otherwise, this won't work
	if( typeof sessionStorage === "undefined" || sessionStorage.disabled )
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
    		sessionStorage.setItem( "course_started", "1" );
    		sessionStorage.setItem( "home", "0" );
    		sessionStorage.setItem( "botswana", "0" );
    		sessionStorage.setItem( "finland", "0" );
    		sessionStorage.setItem( "palau", "0" );
    		sessionStorage.setItem( "uae", "0" );
    		
        }
	}
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
