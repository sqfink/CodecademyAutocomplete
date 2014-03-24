var currID = CCDATA.composer.course._id;
for( var projIndex = 0; projIndex < CCDATA.composer.course.projects.length; projIndex++) {
	for( var chptIndex = 0; chptIndex < CCDATA.composer.course.projects[projIndex].checkpoints.length; chptIndex++){
		var projID = CCDATA.composer.course.projects[projIndex].id;
		var chptID = CCDATA.composer.course.projects[projIndex].checkpoints[chptIndex]._id;
	
		$.ajax({
type: "POST",
url: "http://www.codecademy.com/composer/" + projID + "/checkpoint/" + chptID + "/start",
});
	
		$.ajax({
type: "POST",
url: "http://www.codecademy.com/composer/" + projID + "/checkpoint/" + chptID + "/submit",
data: '{' +
   '"checkpoint_id":"' + chptID + '",' +
   '"curriculum_id":"' + currID + '",' +
   '"project_id":"' + projID + '",' +
   '"correct":true,' +
   '"latest_files":' +
   CCDATA.composer.course.projects[projIndex].checkpoints[chptIndex].cached_valid_answers[0] +
   ',' +
   '"created_at":' + new Date().getTime() + ',' +
   '"elapsed_time":300' +
'}',
contentType: "application/json"});

		$.ajax({
		type: "POST",
url: "http://www.codecademy.com/services/metrics/v1/Topics/Exercises~" + chptID + "/Actions",
data: '{"name":"finish"}',
contentType: "application/json"});

	}
}
