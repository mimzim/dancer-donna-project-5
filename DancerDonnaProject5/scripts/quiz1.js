function submitQuiz()
{
	var numberCorrect = 0;
	var q1 = document.forms.quiz1.question1;
	
	if( q1[ 1 ].checked == true )
		{
		numberCorrect = numberCorrect + 1;
		}
	
	var q2 = document.forms.quiz1.question2;
	
	if ( q2[ 0 ].checked == true )
		{
		numberCorrect = numberCorrect + 1;
		}
	
	var q3 = document.forms.quiz1.question3;
	
	if ( q3[ 2 ].checked == true )
		{
		numberCorrect = numberCorrect + 1;
		}
	
	var q4 = document.forms.quiz1.question4;
	
	if ( q4[ 2 ].checked == true )
		{
		numberCorrect = numberCorrect + 1;
		}
	
	var q5 = document.forms.quiz1.question5;
	
	if ( q5[ 0 ].checked == true )
		{
		numberCorrect = numberCorrect + 1;
		}
	
	var q6 = document.forms.quiz1.question6;
	
	if ( q6[ 1 ].checked == true )
		{
		numberCorrect = numberCorrect + 1;
		}
	
var score= numberCorrect /6*100;
alert( numberCorrect /6 );
}