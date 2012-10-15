// This function processes the quiz data
function submitQuiz1()
{
	var q1 = document.forms.quiz1.question1;
	var q2 = document.forms.quiz1.question2;
	
	if( q1[ 0 ].checked == true && q2[ 2 ].checked == true )
	{
		alert( "You passed!" );
	}
	else
	{
		alert( "you failed" );
	}
	
	// call the function to report scores
	parent.reportScores();
}